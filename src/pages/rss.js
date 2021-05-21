import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div``;

const RssPage = ({ ...props }) => {
  useEffect(() => {
    const websiteUrl = `https://thequantumdaily.com/feed/`;
    const fetchRSS = async () => {
      try {
        const req = await fetch(websiteUrl, { mode: "no-cors" });
        const res = await req.text();
        const data = new window.DOMParser().parseFromString(res, "text/xml");
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRSS();
  }, []);

  return (
    <Wrapper {...props}>
      <h1>RSS Feed</h1>
    </Wrapper>
  );
};

export default RssPage;
