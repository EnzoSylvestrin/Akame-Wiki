import { useState, useEffect } from 'react';

import App from '../components/app/app';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import { HomeContainer } from './HomeStyled';
import { SingleItem } from '../components/app/appStyled';

import api from "../Api";

export default function Home() {

    const [error, setError] = useState("");
    const [Itens, setItens] = useState([]);

    useEffect(() => {
        var ItensHtml = [];

        api.get().then((response) => {
            response = response.data;
            for(let i = 0; i < response.length; i++) {
                ItensHtml.push(
                    <SingleItem
                        key={i}
                        className={(i + 1) % 2 === 1 ? 'mg-r' : ''} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }} //onScroll
                        transition={{ duration: 0.2 }}
                        href="/"
                    >
                        <div className="text-wrapper">
                            <h1>{`#${i + 1}`}</h1>
                            <h2>{`${response[i].nome}`}</h2>
                            <p>{`idade: ${response[i].idade === -1 ? 'desconhecida' : response[i].idade}`}</p>
                        </div>
                        <div className="img-wrapper">
                            <img src={response[i].imagem} alt="imagem do personagem"/>
                        </div>
                    </SingleItem>
                )
            }
            setItens(ItensHtml);
        }).catch((err) => {
            console.log(err);
            setError(err.message);
        });
    }, [])

    return (
        <>
            <HomeContainer >
                <Header />
                <App Itens={Itens} error={error} />
            </HomeContainer>
            <Footer />
        </>
    )
}