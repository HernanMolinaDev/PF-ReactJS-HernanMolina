import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import style from '../../css/style.css'

const ItemDetail = ({item}) => {

  const[goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   addProduct(item, quantity);
  }

  return (
    <div className='div-detail'>
     <div className='col-md-4 offset-md-4 '>
        <img src={item.img} className='img-fluid'alt={item.title}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
     </div>
     <div className='btn-detail'>
      {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount stock={5} initial={0} onAdd={onAdd} />}
     </div>
     </div>
  )
}

export default ItemDetail