import { useEffect, useState } from "react";

export function TypeWriter({ text, delay }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearInterval(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      <span>{currentText}</span>
    </>
  );
}
