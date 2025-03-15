import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import images from "@/constants/images";
import CustomText from "../CustomText";
import icons from "@/constants/icons";
import { floatingColor } from "@/constants/Colors";
import { SinglePostData } from "@/types/types";
import { truncateUserName } from "@/utils/utils";
import MediaCard from "./MediaCard";
import RetweetCard from "./RetweetCard";
import PostStats from "./PostStats";
import { useContextMenu } from "@/hooks/useContextMenu";
import PostMenuModal from "../PostMenuModal";

const PostCard = ({ data }: SinglePostData) => {
  const { isVisible, position, showMenu, hideMenu, handleMenuItemPress } =
    useContextMenu([
      {
        label: "View Post Interactions",
        callback: () => console.log("View interactions"),
      },
      { label: "Report Post", callback: () => console.log("Report post") },
      {
        label: "Request Community Note",
        callback: () => console.log("Request note"),
      },
    ]);

  const { accountName, username, postAt, media, bodyText, retweeted, stats } =
    data;

  const truncatedAccountName = truncateUserName(accountName);

  return (
    <View style={styles.item}>
      {retweeted && <RetweetCard username={retweeted.username} />}

      <View style={{ flexDirection: "row", gap: 8 }}>
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
            <CustomText text={`@${username}`} />
            <CustomText text="- 12h" />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
              }}
              activeOpacity={0.6}
              onPress={showMenu}
            >
              <Ionicons
                name="ellipsis-horizontal-sharp"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <CustomText text={bodyText} />

          {media && media.length > 0 ? <MediaCard media={media || []} /> : null}

          <PostStats {...stats} />
        </View>
      </View>

      <PostMenuModal
        isVisible={isVisible}
        position={position}
        hideMenu={hideMenu}
        handleMenuItemPress={handleMenuItemPress}
        menuItems={[
          {
            label: "View Post Interactions",
            callback: () => console.log("View interactions"),
            icon: "bar-chart",
          },
          {
            label: "Report Post",
            callback: () => console.log("Report post"),
            icon: "flag",
          },
          {
            label: "Request Community Note",
            callback: () => console.log("Request note"),
            icon: "comment",
          },
        ]}
      />
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  text: { flex: 1 },
  item: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  bodyStyle: { fontSize: 12, fontFamily: "Poppins-Bold" },
  headerText: { fontSize: 12, fontFamily: "Poppins-Bold" },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  verifyIcon: {
    width: 16,
    height: 16,
    tintColor: floatingColor,
  },
});
