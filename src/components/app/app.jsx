import { Container, GridContainer, SingleItem } from './appStyled';

export default function App(){
    return (
        <Container>
            <GridContainer>
                <SingleItem 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>
                </SingleItem>
                <SingleItem  
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>
                </SingleItem>
                <SingleItem  
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>
                </SingleItem>
                <SingleItem
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>

                </SingleItem>
                <SingleItem
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>

                </SingleItem>
                <SingleItem
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>

                </SingleItem>
                <SingleItem
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: .7 }} //onScroll
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <img src="https://i.pinimg.com/originals/4e/17/1f/4e171f30cff1f8847b7b1822ea21effe.jpg" alt="test"/>
                    <h1>Akame</h1>
                    <p>Uma jovem brilhante</p>

                </SingleItem>
            </GridContainer>
        </Container>
    );
}