export const truncateUserName = (accountName: string) => {
  const maxAccountNameLength = 11;
  return accountName.length > maxAccountNameLength
    ? `${accountName.substring(0, maxAccountNameLength)}...`
    : accountName;
};
