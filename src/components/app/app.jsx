import { Container, ErrorComponent, GridContainer, LoadingComponent, LoadingContainer } from './appStyled';

export default function App(props){
    return (
        <Container>
            {
                props.Itens.length === 0
                ?
                <LoadingContainer>
                    {props.error === "" 
                        ? 
                        <LoadingComponent />
                        : 
                        <ErrorComponent>
                            Ocorreu um erro: {props.error} <br />
                            Para que consiga ver os personagens precisa estar com o servidor da API aberto <a href="/">clique aqui</a> para ver
                        </ErrorComponent>
                    }  
                </LoadingContainer>
                :
                <GridContainer>
                    {props.Itens} 
                </GridContainer> 
            }
        </Container>
    );
}