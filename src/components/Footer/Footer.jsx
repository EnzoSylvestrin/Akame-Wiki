import { ContainerFooter } from "./FooterStyled";

export default function Footer() {
    return (
        <ContainerFooter>
             <div className="social">   
                <a href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221/" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-linkedin" id="icon-linkedin"></i>
                </a>
                <a href="https://github.com/EnzoSylvestrin" rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-github" id="icon-github"></i>
                </a>
            </div>
            <div className="copyright">
                <p>Feito por Enzo Sylvestrin</p>
            </div>
        </ContainerFooter>
    );
}