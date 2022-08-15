import { useState } from 'react';
import { Logo, Nav, SearchInput, Label, SearchIcon, ThemeDiv } from './HeaderStyled.js';
import { Sun, Moon, MagnifyingGlass } from 'phosphor-react';

export default function Header(props) {

    const [DarkTheme, setDarkTheme] = useState(true);

    function HandleSwitchTheme() {
        const BodyStyle = document.body.style;

        if (!DarkTheme) {
            BodyStyle.setProperty('--bgColor', '#2b2828');
            BodyStyle.setProperty('--bgInverse', '#b3adad');
            BodyStyle.setProperty('--textColor', '#fff');
            BodyStyle.setProperty('--placeHolderColor', '#c9c2c2');
        }
        else {
            BodyStyle.setProperty('--bgColor', '#f5eeee');
            BodyStyle.setProperty('--bgInverse', '#2b2828');
            BodyStyle.setProperty('--textColor', '#000');
            BodyStyle.setProperty('--placeHolderColor', '#474247');
        }
        setDarkTheme(theme => !theme);
    }

    function HandleSearch() {
        
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
                    <SearchInput type="text" maxLength={30} placeholder='Procure pelo seu personagem favorito...' onChange={HandleSearch} disabled={props.error !== ""}/>
                    <SearchIcon className="icon-search"><MagnifyingGlass size={26} style={{color: DarkTheme ? '#fff' : '#000'}}/></SearchIcon>
                </Label>
            </Nav>
        </header>
    );
}

