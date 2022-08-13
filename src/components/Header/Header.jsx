import { Logo, Nav, SearchInput } from './HeaderStyled.js';
import { MagnifyingGlass } from "phosphor-react";

export default function Home() {
    return (
        <header>
            <Nav>
                <Logo>Akame Wiki</Logo>
                <SearchInput type="text"/>
                <MagnifyingGlass className="search-icon" size={24} color="#fff"/>
            </Nav>
        </header>
    );
}

