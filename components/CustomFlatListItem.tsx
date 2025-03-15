import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { CustomFlatListItemProps } from "@/types/types";
import PostCard from "./FlatListComponents/PostCard";
const CustomFlatListItem = ({ listData, screen }: CustomFlatListItemProps) => {
  // const renderItem = () => {
  //   switch (screen) {
  //     case "forYou":
  //       return <ForYouItem data={listData} />;
  //     // case "text":
  //     //   return <TextItem listData={listData} />;
  //     default:
  //       return <ForYouItem data={listData} />;
  //   }
  // };

  return <View style={styles.container}>{<PostCard data={listData} />}</View>;
};

export default CustomFlatListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: 50,
    height: 50,
    // borderColor: SECONDARY_DEFAULT_COLOR,
    borderWidth: 2,
    borderRadius: 10,
  },
  imageAndTextStyle: {
    flexDirection: "row",
  },
  titleAndSubtitleContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 4,
    marginHorizontal: 8,
  },
  titleStyle: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
  },
  creatorStyle: {
    fontFamily: "Poppins-Regular",
    // color: GREY_COLOR,
    fontSize: 12,
  },
  iconStyle: {
    height: 24,
    width: 24,
    resizeMode: "center",
  },
  touchableStyle: {
    alignSelf: "center",
  },
  videoStyle: {
    height: 200,
    width: "100%",
    marginVertical: 24,
    position: "relative",
    justifyContent: "center",
  },
  videoImageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  videoPlayIconStyle: {
    height: 24,
    width: 24,
    resizeMode: "contain",
    position: "absolute",
    alignSelf: "center",
  },
});
