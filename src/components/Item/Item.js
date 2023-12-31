import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../css/style.css'

const Item = ({item}) => {
  return (
    <Link to={'/item/' + item.id} className='text-decoration-none'>

    <div className='container'>
    <div className='card card-product'>
        <img src={item.img} className='card-img-top' alt={item.title}/>
        <div className='card-body text-center'>
        <p className='card-text'>{item.title} - $ {item.price}</p>
        </div>
    </div>  
    </div>
    </Link>
  )
}

export default Item