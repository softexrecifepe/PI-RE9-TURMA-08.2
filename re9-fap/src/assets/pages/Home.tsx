import Header from "../components/header/Header";
import Card from "../components/card-inicial/Card";
import CardComentarios from "../components/card-comentarios/Card-comentarios";
import Footer from "../components/footer/Footer";

function Home() {
    
    return (
        <>
            <Header/>
        <main>
            <Card/>
            <CardComentarios/>
        </main>  

            <Footer/>
        </>
    )
}

export default Home;