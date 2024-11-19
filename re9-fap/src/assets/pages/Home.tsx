import Header from "../components/header/Header";
import Card from "../components/card-inicial/Card";
import Banner from './../components/banner/banner';
import CardComentarios from "../components/card-comentarios/Card-comentarios";
import Footer from "../components/footer/Footer";
import MapPernambuco from "../components/mapa/MapPernambuco";
import Cardcadastro from "../components/cardcadastro/Cardcadastro";
// import GridComponent from "../components/GridComponent/GridComponent";


import React, { useState, useEffect } from 'react';
import Roteiro from '../components/roteiro/Roteiro' // Importando o componente Cards


function Home() {

    const [showCards, setShowCards] = useState<boolean>(false);

    // Função para verificar a posição de rolagem
    const handleScroll = () => {
      const cardPosition = document.getElementById('cards')?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;
  
      if (cardPosition < windowHeight * 0.8) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    };
  
    // Hook para escutar a rolagem
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    
    return (
        <>
            <Header/>
            <Banner/>
        <main>
                    
            <Card/>
            <Roteiro show={showCards} />
            <Cardcadastro/>
            <CardComentarios/>
            <MapPernambuco/>
        </main>  

            <Footer/>
        </>
    )
}

export default Home;