import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

function Sidebar({ selectedCatagory, setSelectedCatagory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((catagory) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: catagory.name === selectedCatagory && "#fc1503",
            color: "white",
          }}
          key={catagory.name}
          onClick={() => setSelectedCatagory(catagory.name)}
        >
          <span
            style={{
              color: catagory.name === selectedCatagory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {catagory.icon}
          </span>
          <span
            style={{
              opacity: catagory.name === selectedCatagory ? "1" : "0.8",
            }}
          >
            {catagory.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
