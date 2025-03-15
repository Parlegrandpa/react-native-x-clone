import { StyleSheet } from "react-native";
import CustomFlatList from "../CustomFlatList";

// const DATA = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

const DATA = [
  {
    accountName: "Paul Adebiyi",
    username: "parlegrandpa",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "You wasted all my time, i know you are gonna miss all of the times we had shared. There is only one Chloe in the world and no other woman can compare -- Chloe Bailey",
    media: [
      {
        type: "image",
        url: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
      },
      {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      },
    ],
    retweeted: {
      username: "Javas Goldsmith",
    },
  },
  {
    accountName: "Fabrizio Romano",
    username: "FabrizioRomano",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "🚨🔵 Chelsea keep working on deal to sign Dario Essugo from Sporting for the future. Talented midfielder is on BlueCo radar since January and relationship with Sporting remains excellent after Quenda deal.",
    media: [
      {
        type: "image",
        url: "https://i.sstatic.net/Bhpd8.jpg",
      },
    ],
  },
  {
    accountName: "Harrison A 🎯🎯🎯",
    username: "harreceipts",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "Nothing concern me, just supporting the vawulence between  @BashirElRufai and @Omojuwa with receipts! Make we for dey understand 😂",
    media: [],
    retweeted: {
      username: "Paul Adebiyi",
    },
  },
  {
    accountName: "MrBanks💰",
    username: "Mrbankstips",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "Hi @grok, kindly provide 10 football teams capable of winning their matches today and make these selections from the English Premier League, Italian Serie A, French Ligue 1, German Bundesliga and Spanish La liga.",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
  {
    accountName: "Instablog9ja",
    username: "instablog9ja",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText: "Cheating Allegations: Lande's wife clears the air",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      },
      {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      },
      {
        type: "image",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9APxkj0xClmrU3PpMZglHQkx446nQPG6lA&s",
      },
    ],
  },
];

const ForYouTab = ({ onScroll }: any) => {
  return (
    <CustomFlatList data={DATA} onScrollEvent={onScroll} screen={"forYou"} />
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
