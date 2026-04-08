import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Moved outside: FIXES the missing dependency warning
const pages = ["/", "/bus-all"];

function SwipePageBus({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const minSwipeDistance = 50; // minimum px required to trigger swipe

  const currentIndex = pages.indexOf(location.pathname);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
      setTouchStartY(e.touches[0].clientY);
      setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const distanceX = touchEndX - touchStartX;
      const distanceY = Math.abs(endY - touchStartY);

      // Ignore vertical swipes (scroll)
      if (Math.abs(distanceX) < Math.abs(distanceY)) return;

      if (Math.abs(distanceX) > minSwipeDistance && currentIndex !== -1) {
        if (distanceX > 0 && currentIndex > 0) {
          navigate(pages[currentIndex - 1]); // swipe right → previous
        } else if (distanceX < 0 && currentIndex < pages.length - 1) {
          navigate(pages[currentIndex + 1]); // swipe left → next
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, touchStartY, touchEndX, currentIndex, navigate]);

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        touchAction: "pan-y", // allow vertical scroll
      }}
    >
      {children}
    </div>
  );
}

export default SwipePageBus;
