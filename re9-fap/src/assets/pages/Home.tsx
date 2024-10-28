import Header from "../components/header/Header";
import Card from "../components/card-inicial/Card";
import Banner from './../components/banner/banner';
import CardComentarios from "../components/card-comentarios/Card-comentarios";
import Footer from "../components/footer/Footer";
import MapPernambuco from "../components/mapa/MapPernambuco";
import Cardcadastro from "../components/cardcadastro/Cardcadastro";


function Home() {
    
    return (
        <>
            <Header/>
            <Banner/>
        <main>
            <Card/>
            <Cardcadastro/>
            <CardComentarios/>
            <MapPernambuco/>
        </main>  

            <Footer/>
        </>
    )
}

export default Home;