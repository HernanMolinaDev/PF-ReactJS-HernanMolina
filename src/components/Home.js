import React from 'react';
import Dharma from '../img/DHARMA.png'
import productsData from '../products.json'
import ProductCard from './ProductCard'
        const Home=()=>{
            return(
                <div className=''> 
                    <div className='div-home'>
                        <img src={Dharma} alt="dharma-img"/>
                    </div>
                    <div className=''>
                        {productsData.products.map((product,index)=>(
                        <ProductCard  
                        key={index}
                        pic={'imgs/' + product.img}
                        title={product.name} 
                        price={product.price} />
                        ))}
                    </div>
                </div>
            );
};
export default Home;