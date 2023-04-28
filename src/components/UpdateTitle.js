import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function UpdateTitle() {

    const titles = {
        "/sustainable-web": "Sustainable Web",
        "/sustainable-web/projects/card-draw": "Projekter - Spillekort",
        "/sustainable-web/projects/tarot": "Projekter - Tarot",
        "/sustainable-web/projects/memory-game": "Projekter - Huskespil"
    };

    const { pathname } = useLocation();
    useEffect(() => { document.title = titles[pathname] })
}