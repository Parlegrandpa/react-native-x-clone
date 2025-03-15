import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import CustomText from "../CustomText";
import { RetweetedData } from "@/types/types";
import { generalColor } from "@/constants/Colors";

const RetweetCard = ({ username }: RetweetedData) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={"retweet"} size={20} color={generalColor} />
      <CustomText
        text={`${username} reposted`}
        isHeader
        customStyle={{ color: generalColor }}
      />
    </View>
  );
};

export default RetweetCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 8,
    margin: 4,
    gap: 4,
    alignItems: "center",
  },
});
