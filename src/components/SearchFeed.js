import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" mb={2} sx={{ color: "white" }}>
        Search Result for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
