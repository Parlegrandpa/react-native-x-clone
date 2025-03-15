import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Notification = () => {
  return (
    <SafeAreaView>
      <Text>Notification</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
