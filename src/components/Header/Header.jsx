import { useState } from 'react';
import { Logo, Nav, SearchInput, Label, SearchIcon } from './HeaderStyled.js';
import { Sun, Moon, MagnifyingGlass } from 'phosphor-react';

export default function Header() {

    const [DarkTheme, setDarkTheme] = useState(true);

    function HandleSwitchTheme() {

        if (!DarkTheme) {
            document.body.style.setProperty('--bgColor', '#2b2828');
            document.body.style.setProperty('--bgInverse', '#f5eeee');
            document.body.style.setProperty('--textColor', '#fff');
        }
        else {
            document.body.style.setProperty('--bgColor', '#f5eeee');
            document.body.style.setProperty('--bgInverse', '#2b2828');
            document.body.style.setProperty('--textColor', '#000');
        }
        setDarkTheme(theme => !theme);
    }
    
    return (
        <header>
            <Nav>
                <Logo>Akame Wiki</Logo>
                    {DarkTheme 
                        ? <Sun size={32} style={{marginRight: "15px", color:"#fff"}} onClick={HandleSwitchTheme}/> 
                        : <Moon size={32} style={{marginRight: "15px"}} onClick={HandleSwitchTheme}/>
                    }
                <Label>
                    <SearchInput type="text" maxLength={30} placeholder='Procure pelo seu personagem favorito...'/>
                    <SearchIcon className="icon-search"><MagnifyingGlass size={26} style={{color: DarkTheme ? '#fff' : '#000'}}/></SearchIcon>
                </Label>
            </Nav>
        </header>
    );
}

