import { StyleSheet } from "react-native";
import CustomFlatList from "../CustomFlatList";
import postsData from "@/data/posts.json";
import { useEffect, useState } from "react";
import { XPostDataProps } from "@/types/datatypes";

const ForYouTab = ({ onScroll }: any) => {
  const [posts, setPosts] = useState<XPostDataProps[]>([]);

  useEffect(() => {
    try {
      setPosts(postsData);
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  }, []);

  return (
    <CustomFlatList data={posts} onScrollEvent={onScroll} screen={"forYou"} />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default ForYouTab;
