import React, { useEffect } from "react";
import "./card.css";

const Card: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    const cards = document.querySelectorAll(".card-iniciais");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cards-section">
      <h1>Conexões que transformam</h1>
      <div className="container-inicial">
        <article className="card-iniciais">
          <h2>Vantagens da parceria</h2>
          <p>Facilita o match entre empresas, instituições, alunos e tutores, promovendo parcerias que aceleram a inovação e o aprendizado.</p>
        </article>
        <article className="card-iniciais">
          <h2>Dados das parcerias</h2>
          <p>+ de 100 Empresas cadastradas</p>
          <p>+ de 50 Instituições cadastradas</p>

        </article>
        <article className="card-iniciais">
          <h2>Desenvovimento de Talentos</h2>
          <p>As empresas têm acesso a futuros talentos, enquanto os alunos vivenciam experiências práticas em projetos reais.</p>
        </article>
        <article className="card-iniciais">
          <h2>Impacto Positivo</h2>
          <p>Gera valor para todos os envolvidos e contribui para o desenvolvimento do ecossistema de tecnologia e educação.</p>
        </article>
      </div>
    </div>
  );
};

export default Card;


