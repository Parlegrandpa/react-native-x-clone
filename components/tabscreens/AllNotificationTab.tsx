import { StyleSheet } from "react-native";
import CustomFlatList from "../CustomFlatList";

// const DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const DATA = [
  {
    accountName: "Paul Adebiyi",
    bodyText:
      "You wasted all my time, i know you are gonna miss all of the times we had shared. There is only one Chloe in the world and no other woman can compare -- Chloe Bailey",
  },
  {
    accountName: "Fadsafzio Vethtgfd",
    bodyText:
      "🚨🔵 Chelsea keep working on deal to sign Dario Essugo from Sporting for the future. Talented midfielder is on BlueCo radar since January and relationship with Sporting remains excellent after Quenda deal.",
  },
  {
    accountName: "Hadirson A 🎯🎯🎯",
    bodyText:
      "Nothing concern me, just supporting the vawulence between  @BashirElRufai and @Omojuwa with receipts! Make we for dey understand 😂",
  },
  {
    accountName: "DrBnks💰",
    bodyText:
      "Hi @grok, kindly provide 10 football teams capable of winning their matches today and make these selections from the English Premier League, Italian Serie A, French Ligue 1, German Bundesliga and Spanish La liga.",
  },
  {
    accountName: "Instlogjhja",
    bodyText: "Cheating Allegations: Lande's wife clears the air",
  },
];

const AllNotificationTab = ({ onScroll }: any) => {
  return (
    <CustomFlatList
      data={DATA}
      onScrollEvent={onScroll}
      screen={"allnotification"}
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

export default AllNotificationTab;
