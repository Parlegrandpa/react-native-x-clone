import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
// import F
import { useContextMenu } from "@/hooks/useContextMenu";
import { PostMenuModalProps } from "@/types/types";
import { useThemeColor } from "@/hooks/useThemeColor";
import CustomText from "./CustomText";
import { FontAwesome } from "@expo/vector-icons";

const PostMenuModal = ({
  isVisible,
  position,
  hideMenu,
  handleMenuItemPress,
  menuItems,
}: PostMenuModalProps) => {
  const backgroundColor = useThemeColor({}, "background");
  const iconColor = useThemeColor({}, "tint");

  const [screenWidth, setScreenWidth] = useState<number>(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState<number>(
    Dimensions.get("window").height
  );
  const modalWidth = 250; // Width of the modal
  const modalHeight = menuItems.length * 50 + 20; // Approximate height based on items (adjust as needed)

  // Update screen dimensions on orientation change or resize
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    });
    return () => subscription.remove();
  }, []);

  // Calculate adjusted position to keep modal within screen bounds
  const adjustedPosition = {
    top: Math.min(
      Math.max(position.y - 100, 10), // Minimum 10px from top
      screenHeight - modalHeight - 10 // Maximum to avoid going off bottom
    ),
    left: Math.min(
      Math.max(position.x - modalWidth / 2, 10), // Center the modal, minimum 10px from left
      screenWidth - modalWidth - 10 // Maximum to avoid going off right
    ),
  };

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={hideMenu}>
      <TouchableOpacity style={styles.modalOverlay} onPress={hideMenu}>
        <View
          style={[
            styles.popupContainer,
            // { top: position.y - 100, left: position.x - 50 },
            {
              backgroundColor: backgroundColor,
              top: adjustedPosition.top,
              left: adjustedPosition.left,
              width: modalWidth,
              height: modalHeight,
            },
          ]}
        >
          {[
            {
              label: "View Post Interactions",
              callback: () => console.log("View interactions"),
              icon: "bar-chart-o",
            },
            {
              label: "Report Post",
              callback: () => console.log("Report post"),
              icon: "flag-o",
            },
            {
              label: "Request Community Note",
              callback: () => console.log("Request note"),
              icon: "bell-o",
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handleMenuItemPress(item.label, item.callback)}
            >
              <View style={{ flexDirection: "row", gap: 16 }}>
                <CustomText text={item.label} customStyle={styles.menuText} />
                <FontAwesome name={item.icon} size={18} color={iconColor} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupContainer: {
    position: "absolute",
    backgroundColor: "#333",
    borderRadius: 10,
    paddingVertical: 5,
    width: 250,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 14,
  },
});

export default PostMenuModal;
