import { StyleSheet } from "react-native";
import CustomFlatList from "../CustomFlatList";
import postsData from "@/data/posts.json";
import { XPostDataProps } from "@/types/datatypes";
import { filterRepostsWithNoContent } from "@/utils/utils";

const filteredPosts = filterRepostsWithNoContent(postsData as XPostDataProps[]);
console.log(filteredPosts);

const FollowingTab = ({ onScroll }: any) => {
  return (
    <CustomFlatList
      data={filteredPosts}
      onScrollEvent={onScroll}
      screen={"following"}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default FollowingTab;
