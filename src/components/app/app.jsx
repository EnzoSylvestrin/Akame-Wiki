import { Container, Titulo, GridContainer, SingleItem } from './appStyled';

export default function App(){
    return (
        <Container>
            <Titulo>Personagens</Titulo>
            <GridContainer>
                <SingleItem>
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="Image test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>
                </SingleItem>
                <SingleItem>

                </SingleItem>
                <SingleItem>

                </SingleItem>
                <SingleItem>

                </SingleItem>
                <SingleItem>

                </SingleItem>
                <SingleItem>

                </SingleItem>
            </GridContainer>
        </Container>
    );
}