import { Container, GridContainer, SingleItem } from './appStyled';

export default function App(){

    const itens = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var ItensCont = 0;

    const ItensHtml = itens.map(() => {
        ItensCont++;
        console.log(ItensCont);
        return <SingleItem
            key={ItensCont}
            className={ItensCont % 2 === 1 ? 'mg-r' : ''} 
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }} //onScroll
            transition={{ duration: 0.2 }}
            href="/"
        >
            <div className="text-wrapper">
                <h1>#1</h1>
                <h2>Akame</h2>
                <p>Uma jovem brilhante</p>
            </div>
            <div className="img-wrapper">
                <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
            </div>
        </SingleItem>
    })

    return (
        <Container>
            <GridContainer>
                {ItensHtml}
            </GridContainer>
        </Container>
    );
}