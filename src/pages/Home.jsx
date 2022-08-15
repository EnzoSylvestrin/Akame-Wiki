import App from '../components/app/app';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { HomeContainer } from './HomeStyled';

export default function Home() {
    return (
        <>
            <HomeContainer>
                <Header />
                <App />
            </HomeContainer>
            <Footer />
        </>
    )
}