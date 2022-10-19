import './Layout.css';
import {Story} from '../Story/Story';
import {Post} from '../Post/Post';
import { Sugestao } from '../Segestao/Sugestao';
import rafael from '../img/foto-rafael.jpeg';
import postProa from '../img/post-proa.jpg';
import fotoProa from '../img/logoProa.jpeg';
import postMaria from '../img/postMaria.jpg';
import postRafael from '../img/postRafael.png';

export function Layout(){
    return(
        <>
            <div className='mainGrid'>

                <div className='first-column' style={{gridArea: 'firstColumn'}}>
                    <div className='storys'>
                        <Story/>
                    </div>

                    <div className='posts'>
                        <Post fotoUser='https://images.unsplash.com/photo-1601583844062-7487c80b56b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' nomeUser='maria.clara' imgPost={postMaria} like='131' legend='Comece onde você está, use o que você tem, faça o que você pode.' tempo='Há 1 HORA'/>
                    </div>
                    <div className='posts'>
                        <Post fotoUser={fotoProa} nomeUser='instituto.proa' imgPost={postProa} like='702' legend='Inscrições abertas para o PROPROFISSÃO de SP (curso de programação do PROA) de 2023! 👾' tempo='Há 2 DIAS'/>
                    </div>
                    <div className='posts'>
                        <Post nomeUser='fernando_santos' fotoUser='https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' imgPost='https://picsum.photos/700' like='66' legend='Não tenha pressa. Amanhã será um novo recomeço.' tempo='HÁ 30 MINUTOS'/>
                    </div>
                    <div className='posts'>
                        <Post nomeUser='rafael_silva' fotoUser={rafael} imgPost={postRafael} like='203' legend='A vida reflete aquilo que você sente. Sinta gratidão!' tempo='HÁ 3 HORAS'/>
                    </div>
                    <div className='posts'>
                        <Post nomeUser='ana.beatriz' fotoUser='https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_960_720.jpg' imgPost='https://picsum.photos/502' legend='Às vezes os pequenos passos te levam mais longe do que os grandes.' like='305' tempo='HÁ 10 HORAS'/>
                    </div>
                    <div className='posts'>
                        <Post nomeUser='vivichagas' fotoUser='https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg' imgPost='https://picsum.photos/800' legend='Vim respirar, vim aprender a nadar no mar e a mergulhar na vida.' like='280' tempo='HÁ 6 HORAS'/>
                    </div>
                </div>               
                
                <div className='sugestao' style={{gridArea: 'secondColumn'}}>
                    <Sugestao/>
                </div>
            </div>
        </>
    )
}