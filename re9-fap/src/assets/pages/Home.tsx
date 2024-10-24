import Header from "../components/header/Header";
import Card from "../components/card-inicial/Card";
import CardComentarios from "../components/card-comentarios/Card-comentarios";

function Home() {
    
    return (
        <>
            <Header/>
        <main>
            <Card/>
            <CardComentarios/>
        </main>  
        </>
    )
}

export default Home;