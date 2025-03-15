import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  useColorScheme,
  Dimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import images from "@/constants/images";
import CustomText from "@/components/CustomText";
import { useThemeColor } from "@/hooks/useThemeColor";
import CustomFlatList from "@/components/CustomFlatList";

const HEADER_HEIGHT = 100;
const TAB_BAR_HEIGHT = 50;
const DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const FirstRoute = ({ scrollY }: { scrollY: Animated.Value }) => (
  <View style={{ flex: 1 }}>
    <CustomFlatList
      data={DATA}
      customStyle={styles.item}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      contentContainerStyle={{ paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT }}
    />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
    <Text style={styles.tabText}>Second Tab</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const ScrollHeaderScreen = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, "background");
  const textHeaderColor = useThemeColor({}, "textHeader");

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: "clamp",
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = ({ route }: { route: { key: string } }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute scrollY={scrollY} />;
      case "second":
        return <SecondRoute />;
      default:
        return null;
    }
  };

  const renderTabBar = (props: any) => (
    <Animated.View
      style={[
        styles.tabBarContainer,
        {
          transform: [{ translateY: headerTranslateY }],
        },
      ]}
    >
      <TabBar {...props} style={styles.tabBar} />
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      {/* Animated Header */}
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{ translateY: headerTranslateY }],
            backgroundColor,
          },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={[styles.headerSection, { alignItems: "flex-start" }]}>
            <Image source={images.profile} style={styles.headerImage} />
          </View>
          <View style={[styles.headerSection, { alignItems: "center" }]}>
            <Image source={images.xLogo} style={styles.logoImage} />
          </View>
          <TouchableOpacity
            style={[styles.headerSection, { alignItems: "flex-end" }]}
            activeOpacity={0.6}
            onPress={() => Alert.alert("Upgrade")}
          >
            <CustomText
              text="Upgrade"
              customStyle={[
                styles.headerText,
                { color: textHeaderColor, borderColor: textHeaderColor },
              ]}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Animated Tab Bar & Tab View */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  headerContent: {
    flex: 1,
    width: "100%",
    padding: 16,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  headerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  headerText: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 20,
    padding: 6,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins-Bold",
  },
  scene: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarContainer: {
    position: "absolute",
    top: HEADER_HEIGHT,
    width: "100%",
    zIndex: 999,
  },
  tabBar: {
    backgroundColor: "white",
    elevation: 4,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default ScrollHeaderScreen;
