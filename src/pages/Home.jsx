import { useState, useEffect } from 'react';

import App from '../components/app/app';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import { HomeContainer } from './HomeStyled';
import { CreateItem } from '../utils/Commom';

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
                    CreateItem(response, i)
                )
            }
            setItens(ItensHtml);
        }).catch((err) => {
            setError(err.message);
        });
    }, []);

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