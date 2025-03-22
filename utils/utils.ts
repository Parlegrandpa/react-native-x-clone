import { XPostDataProps } from "@/types/datatypes";

export const truncateUserName = (accountName: string) => {
  const maxAccountNameLength = 11;
  return accountName.length > maxAccountNameLength
    ? `${accountName.substring(0, maxAccountNameLength)}...`
    : accountName;
};

export const formatNumber = (num: number) => {
  if (num >= 1e6) {
    let formattedNum = (num / 1e6).toFixed(2);
    return formattedNum.endsWith(".00")
      ? (num / 1e6).toFixed(0) + "m"
      : formattedNum + "m";
  } else if (num >= 1e3) {
    let formattedNum = (num / 1e3).toFixed(2);
    return formattedNum.endsWith(".00")
      ? (num / 1e3).toFixed(0) + "k"
      : formattedNum + "k";
  }
  return num.toString();
};

// Function to filter reposts with no content
export const filterRepostsWithNoContent = (
  posts: XPostDataProps[]
): XPostDataProps[] => {
  return posts.filter((item) => {
    const isRepost = item.repostDetails && item.repostDetails.isRepost === true;
    const hasNoContent = item.post.content === "";
    return isRepost && hasNoContent;
  });
};
