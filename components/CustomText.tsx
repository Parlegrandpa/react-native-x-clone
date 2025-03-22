import { View, Text, useColorScheme, StyleSheet } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

const CustomText = ({
  text,
  customStyle,
  isHeader = false,
  numberOfLines = 0,
  ellipsizeMode = undefined,
}: any) => {
  const colorScheme = useColorScheme();

  const color = isHeader
    ? colorScheme === "dark"
      ? Colors.dark.textHeader
      : Colors.light.textHeader
    : colorScheme === "dark"
    ? Colors.dark.textBody
    : Colors.light.textBody;

  const styleToUse = isHeader ? styles.headerText : styles.bodyStyle;

  return (
    <Text
      style={[styleToUse, { color }, customStyle]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  bodyStyle: { fontSize: 14, fontFamily: "Poppins-Regular" },
  headerText: { fontSize: 14, fontFamily: "Poppins-Bold" },
});
export default CustomText;
