import { useState } from 'react';

import { Logo, Nav, ThemeDiv } from './HeaderStyled.js';

import { Sun, Moon } from 'phosphor-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export default function Header() {

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

        toast("Tema alterado!", {
            position: 'bottom-left',
            autoClose: 2000,
            pauseOnHover: false,
            closeOnClick: true,
            toastId: 'id-toast-theme',
            theme: DarkTheme ? 'dark' : 'light'
        });
    }
    
    return (
        <header>
            <ToastContainer />
            <Nav>
                <Logo>Akame Wiki</Logo>
                    <ThemeDiv>
                        {DarkTheme 
                            ? <Sun size={32} style={{color:"#fff", cursor: "pointer"}} onClick={HandleSwitchTheme}/> 
                            : <Moon size={32} style={{cursor: "pointer"}} onClick={HandleSwitchTheme}/>
                        }
                    </ThemeDiv>
            </Nav>
        </header>
    );
}

