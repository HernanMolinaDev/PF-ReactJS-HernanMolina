import React from 'react';
import Dharma from '../img/DHARMA.png'
import ProductCard from './ProductCard'
        const Home=()=>{
            return(
                <div> 
                    <div className='div-home'>
                        <img src={Dharma} alt="dharma-img"/>
                    </div>
                    <div>
                        <ProductCard pic='../img/yagraycanela.jpg' title='algo' p='algo' price='algo'/>
                        <ProductCard pic='../img/7elementos.jpg' title='algo2' p='algo2' price='algo'/>
                        <ProductCard pic='../img/limpiezaenergetica.jpg' title='algo3' p='algo3' price='algo'/>
                        <ProductCard pic='../img/salviaBlanca.jpg' title='algo4' p='algo4' price='algo'/>
                    </div>
                </div>
            );
};
export default Home;