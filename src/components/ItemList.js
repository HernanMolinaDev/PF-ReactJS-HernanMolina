import React from 'react'
import Item from './Item';



const ItemList=({item})=>{

    return(
        <div className='row' id='itemlist'>
        {
        item.map(item=>
        
        <div className='col-md-4 col-xl-3 col-sm-6'
        key={item.id}>
        <Item item={item}/> 
        </div>
        )   
        }
    </div>
    )
};
export default ItemList