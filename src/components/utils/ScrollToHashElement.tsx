import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                // Use a small timeout to ensure DOM is ready if needed, or just scroll
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        } else {
            // Optional: scroll to top if no hash and path changed?
            // window.scrollTo(0, 0); 
            // We might want this for standard navigation like /business
            if (location.pathname !== "/" && !location.hash) {
                window.scrollTo(0, 0);
            }
            // If we go to Home /, we also want to scroll top if no hash
            if (location.pathname === "/" && !location.hash) {
                window.scrollTo(0, 0);
            }
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;
