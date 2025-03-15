import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomFlatListProps } from "@/types/types";
import CustomFlatListItem from "./CustomFlatListItem";

const CustomFlatList = ({
  data,
  onScrollEvent,
  screen = "default",
}: CustomFlatListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(item) => (
        <CustomFlatListItem listData={item.item} screen={screen} />
      )}
      onScroll={onScrollEvent}
      scrollEventThrottle={16}
    />
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({});
