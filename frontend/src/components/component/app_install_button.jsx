import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

export default function AddToHomeScreen() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    const ios =
      /iphone|ipad|ipod/i.test(window.navigator.userAgent) &&
      !window.MSStream;
    setIsIOS(ios);

    // Detect if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      setIsInstalled(true);
    }

    // Capture install prompt (Android)
    const handler = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Detect successful install
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setPromptEvent(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    // Already installed
    if (isInstalled) {
      alert("App already installed");
      return;
    }

    // iOS instruction
    if (isIOS) {
      alert("Tap Share → Add to Home Screen");
      return;
    }

    // Android install
    if (!promptEvent) {
      alert("1. Tap Again \nOR\n2. Tap Menu → Add to Home Screen → Install");
      return;
    }

    promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
  };

  return (
    <FiDownload
      onClick={installApp}
      style={{ cursor: "pointer" }}
      title="Add to Home Screen"
    />
  );
}
