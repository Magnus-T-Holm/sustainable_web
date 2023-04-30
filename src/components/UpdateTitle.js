import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTitle() {

  const titles = {
    "/sustainable-web": "Sustainable Web",
    "/sustainable-web/sustainability": "SW - Bæredygtighed",
    "/sustainable-web/accessibility": "SW - Accessibility",
  };

  const { pathname } = useLocation();
  useEffect(() => { document.title = titles[pathname] })
}