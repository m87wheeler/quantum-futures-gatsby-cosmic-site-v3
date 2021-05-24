import React, { useState, useEffect } from "react";

// ***

// ***
import Layout from "../style/Layout";
import RSSCard from "../components/composite/RSSCard/RSSCard";

// ***

const RSSPage = () => {
  const [rssFeed, setRssFeed] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === undefined) return;
    const fetchRSS = async () => {
      const url = `http://localhost:3001?api_key=AzcC1mkNrMYGqXXEoJyUtZF0EBKSeVVxmzkCbNPc7qy00Uy8yk10Jr6eyfPf2exi0Z5ssUWqNHa17RlT0ng`;
      const req = await fetch(url);
      const res = await req.json();
      if (!res.success) {
        alert("Unsuccessful fetch!");
      } else {
        const data = JSON.parse(res.data);
        setRssFeed(data);
      }
      setIsLoading(false);
    };
    fetchRSS();
  }, []);

  return (
    <Layout>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexFlow: "column nowrap",
          gap: ".5rem",
        }}
      >
        <h1>RSS Feed</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          rssFeed.rss.channel[0].item.map((item) => (
            <RSSCard
              key={item.guid[0]["_"]}
              href={item.link[0]}
              title={item.title}
              created={item.pubDate[0]}
              type={item.category[0]}
              author={item["dc:creator"]}
              content={item.description[0]}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default RSSPage;
