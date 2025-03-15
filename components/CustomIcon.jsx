import { View, Image, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { IconData } from "@/types/types";

const CustomIcon = (data) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        minWidth: 100,
      }}
    >
      <MaterialIcons name={data.icon} size={24} color={data.color} />
    </View>
  );
};

export default CustomIcon;
