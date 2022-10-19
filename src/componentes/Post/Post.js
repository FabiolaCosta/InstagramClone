import './Post.css';
import {FiMoreHorizontal, FiSend} from 'react-icons/fi';
import {BsChat, BsBookmark, BsEmojiSmile} from 'react-icons/bs';
import {IoMdHeartEmpty} from 'react-icons/io';
import {IconContext} from 'react-icons';

export function Post(prop){
    return(
        <>
            <header className='header-post'>

                <div className='infos-post'>
                    <img className="img-user-post" src={prop.fotoUser} />
                    <p>{prop.nomeUser}</p>
                </div>
                <div className='icon-header'><FiMoreHorizontal/></div>
            </header>

            <div className='img-post'>
                <img src={prop.imgPost} />
            </div>

            <div className='footer-post'>

                <IconContext.Provider value={{size: '25px'}}>
                    <section className='icons-post'>
                        
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty/></div>
                            <div className='icon'><BsChat/></div>
                            <div className='icon'><FiSend/></div>
                        </div>
                        <div className='icon'><BsBookmark/></div>
                    </section>
                </IconContext.Provider>

                <section className='like'>
                    <span>{prop.like} curtidas</span>
                </section>

                <div className='legend'>
                    <p><span>{prop.nomeUser}</span> {prop.legend}</p>
                </div>

                <div className='time-post'>
                    <time>{prop.tempo}</time>
                </div>

                <div className='comment'>
                    <div className='fake-comment'>
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile/>
                            </div>
                        </IconContext.Provider>
                        <input placeholder='Adicione um comentário...' />   
                    </div>
                    <button>Publicar</button>
                </div>
            </div>
        </>
    )
}