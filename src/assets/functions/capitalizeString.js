export const capitalizeString = (str) => {
  let words = str.split(" ");

  words = words
    .map((word) => word.toLowerCase())
    .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`);

  return words.join(" ");
};
