import React from "react";

const Footer = () => {
    let isDanish;

    if (localStorage.getItem("isDanish") == null) {
        localStorage.setItem("isDanish", "true")
    }

    if (localStorage.getItem("isDanish") === "true") {
        isDanish = true
    } else {
        isDanish = false
    }

    function languageSwitchDanish() {
        if (localStorage.getItem("isDanish") === "false") {
            localStorage.setItem("isDanish", "true")
            window.location.reload();
        }
    }

    function languageSwitchEnglish() {
        if (localStorage.getItem("isDanish") === "true") {
            localStorage.setItem("isDanish", "false")
            window.location.reload();
        }
    }

    return (
        <footer>
            <div id="language_selectors">
                <span onClick={languageSwitchDanish}>Dansk</span>
                <hr />
                <span onClick={languageSwitchEnglish}>English</span>
            </div>
        </footer>
    );
};

export default Footer;
