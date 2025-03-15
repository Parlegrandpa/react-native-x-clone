import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SingleMediaData } from "@/types/types";

const MediaCard = ({ media }: SingleMediaData) => {
  const renderImages = () => {
    const imageCount = Math.min(media.length, 4);

    switch (imageCount) {
      case 1:
        return (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.full}
            onPress={() => Alert.alert("Image clicked is = ", media[0].url)}
          >
            <Image
              source={{ uri: media[0].url }}
              style={[styles.image, { flex: 1 }]}
            />
          </TouchableOpacity>
        );
      case 2:
        return (
          <View style={styles.row}>
            {media.slice(0, 2).map((img, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.6}
                style={styles.half}
                onPress={() => Alert.alert("Image clicked is = ", img.url)}
              >
                <Image
                  key={index}
                  source={{ uri: img.url }}
                  style={[
                    styles.image,
                    { flex: 1 },
                    index === 0 ? { marginRight: 2 } : { marginLeft: 2 },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        );
      case 3:
        return (
          <View style={styles.column}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.fullWidthHalf}
              onPress={() => Alert.alert("Image clicked is = ", media[0].url)}
            >
              <Image
                source={{ uri: media[0].url }}
                style={[styles.image, { marginBottom: 4, flex: 1 }]}
              />
            </TouchableOpacity>

            <View style={styles.row}>
              {media.slice(1, 3).map((img, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.6}
                  style={styles.half}
                  onPress={() => Alert.alert("Image clicked is = ", img.url)}
                >
                  <Image
                    key={index}
                    source={{ uri: img.url }}
                    style={[
                      styles.image,
                      { flex: 1 },
                      index === 0 ? { marginRight: 2 } : { marginLeft: 2 },
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.grid}>
            {media.slice(0, 4).map((img, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.6}
                style={styles.quarter}
                onPress={() =>
                  Alert.alert("Image clicked of index = ", img.url)
                }
              >
                <Image
                  key={index}
                  source={{ uri: img.url }}
                  style={[
                    styles.image,
                    { flex: 1 },
                    index === 0 ? { marginBottom: 2, marginRight: 2 } : {},
                    index === 1 ? { marginBottom: 2, marginLeft: 2 } : {},
                    index === 2 ? { marginTop: 2, marginRight: 2 } : {},
                    index === 3 ? { marginTop: 2, marginLeft: 2 } : {},
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.collageContainer}>{renderImages()}</View>;
};

const styles = StyleSheet.create({
  collageContainer: {
    height: 250,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ddd",
    flex: 1,
  },
  image: {
    resizeMode: "cover",
  },
  full: {
    width: "100%",
    height: "100%",
  },
  half: {
    width: "50%",
    height: "100%",
  },
  fullWidthHalf: {
    width: "100%",
    height: "50%",
  },
  quarter: {
    width: "49%",
    height: "49%",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  column: {
    flexDirection: "column",
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
});

export default MediaCard;
