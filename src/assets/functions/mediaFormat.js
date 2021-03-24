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
  str = str.toString().toLowerCase();
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
  if (!url && !poster) return <p>No media provided</p>;
  if (identifyFormat(url).type === "video") {
    return (
      <video autoPlay loop muted poster={poster}>
        <source
          src={url ? url : ""}
          type={`video/${identifyFormat(url).format}`}
        />
      </video>
    );
  } else if (identifyFormat(url).type === "image") {
    return <img src={url} alt="Hero Content" />;
  } else if (identifyFormat(poster).type === "image") {
    return <img src={poster} alt="Hero Content" />;
  }
  return <p>Unsupported media type</p>;
};
