import { SingleItem } from '../components/app/appStyled';

import { Link } from 'react-router-dom';

export const CreateItem = (response, i) => {
    let slug = `/Akame-Wiki/search/?name=${response[i].nome}` 
    var Item = 
        <Link className="link-styled" to={slug} key={i}>
            <SingleItem
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }} //onScroll
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                href={slug}
            >
                <div className="text-wrapper">
                    <h1>{`#${i + 1}`}</h1>
                    <h2>{`${response[i].nome}`}</h2>
                    <p>{`idade: ${response[i].idade === -1 ? 'desconhecida' : response[i].idade}`}</p>
                </div>
                <div className="img-wrapper">
                    <img src={response[i].imagem} alt="imagem do personagem"/>
                </div>
            </SingleItem>
        </Link>
    return Item;   
}