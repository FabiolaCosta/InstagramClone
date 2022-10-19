import './Sugestao.css';
import {useEffect, useState} from 'react'

export function Sugestao(){

    const [suggestion, setSuggestion] = useState([]);

    const [limitUser, setLimitUser] = useState(5);

    const slice = suggestion.slice(0, limitUser);

    useEffect(() => {
        fetch(`https://api.github.com/users/fabiolacosta/followers`)
        .then((response) =>{
            return response.json()
        })
        .then((result) => {
            setSuggestion(result)
        })
        .catch((err) => {
            throw new Error(err)
        })
    }, [])

    return(
        <div className='container-suggestion'>
            <div className='header-suggestion'>
                <img className="img-perfil" src="https://github.com/fabiolacosta.png" />

                <div className='user-infos-suggestion'>
                    <div className='infos'>
                        <span>costa_fah</span>
                        <p>Fabiola Costa</p>
                    </div>
                    <button className='trocar'>Mudar</button>

                </div>
            </div>

            <div className='main-suggestion'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>

            <div className='user-suggestion'>
                {slice.map((suggestion, key) => (
                    <div className='infos-suggestion' key={key}>
                        <img className='img-user-sg' src={`https://github.com/${suggestion.login}.png`} />
                        
                        <div className='suggestion'>
                            <span>{suggestion.login}</span>
                            <p>Sugestões para você</p>
                        </div>
                        
                        <button className='follow'>Seguir</button>
                    </div>
                ))}
                
            </div>

            <footer className='footer-suggestion'>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localização &bull; Idioma &bull;</p>
                <p>&copy; 2022 INSTAGRAM FROM FABIOLA</p>
            </footer>
        </div>
    )
}