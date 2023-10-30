import React from 'react'
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount'


const Item=({item})=>{
    return(
        <Link to={"/" + item.id} className='text-decoration-none'>
        <div className='container'>
        <div className='card card-product'>
            <img src={'/imgs/'+ item.img} className='card-img-top' alt={item.name}/>
            <div className='card-body text-center'>
            <p className='card-text'>{item.name}</p>
            <p className='card-text'>{item.desc}</p>
            <p className='card-text'>{item.price}</p>
            <ItemCount/>
            </div>            
            
        </div>
        </div>
    </Link>
    )
}
export default Item;