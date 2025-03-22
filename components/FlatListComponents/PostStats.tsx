import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import MiniStats from "./MiniStats";
import { StatsDataProps } from "@/types/datatypes";
import { formatNumber } from "@/utils/utils";

const PostStats = ({data}: StatsDataProps) => {
  const { replies, likes, reposts, views } = data;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Comments clicked")}
      >
        <MiniStats icon={"comment-o"} value={formatNumber(replies)} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Retweet clicked")}
      >
        <MiniStats icon={"retweet"} value={formatNumber(reposts)} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Like clicked")}
      >
        <MiniStats icon={"heart-o"} value={formatNumber(likes)} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Views clicked")}
      >
        <MiniStats icon={"bar-chart-o"} value={formatNumber(views)} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Bookmark clicked")}
      >
        <MiniStats icon={"bookmark-o"} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => Alert.alert("Share clicked")}
      >
        <MiniStats icon={"share-square-o"} />
      </TouchableOpacity>
    </View>
  );
};

export default PostStats;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
