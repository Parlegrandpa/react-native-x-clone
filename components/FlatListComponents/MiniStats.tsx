import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MiniStatsProp } from "@/types/types";
import { generalColor } from "@/constants/Colors";
import CustomText from "../CustomText";

const MiniStats = ({ icon, value }: MiniStatsProp) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={18} color={generalColor} />
      {value && (
        <CustomText
          text={value}
          customStyle={{
            color: generalColor,
          }}
        />
      )}
    </View>
  );
};

export default MiniStats;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
  },
});
