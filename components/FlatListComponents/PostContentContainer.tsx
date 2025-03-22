import { Image, StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import MediaCard from "./MediaCard";
import { useContextMenu } from "@/hooks/useContextMenu";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { floatingColor } from "@/constants/Colors";
import { PostContentContainerProps } from "@/types/datatypes";
import { truncateUserName } from "@/utils/utils";

const PostContentContainer = ({ post }: PostContentContainerProps) => {
  const { author, content, media } = post;

  const truncatedAccountName = truncateUserName(author.displayName);

  return (
    <View style={{ borderRadius: 20, borderColor: "#9BA1A6", borderWidth: 1 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          paddingStart: 16,
          paddingEnd: 16,
          paddingTop: 16,
        }}
      >
        <Image source={images.profile} style={styles.headerImage} />
        <View style={{ flexDirection: "column", flex: 1, gap: 8 }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              gap: 4,
            }}
          >
            <CustomText text={truncatedAccountName} isHeader />
            <Image source={icons.verify} style={styles.verifyIcon} />
            <CustomText text={`@${author.username}`} />
            <CustomText text="- 12h" />
          </View>
        </View>
      </View>
      <CustomText
        customStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
        text={content}
      />

      {media && media.length > 0 ? <MediaCard media={media || []} /> : null}
    </View>
  );
};

export default PostContentContainer;

const styles = StyleSheet.create({
  headerImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
  },
  verifyIcon: {
    width: 16,
    height: 16,
    tintColor: floatingColor,
  },
});
