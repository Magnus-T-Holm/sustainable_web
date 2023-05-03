import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTitle() {

  const titles = {
    "/sustainable-web/": "Sustainable Web",
    "/sustainable-web/sustainability-og-accessibility": "Bæredygtighed & Accessibility - Sustainable Web",
    "/sustainable-web/companies": "Virksomheder - Sustainable Web",
  };

  const { pathname } = useLocation();
  useEffect(() => { document.title = titles[pathname] })
}