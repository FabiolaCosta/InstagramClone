import './Story.css';
import rafael from '../img/foto-rafael.jpeg';
import vaiola from '../img/Viola-Davis.jpg';
import rihanna from '../img/foto-rihanna.png';
import zendaya from '../img/zendaya.png';
import emily from '../img/foto-emily.jpeg';
import ryan from '../img/foto-ryan.png';

export function Story(){
    return(
        <div className='container'>
            
            <div className='story-elements'>
                <div>
                    <img className='img-story' src={vaiola}/>
                </div>
                <span>
                    vaioladavis
                </span>
            </div>
            
            <div className='story-elements'>
                <div>
                    <img className='img-story' src={rafael}/>
                </div>
                <span>
                    rafael_silva
                </span>
            </div>
            <div className='story-elements'>
                <div>
                    <img className='img-story' src={rihanna}/>
                </div>
                <span>
                    badgalriri
                </span>
            </div>
            <div className='story-elements'>
                <div>
                    <img className='img-story' src={emily}/>
                </div>
                <span>
                    emilyvieira
                </span>
            </div>
            <div className='story-elements'>
                <div>
                    <img className='img-story' src={ryan}/>
                </div>
                <span>
                    ryan.02
                </span>
            </div>
            <div className='story-elements'>
                <div>
                    <img className='img-story' src={zendaya}/>
                </div>
                <span>
                    zendaya
                </span>
            </div>
        </div>
    )
}