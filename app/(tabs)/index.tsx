import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
  useColorScheme,
  Button,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  useDerivedValue,
} from "react-native-reanimated";

import images from "@/constants/images";
import { ThemedText } from "@/components/ThemedText";
import CustomText from "@/components/CustomText";
import HomeTabComponent from "@/components/HomeTabComponent";
import CustomFlatList from "@/components/CustomFlatList";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import useScrollFade from "@/hooks/useScrollFade";
import FloatingButton from "@/components/FloatingButton";

const ScrollHeaderScreen = () => {
  const colorScheme = useColorScheme();

  const backgroundColor = useThemeColor({}, "background");
  const textHeaderColor = useThemeColor({}, "textHeader");

  const { onScroll, animatedHeaderStyle, headerHeight } = useScrollFade();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: backgroundColor,
            ...animatedHeaderStyle,
          },
        ]}
      >
        <View
          style={[styles.headerContent, { backgroundColor: backgroundColor }]}
        >
          <View
            style={[
              styles.headerSection,
              {
                alignItems: "flex-start",
              },
            ]}
          >
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
              isHeader
              text="Upgrade"
              customStyle={[
                styles.headerText,
                { color: textHeaderColor, borderColor: textHeaderColor },
              ]}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <HomeTabComponent
        onScroll={onScroll}
        animatedHeaderStyle={animatedHeaderStyle}
        headerHeight={headerHeight}
        backgroundColor={backgroundColor}
      />

      <FloatingButton onPress={() => Alert.alert("Floating Button Pressed!")} />
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
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  headerContent: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
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
    color: "white",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "white",
    borderRadius: 20,
    padding: 6,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins-Bold",
  },
});

export default ScrollHeaderScreen;
