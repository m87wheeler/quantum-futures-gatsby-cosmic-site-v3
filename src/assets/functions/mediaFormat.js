import * as React from "react";

const videoExtensions = [
  "webm",
  "mpg",
  "mp2",
  "mpeg",
  "mpe",
  "mpv",
  "ogg",
  "mp4",
  "m4p",
  "m4v",
  "avi",
  "mov",
];
const imageExtensions = ["jpeg", "jpg", "png", "gif", "svg"];

// ? get media type and extention / format
const identifyFormat = (str) => {
  str = str.toString();
  let re = /(?:\.([^.]+))?$/;
  let format = re.exec(str)[1];
  let type;
  videoExtensions.forEach((ext) => (ext === format ? (type = "video") : null));
  imageExtensions.forEach((ext) => (ext === format ? (type = "image") : null));
  return {
    type,
    format,
  };
};

// ? return correct html element based on media type
export const mediaFormat = (url, poster, compress = true) => {
  return identifyFormat(url).type === "video" ? (
    <video
      autoPlay
      loop
      muted
      poster={poster ? `${poster}&auto=format,compress` : ""}
    >
      <source src={url} type={`video/${identifyFormat(url).format}`} />
    </video>
  ) : identifyFormat(url).type === "image" ? (
    <img
      src={`${compress ? `${url}&auto=format,compress` : url}`}
      alt="Hero Content"
    />
  ) : (
    <p>Not Supported</p>
  );
};
