import {useState} from "react"
import productData from './products.json'
import './App.css';
import { Link} from "react-router-dom";

export default function Product(){
    
    const copy = productData.products
    const [data, setData] = useState(copy)
    
    return(
        <>
        
        <h1>Products</h1>
       
        {data.map((ele, index)=>{
            return(
                <div className="cd" style={{display:'inline-grid'}} key={index}>
                    <div className="card">
                        <img className="card-img-top" src={ele.images[0]} alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <h4>Rating : {ele.rating}</h4>
                            <h4>Price : ${ele.price}</h4>
                           <Link to="/ProductDetails" state={{info:ele}}> <button className="btn btn-primary stretched-link">More Details ...</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        }
        </>
    )
}