import { Image, StyleSheet, View } from "react-native";
import React from "react";

import images from "@/constants/images";
import CustomText from "../CustomText";
import { floatingColor } from "@/constants/Colors";
import { SinglePostData } from "@/types/types";

const AllNotificationCard = ({ data }: SinglePostData) => {
  const { accountName, username, postAt, media, bodyText, retweeted, stats } =
    data;

  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Image
          source={images.xLogo}
          style={[styles.headerImage, { width: 30, height: 30 }]}
        />
        <View style={{ flexDirection: "column", flex: 1, gap: 4 }}>
          <Image source={images.profile} style={styles.headerImage} />
          <CustomText text={accountName} isHeader />
          <CustomText text={bodyText} />
        </View>
      </View>
    </View>
  );
};

export default AllNotificationCard;

const styles = StyleSheet.create({
  text: { flex: 1 },
  item: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  bodyStyle: { fontSize: 12, fontFamily: "Poppins-Bold" },
  headerText: { fontSize: 12, fontFamily: "Poppins-Bold" },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  verifyIcon: {
    width: 16,
    height: 16,
    tintColor: floatingColor,
  },
});
