import { Logo, Nav, SearchInput, Label } from './HeaderStyled.js';

export default function Home() {
    return (
        <header>
            <Nav>
                <Logo>Akame Wiki</Logo>
                <Label>
                    <SearchInput type="text" placeholder='Busca...'/>
                </Label>
            </Nav>
        </header>
    );
}

