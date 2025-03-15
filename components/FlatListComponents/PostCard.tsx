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
import { PostData, SinglePostData } from "@/types/types";
import { truncateUserName } from "@/utils/utils";

const ForYouItem = ({ data }: SinglePostData) => {
  const { accountName, username, postAt, media, bodyText } = data;

  const truncatedAccountName = truncateUserName(accountName);

  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Image source={images.profile} style={styles.headerImage} />
        <View style={{ gap: 4, flex: 1 }}>
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
          </View>

          <CustomText text={bodyText} />
        </View>

        <TouchableOpacity
          style={{}}
          activeOpacity={0.6}
          onPress={() => Alert.alert("Ellips clicked")}
        >
          <Ionicons name="ellipsis-horizontal-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForYouItem;

const styles = StyleSheet.create({
  text: { flex: 1 },
  item: {
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
