import React, { useRef } from "react";
import {
  View,
  Text,
  Animated,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
  useColorScheme,
} from "react-native";

import images from "@/constants/images";
import CustomText from "@/components/CustomText";
import CustomFlatList from "@/components/CustomFlatList";
import { useThemeColor } from "@/hooks/useThemeColor";

const ScrollHeaderScreen = () => {
  const colorScheme = useColorScheme();

  const backgroundColor = useThemeColor({}, "background");
  const textHeaderColor = useThemeColor({}, "textHeader");

  const scrollY = useRef(new Animated.Value(0)).current;
  const lastOffset = useRef(0);
  const headerOpacity = useRef(new Animated.Value(1)).current;
  const headerHeight = 150; // Increased header height to accommodate both image and text
  const fadeDuration = 200; // Adjust for smoothness

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        const scrollingDown = currentOffset > lastOffset.current;
        const scrollingUp = currentOffset < lastOffset.current;

        if (scrollingDown) {
          Animated.timing(headerOpacity, {
            toValue: 0,
            duration: fadeDuration,
            useNativeDriver: true,
          }).start();
        } else if (scrollingUp) {
          // Start fading out immediately when scrolling up
          Animated.timing(headerOpacity, {
            toValue: 0.5, // Set opacity to 0.5 as it starts to fade out
            duration: fadeDuration,
            useNativeDriver: true,
          }).start();
        }

        if (currentOffset <= 0) {
          // If at the top, ensure header is fully visible again
          Animated.timing(headerOpacity, {
            toValue: 1,
            duration: fadeDuration,
            useNativeDriver: true,
          }).start();
        }

        lastOffset.current = currentOffset;
      },
    }
  );

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            opacity: headerOpacity,
            height: headerHeight,
            backgroundColor: backgroundColor,
          },
        ]}
      >
        <View style={styles.headerContent}>
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
              isHeader={false}
              text="Upgrade"
              customStyle={[
                styles.headerText,
                { color: textHeaderColor, borderColor: textHeaderColor },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View>
          <CustomText
            isHeader={false}
            text="Upgrade"
            customStyle={[
              styles.headerText,
              { color: textHeaderColor, borderColor: textHeaderColor },
            ]}
          />
        </View>
        {/* <TabComponent onScroll={onScroll} headerHeight={headerHeight} /> */}
      </Animated.View>
      <CustomFlatList
        data={Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)}
        customStyle={styles.item}
        containerStyle={{ paddingTop: headerHeight }}
        onScrollEvent={onScroll}
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
    backgroundColor: "blue",
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
    // justifyContent: "space-between",
    alignItems: "center",
  },
  // headerTextContainer: {
  //   width: 70, // Set a fixed width (adjust as needed)
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  headerSection: {
    flex: 1, // Each section takes equal space
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
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default ScrollHeaderScreen;
