// hooks/useLockBodyScroll.js

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useLockBodyScroll(lockPaths = []) {
  const location = useLocation();

  useEffect(() => {
    if (lockPaths.includes(location.pathname)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location, lockPaths]);
}

export default useLockBodyScroll;
