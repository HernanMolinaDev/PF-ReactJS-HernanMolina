const ProductCard=({pic,title,p,price})=>{
    return(
    <div>
        <div className="card">
            <img src={pic} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{p}</p>
        <p className="card-text">$ {price}</p>
        <a className="btn btn-primary">Sumar al carrito</a>
        </div>
        </div>
    </div>

    )
}
export default ProductCard