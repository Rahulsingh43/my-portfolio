// import React, { useEffect, useState } from 'react';

// export default function Typewriter({ text = '', speed = 150 }) {
//   const [displayedText, setDisplayedText] = useState('');
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText(prev => prev + text[index]);
//         setIndex(prev => prev + 1);
//       }, speed);
//       return () => clearTimeout(timeout);
//     }
//   }, [index, text, speed]);

//   return <span>{displayedText}<span className="blinking-cursor">|</span></span>;
// }


// src/components/Typewriter.jsx
import React, { useEffect, useState } from "react";

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="border-r-2 border-black animate-blink">{text}</span>
  );
};

export default Typewriter;
