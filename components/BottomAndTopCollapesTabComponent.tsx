import React, { useState } from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CustomFlatList from "./CustomFlatList";
import { useThemeColor } from "@/hooks/useThemeColor";

const DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const FirstRoute = ({ onScroll, height, textBodyColor }: any) => {
  return (
    <CustomFlatList
      data={DATA}
      customStyle={styles.item}
      textStyle={{ color: textBodyColor }}
      onScrollEvent={onScroll}
      containerStyle={{ paddingTop: 0 }} // Ensure no overlap with the header
    />
  );
};

const SecondRoute = ({ onScroll, height, textBodyColor }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ color: textBodyColor }}>Second Route</Text>
    </View>
  );
};

const TabComponent = ({
  onScroll,
  headerHeight,
  animatedHeaderStyle,
  backgroundColor,
  textHeaderColor,
}: any) => {
  const layout = useWindowDimensions();

  const textBodyColor = useThemeColor({}, "textBody");

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First Tab" },
    { key: "second", title: "Second Tab" },
  ]);

  const renderTabBar = (props) => {
    console.log(props);
    return (
      <Animated.View
        style={[
          styles.tabBarContainer,
          {
            backgroundColor: backgroundColor,
            ...animatedHeaderStyle,
          },
        ]}
      >
        {/* {
  "jumpTo": "",
  "layout": { "height": 810, "width": 402 },
  "navigationState": { "index": 0, "routes": {} },
  "options": { "first": {}, "second": {} },
  "position": 0
} */}

        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: "#6200EE",
          }}
          jumpTo={props.jumpTo}
          navigationState={props.navigationState}
          options={props.options}
          position={props.position}
          layout={{
            height: 210,
            width: 402,
          }}
        />
      </Animated.View>
    );
  };

  const renderScene = SceneMap({
    first: () => (
      <FirstRoute
        onScroll={onScroll}
        height={headerHeight}
        textBodyColor={textBodyColor}
      />
    ),
    second: () => (
      <SecondRoute
        onScroll={onScroll}
        height={headerHeight}
        textBodyColor={textBodyColor}
      />
    ),
  });

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
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
    // marginTop: 120, // Ensure that the tab bar starts after the header
    zIndex: 100, // Ensure the tab bar is above the content
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
  },
  tabBar: {
    height: 0, // Reduced tab bar height
    paddingTop: 5, // Padding adjustment for inside the tab bar
    elevation: 0, // Optional: remove shadow or elevation
  },
});

export default TabComponent;
