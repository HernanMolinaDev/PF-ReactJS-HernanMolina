import React from 'react';
import {useParams} from 'react-router-dom';
import Dharma from '../img/DHARMA.png'
import productsData from '../products.json'
import ProductCard from './ProductCard'
        const Home=(selectCategory)=>{
            
            const filterProduct=selectCategory==='Todos'
            ?productsData.products:productsData.products.filter(product=>product.type===selectCategory)
            
            return(
                <div className='row'> 
                    <div className='div-home col-xl-12 col-m-12 col-sm-12'>
                        <img src={Dharma} alt="dharma-img"/>
                    </div>
                    <div className='row'>
                        {filterProduct.map((product,index)=>(
                            
                        <ProductCard  
                        key={index}
                        pic={'imgs/' + product.img}
                        title={product.name} 
                        price={product.price} 
                        />
                    ))}
                    </div>
                </div>
            );
};
export default Home;