import { Button } from "@components/ui/button";
import { ChevronUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given amount
  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50"
    >
      <ChevronUpIcon className="h-4 w-4" />
    </Button>
  );
};

export default ScrollTop;
