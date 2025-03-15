import { StyleSheet } from "react-native";
import CustomFlatList from "../CustomFlatList";

const DATA = [
  {
    accountName: "Jagaban of US 🇳🇬🇺🇸",
    username: "Msbmiin01",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText: "Babasuwe 🤣🤣🤣",
    media: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg",
      },
    ],
    retweeted: {
      username: "HalfMan/HalfAmazing",
    },
    stats: {
      comments: 29,
      retweets: 40,
      likes: 2000,
      views: 20000,
    },
  },
  {
    accountName: "Binu Okuala 🔥🔫",
    username: "binuvvyRinu",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "The number of people saying stable 24/7 electricity supply won’t help Nigerians are beginning to increase. Some are even writing articles. Please, is it a PR gig or where are they crawling out from?",
    media: [
      {
        type: "image",
        url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      },
      {
        type: "image",
        url: "https://media.gettyimages.com/id/1472335476/photo/digitally-generated-image-of-isometric-data-chart.jpg?s=612x612&w=gi&k=20&c=UVxyAlLZj-F7VtVjYJ4CtRuTF7bY2rNxjbsNYsxdIbA=",
      },
    ],
    stats: {
      comments: 10,
      retweets: 83,
      likes: 235,
      views: 4305,
    },
  },
  {
    accountName: "froyele Sovore",
    username: "efdbSowore",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "We are with you all the way; if the @officialnyscng tries anything funny to intimidate, harass, or victimize, we will Ma March on them with utmost resistance! #RevolutionNow",
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
    retweeted: {
      username: "iThinkCritical ®",
    },
    stats: {
      comments: 2,
      retweets: 42,
      likes: 53000,
      views: 240000,
    },
  },
  {
    accountName: "Jdy On-lir",
    username: "ydy_onlir",
    postAt: "Wed, 20 Jan 2022 9:30 PM",
    bodyText:
      "An NYSC staff has called this lady to threaten her for speaking about the pain she is facing as a Nigerian. Truly pathetic. I will be actively following this story to make sure I help amplify her voice and that nothing happens to her.",
    media: [],
    retweeted: {
      username: "HalfMan/HalfAmazing",
    },
    stats: {
      comments: 2903,
      retweets: 4042,
      likes: 5390,
      views: 20230,
    },
  },
];

const FollowingTab = ({ onScroll }: any) => {
  return (
    <CustomFlatList data={DATA} onScrollEvent={onScroll} screen={"following"} />
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
