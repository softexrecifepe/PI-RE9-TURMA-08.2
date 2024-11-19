import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './Roteiro.css'; // Import CSS

const Roteiro: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);
  const cardRefs = useRef([]); // Array of refs for each card

  // Improved intersection observer implementation
  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    // ... rest of your function code
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cardIndex = cardRefs.current.indexOf(entry.target); // Efficient index lookup
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[cardIndex] = true;
          return updated;
        });
        observer.unobserve(entry.target); // Unobserve after visibility change
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observe within viewport
      threshold: 0.5, // Trigger animation when 50% or more is visible
    });

    cardRefs.current.forEach((card) => observer.observe(card)); // Observe cards

    return () => {
      observer.disconnect(); // Disconnect on cleanup
    };
  }, [cardRefs]);

  return (
    <div className="container">
      <div className="cards">
        {visibleCards.map((isVisible, index) => (
          <motion.div
            className="card"
            ref={(el) => (cardRefs.current[index] = el)} // Store refs
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Card {index + 1}</h2>
            <p>Conteúdo do Card {index + 1}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roteiro;