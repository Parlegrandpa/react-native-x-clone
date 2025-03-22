import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const textHeader = useThemeColor(
    { light: lightColor, dark: darkColor },
    "textHeader"
  );

  const textBody = useThemeColor(
    { light: lightColor, dark: darkColor },
    "textBody"
  );

  const color = type === "title" ? textHeader : textBody;

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins-Regular",
  },
  defaultSemiBold: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins-SemiBold",
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
    color: "#0a7ea4",
    fontFamily: "Poppins-Medium",
  },
});
