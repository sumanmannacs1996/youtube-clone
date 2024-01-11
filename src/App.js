import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";
import ScroleTop from "./components/ScroleTop";

function App() {
  return (
    <BrowserRouter>
      <ScroleTop>
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </ScroleTop>
    </BrowserRouter>
  );
}

export default App;
