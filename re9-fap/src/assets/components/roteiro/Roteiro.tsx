import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './Roteiro.css';

const cardData = [
  { 
    number: 1, 
    title: "Faça seu cadastro", 
    text: "Preencha o formulário com suas informações pessoais e escolha sua área de interesse." 
  },
  { 
    number: 2, 
    title: "Escolha um projeto e aguarde o retorno", 
    text: "Analise as opções disponíveis, selecione seu projeto e aguarde a aprovação." 
  },
  { 
    number: 3, 
    title: "Parabéns!", 
    text: "Agora é só dar o seu melhor e aproveitar esta grande oportunidade!" 
  },
];

const Roteiro: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const cardIndex = cardRefs.current.indexOf(entry.target as HTMLDivElement);

      if (entry.isIntersecting) {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[cardIndex] = true;
          return updated;
        });
      } else {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[cardIndex] = false;
          return updated;
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    cardRefs.current.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <h1>Seu Caminho para o Sucesso</h1>
      <div className="cards">
        {cardData.map(({ number, title, text }, index) => (
          <motion.div
            className="card"
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            key={number}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: visibleCards[index] ? 1 : 0,
              y: visibleCards[index] ? 0 : 50,
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="card-content">
              <div className="card-number">{number}</div>
              <div className="card-texts">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roteiro;

