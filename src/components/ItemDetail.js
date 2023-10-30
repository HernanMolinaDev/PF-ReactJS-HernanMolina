import React from 'react'
import ItemCount from './ItemCount';
const ItemDetail = ({item}) => {
    return (
    <div className='row'>
    <div className='col-md-4 offset-md-4'>
        <img src={'/imgs/' + item.img} className='img-fluid'alt={item.name}/>
        <h2>{item.name}</h2>
        <p>{item.desc}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
    </div>
    <div>
        <ItemCount stockItems={5}/>
    </div>
    </div>
    )   
}

export default ItemDetail