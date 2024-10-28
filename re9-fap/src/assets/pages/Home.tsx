import Header from "../components/header/Header";
import Card from "../components/card-inicial/Card";
import Banner from './../components/banner/banner';
import CardComentarios from "../components/card-comentarios/Card-comentarios";
import Footer from "../components/footer/Footer";


function Home() {
    
    return (
        <>
            <Header/>
            <Banner/>
        <main>
            <Card/>
            <CardComentarios/>
        </main>  

            <Footer/>
        </>
    )
}

export default Home;