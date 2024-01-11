import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScroleTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

export default ScroleTop;
