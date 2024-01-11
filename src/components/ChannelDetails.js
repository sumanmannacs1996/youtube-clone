import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import Loader from "./Loader";

function ChannelDetails() {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!videos.length) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channelDetails} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex" margin="auto">
        <Box />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetails;
