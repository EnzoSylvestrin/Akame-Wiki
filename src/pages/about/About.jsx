import { useEffect, useState } from 'react';
import Api from '../../Api';
import { AboutContainer, ContainerImg, ContainerAbout, Description, ImgCharacter, Particulars, Characteristic, Title } from './AboutStyled';
import { useParams } from 'react-router-dom';
import { LoadingComponent } from '../../components/app/appStyled';

export default function About() {

    const {name} = useParams();

    const [Item, setItem] = useState(null);

    useEffect(() => {
        
        Api.get(`/search/${name}`).then((response) => {
            response = response.data;
            response = response[response.length - 1];
            var img = 
                <ImgCharacter 
                    src={response.imagem}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }} //onScroll
                    transition={{ duration: 0.35 }} 
                />
            setItem(
                {
                nome: response.nome,
                idade: response.idade,
                imagem: img,
                descricao: response.descricao,
                grupo: response.grupo,
                genero: response.genero,
                armaImperial: response.armaImperial,
                }
            );
        });

    }, []);

    console.log(Item);

    return (
        <section>
            {
                Item == null
                ?
                <AboutContainer>
                    <LoadingComponent />
                </AboutContainer>
                :
                <AboutContainer>
                    <ContainerImg>
                        {Item.imagem}
                        <Particulars
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }} //onScroll
                            transition={{ duration: 0.35 }} 
                        >
                            <h1>{Item.nome}</h1>
                            {
                                Item.idade !== -1
                                ?
                                <p>Idade: {Item.idade}</p>
                                :
                                <p>Idade: desconhecida</p>
                            }
                        </Particulars>
                    </ContainerImg>
                    <ContainerAbout
                        initial={{ y: 300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }} //onScroll
                        transition={{ duration: 0.35 }} 
                    >
                        <Description>
                            <Title>Descrição:</Title>
                            <p>{Item.descricao}</p>
                        </Description>
                        <Title>Características: </Title>
                        <Characteristic>
                            <p>Grupo:  {Item.grupo}</p>
                            <span>Gênero: {Item.genero}</span>
                            <h2>
                                {
                                    Item.armaImperial !== null 
                                    ?
                                    `Arma imperial: ${Item.armaImperial}` 
                                    :
                                    'Arma imperial: Não tem!'
                                }
                            </h2>
                        </Characteristic>
                    </ContainerAbout>
                </AboutContainer>
            }
        </section>
    );
}