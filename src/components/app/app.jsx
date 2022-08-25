import { useState } from 'react';

import { Label, SearchIcon, SearchInput } from '../Header/HeaderStyled';
import { Container, ErrorComponent, GridContainer, LoadingComponent, LoadingContainer, NothingFindComponent, SingleItem } from './appStyled';

import { MagnifyingGlass } from 'phosphor-react'

import { toast } from 'react-toastify';

import Api from '../../Api';

export default function App(props){

    const [searchItens, setSearchItens] = useState([]);
    const [error, setError] = useState("");
    const [NenhumItemEncontrado, setNenhumItemEncontrado] = useState(false);

    var ItensHtml = [];

    function HandleSearch(target) {
        if (error === "") {
            if (target.value !== "") {
                Api.get(`/search/${target.value}`).then((response) => {
                    response = response.data;
                    if (response.length === 0) {
                        setNenhumItemEncontrado(true);
                        return;
                    }
                    else {
                        setNenhumItemEncontrado(false);
                    }
                    let slug = "";
                    for(let i = 0; i < response.length; i++) {
                        slug = `/search/${response[i].nome}` 
                        ItensHtml.push(
                            <SingleItem
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }} //onScroll
                                whileHover={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                href={slug}
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
        if (!error && !props.error) {
            toast.dark("Digite na barra de pesquisa para pesquisar.", {
                position: 'bottom-left',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                toastId: "id-toast"
            });
        }
        else {
            toast.dark("Resolva o erro para pesquisar.", {
                position: 'bottom-left',
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                toastId: "id-toast"
            });
        }
    };

    return (
        <>
            <Label>
                <SearchInput type="text" maxLength={30} placeholder='Procure pelo seu personagem favorito...' onChange={e => HandleSearch(e.target)} disabled={props.error !== "" || error !== ""}/>
                <SearchIcon onClick={Notify}><MagnifyingGlass size={26} className="icon-search"/></SearchIcon>
            </Label>
            <Container>
                {
                    props.Itens.length === 0 || error !== ""
                        ?
                        <LoadingContainer>
                            {
                                props.error === "" && error === ""
                                    ? 
                                    <LoadingComponent />
                                    : 
                                    <ErrorComponent>
                                        Ocorreu um erro: {props.error || error} <br />
                                        Para que consiga ver os personagens precisa estar com o servidor da API aberto <a href="https://github.com/EnzoSylvestrin/Akame-API" rel="noopener noreferrer" target="_blank">clique aqui</a> para ver
                                    </ErrorComponent>
                            }  
                        </LoadingContainer>
                        :
                        !NenhumItemEncontrado 
                            ?
                            <GridContainer>
                                {
                                    searchItens.length === 0
                                    ?
                                    props.Itens
                                    :
                                    searchItens
                                } 
                            </GridContainer>
                            :
                            <NothingFindComponent>
                                <p>Nenhum personagem encontrado! 😿</p>
                            </NothingFindComponent>
                }
            </Container>
        </>
    );
}