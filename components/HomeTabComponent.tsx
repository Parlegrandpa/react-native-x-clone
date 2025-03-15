import React, { useState } from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CustomFlatList from "./CustomFlatList";
import { useThemeColor } from "@/hooks/useThemeColor";
import CustomText from "./CustomText";
import { floatingColor } from "@/constants/Colors";
import ForYouTab from "./tabscreens/ForYouTab";
import FollowingTab from "./tabscreens/FollowingTab";

const HomeTabComponent = ({
  onScroll,
  headerHeight,
  animatedHeaderStyle,
  backgroundColor,
}: any) => {
  const layout = useWindowDimensions();

  const textHeaderColor = useThemeColor({}, "textHeader");
  const textBodyColor = useThemeColor({}, "textBody");

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "For you" },
    { key: "second", title: "Following" },
    { key: "third", title: "Chelsea fans" },
  ]);

  const renderTabBar = (props: any) => {
    return (
      <Animated.View
        style={[
          styles.tabBarContainer,
          {
            // backgroundColor: backgroundColor,
            ...animatedHeaderStyle,
          },
        ]}
      >
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: floatingColor,
          }}
          style={[styles.tabBar, { backgroundColor: backgroundColor }]}
        />
      </Animated.View>
    );
  };

  const renderScene = SceneMap({
    first: () => <ForYouTab onScroll={onScroll} height={headerHeight} />,
    second: () => <FollowingTab onScroll={onScroll} height={headerHeight} />,
    third: () => <FollowingTab onScroll={onScroll} height={headerHeight} />,
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        commonOptions={{
          label: ({ route, labelText, focused, color }) => (
            <CustomText
              isHeader={false}
              text={labelText}
              customStyle={[
                styles.labelText,
                { color: focused ? textHeaderColor : textBodyColor },
              ]}
            />
          ),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0, // Add margin to ensure space for the header
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabBarContainer: {
    marginTop: 48, // Ensure that the tab bar starts after the header
    zIndex: 100, // Ensure the tab bar is above the content
    // backgroundColor: "red",
    // position: "absolute",
    // bottom: 0,
  },
  tabBar: {
    height: 48, // Reduced tab bar height
    paddingTop: 0, // Padding adjustment for inside the tab bar
    elevation: 0, // Optional: remove shadow or elevation
    // backgroundColor: "green",
    position: "absolute",
    bottom: 0,
  },
  labelText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins-Bold",
  },
});

export default HomeTabComponent;
