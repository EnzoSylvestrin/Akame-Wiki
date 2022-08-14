import { useState } from 'react';
import { Logo, Nav, SearchInput, Label, SearchIcon, ThemeDiv } from './HeaderStyled.js';
import { Sun, Moon, MagnifyingGlass } from 'phosphor-react';

export default function Header() {

    const [DarkTheme, setDarkTheme] = useState(true);

    function HandleSwitchTheme() {

        if (!DarkTheme) {
            document.body.style.setProperty('--bgColor', '#2b2828');
            document.body.style.setProperty('--bgInverse', '#b3adad');
            document.body.style.setProperty('--textColor', '#fff');
            document.body.style.setProperty('--placeHolderColor', '#c9c2c2');
        }
        else {
            document.body.style.setProperty('--bgColor', '#f5eeee');
            document.body.style.setProperty('--bgInverse', '#2b2828');
            document.body.style.setProperty('--textColor', '#000');
            document.body.style.setProperty('--placeHolderColor', '#474247');
        }
        setDarkTheme(theme => !theme);
    }
    
    return (
        <header>
            <Nav>
                <Logo>Akame Wiki</Logo>
                    <ThemeDiv>
                        {DarkTheme 
                            ? <Sun size={32} style={{color:"#fff", cursor: "pointer"}} onClick={HandleSwitchTheme}/> 
                            : <Moon size={32} style={{cursor: "pointer"}} onClick={HandleSwitchTheme}/>
                        }
                    </ThemeDiv>
                <Label>
                    <SearchInput type="text" maxLength={30} placeholder='Procure pelo seu personagem favorito...'/>
                    <SearchIcon className="icon-search"><MagnifyingGlass size={26} style={{color: DarkTheme ? '#fff' : '#000'}}/></SearchIcon>
                </Label>
            </Nav>
        </header>
    );
}

