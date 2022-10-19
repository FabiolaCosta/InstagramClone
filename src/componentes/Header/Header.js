import {AiOutlineSearch, AiFillHome} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsPlusSquare} from 'react-icons/bs';
import {MdOutlineExplore} from 'react-icons/md';
import {BiHeart} from 'react-icons/bi';
import {FiPlusSquare} from 'react-icons/fi';
import {IconContext} from 'react-icons';

import './Header.css';

export function Header(){
    return(
        <header className='header'>
            <div className='container'>
                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                
                <div className='input-fake'>
                    {/* Essa tag é para fazer a estilização dos icones */}
                    <IconContext.Provider value={{color: '#8e8e8e'}}>
                        <AiOutlineSearch/>
                    </IconContext.Provider>
                    
                    <input placeholder='Pesquisar'/>
                </div>

                <div className='menu-icons'>
                    <IconContext.Provider value={{size: '26px'}}>
                        <div>
                            <AiFillHome/>
                        </div>

                        <div>
                           <RiMessengerLine/>
                        </div>

                        <div>
                            <FiPlusSquare/>
                        </div>

                        <div>
                            <MdOutlineExplore/>
                        </div>

                        <div>
                           <BiHeart/>
                        </div>
                        
                        
                    </IconContext.Provider>

                    <img className="img-user" src="https://github.com/fabiolacosta.png" />
                    
                </div>
            </div>
        </header>
    )
}