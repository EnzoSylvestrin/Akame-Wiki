import { useState } from 'react';

import { Label, SearchIcon, SearchInput } from '../Header/HeaderStyled';
import { Container, ErrorComponent, GridContainer, LoadingComponent, LoadingContainer, SingleItem } from './appStyled';

import { MagnifyingGlass } from 'phosphor-react'

import { toast } from 'react-toastify';

import Api from '../../Api';

export default function App(props){

    const [searchItens, setSearchItens] = useState([]);
    const [error, setError] = useState(props.error);

    var ItensHtml = [];

    function HandleSearch(target) {
        if (props.error === "") {
            if (target.value !== "") {
                Api.get(`/search/${target.value}`).then((response) => {
                    response = response.data;
                    if (response.length === 0) {

                    }
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
                    setSearchItens(ItensHtml);
                    ItensHtml = [];
                }).catch((err) => {
                    setError(err.message);
                })
            }
            else {
                setSearchItens([]);
            }
        }
    }

    const Notify = () => {
        console.log('clicou')
        toast.dark("Digite na barra de pesquisa para pesquisar.", {
            position: 'bottom-left',
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: false,
            toastId: "id-toast"
        })
    };

    return (
        <>
            <Label>
                <SearchInput type="text" maxLength={30} placeholder='Procure pelo seu personagem favorito...' onChange={e => HandleSearch(e.target)} disabled={error !== ""}/>
                <SearchIcon onClick={Notify}><MagnifyingGlass size={26} className="icon-search"/></SearchIcon>
            </Label>
            <Container>
                {
                    props.Itens.length === 0 || error !== ""
                    ?
                    <LoadingContainer>
                        {error === "" 
                            ? 
                            <LoadingComponent />
                            : 
                            <ErrorComponent>
                                Ocorreu um erro: {error} <br />
                                Para que consiga ver os personagens precisa estar com o servidor da API aberto <a href="/">clique aqui</a> para ver
                            </ErrorComponent>
                        }  
                    </LoadingContainer>
                    :
                    <GridContainer>
                        {
                            searchItens.length === 0
                            ?
                            props.Itens
                            :
                            searchItens
                        } 
                    </GridContainer> 
                }
            </Container>
        </>
    );
}