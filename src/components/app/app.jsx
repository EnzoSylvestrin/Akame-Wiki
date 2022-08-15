import { useEffect, useState } from 'react';
import { Container, GridContainer, LoadingComponent, SingleItem } from './appStyled';
import api from "../../Api";

export default function App(){

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
                            <p>{`idade: ${response[i].idade === -1 ? 'desconhecido' : response[i].idade}`}</p>
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
        <Container>
            {
                Itens === [] 
                ? 
                <LoadingComponent>
                    <p>{error === "" ? "Carregando... " : `Ocorreu um erro: ${error}`}</p>
                </LoadingComponent>
                :
                <GridContainer>
                    {Itens} 
                </GridContainer> 
            }
        </Container>
    );
}