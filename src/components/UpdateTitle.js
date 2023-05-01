import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTitle() {

  const titles = {
    "/sustainable-web": "Sustainable Web",
    "/sustainable-web/sustainability": "Bæredygtighed - Sustainable Web",
    "/sustainable-web/accessibility": "Accessibility - Sustainable Web",
  };

  const { pathname } = useLocation();
  useEffect(() => { document.title = titles[pathname] })
}