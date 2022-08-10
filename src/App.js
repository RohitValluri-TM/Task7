import {useEffect, useState} from "react"
// import productData from './products.json'
import { useNavigate } from "react-router-dom";
import './App.css';
import { Link} from "react-router-dom";
import {IoMdStar} from 'react-icons/io'
import Popup from "reactjs-popup";
import CreateProduct from "./CreateProduct";

export default function Product(){
    
    const productData = [{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,
    "rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    "images":["https://dummyjson.com/image/i/products/1/1.jpg","https://dummyjson.com/image/i/products/1/2.jpg","https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg","https://dummyjson.com/image/i/products/1/thumbnail.jpg"]},
    {"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones",
    "thumbnail":"https://dummyjson.com/image/i/products/2/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/2/1.jpg",
    "https://dummyjson.com/image/i/products/2/2.jpg","https://dummyjson.com/image/i/products/2/3.jpg","https://dummyjson.com/image/i/products/2/thumbnail.jpg"]}]

    const copy = productData
    // console.log(copy, "copy")
    const [data, setData] = useState(copy)
    const [newproduct, setNewProduct]=useState('')
    
    // console.log(newproduct.length, "length")

    const navigateTo= useNavigate()

    const getData=()=>{
        const lsData = localStorage.getItem('data')
        // console.log(lsData, "lsData")
        console.log(JSON.parse(lsData), "json")
        if(lsData){
            return JSON.parse(lsData)
        }
        else{
            localStorage.setItem("data", JSON.stringify([]))
            return []
        }
    }

    const [item, setItem] = useState(getData)
    console.log(item, "item")
    const createProduct=()=>{
        navigateTo('/CreateProduct')
    }

    useEffect(()=>{
        copy.push(item)
    }, [])
    
    console.log(copy, "copy")
    // const [nproduct,] = useState(item)
    // const updProducts = data.concat(nproduct)
    // console.log(updProducts, "upd")
    // const [updatedProducts,setUpdatedProducts] = useState([])
    // useEffect(()=>{
    //     const json = localStorage.getItem("data");
    //     const latestData = JSON.parse(json);
    //     console.log(latestData, "ldata")
    //     // setNewProduct(latestData)  
    //     data.push(latestData)
        
    // }, [])
    // console.log(data, "latestdata")
    // console.log(newproduct, "newproduct")
    
    // console.log(data, "latestdata")
    


    // if(newproduct.length===0){
    //     setUpdatedProducts(productData)
    //     // console.log(updatedProducts, "hyyy3")
    // }
    // else{
    //     // const newState = data.concat(newproduct)
    //     setUpdatedProducts(data.concat(newproduct))
    //     // console.log("hyyy2")
    // }
    // // const updatedProducts = data.concat(newproduct)
    // console.log(updatedProducts, "ghvsgh")
    return(
        <>
        
        <h1>Products</h1>
        <div>
            <button onClick={createProduct}> Create Product</button>
        </div>

        {data.map((ele, index)=>{
            return(
                <div className="cd" style={{display:'inline-grid'}} key={index}>
                    <div className="card">
                        <img className="card-img-top" src={ele.images[0]} alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <h4>Rating : <IoMdStar/> {ele.rating}</h4>
                            <h4>Price : ${ele.price}</h4>
                           <Link to="/ProductDetails" state={{info:ele}}> <button className="btn btn-primary stretched-link">More Details ...</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        }

        {item.length!==0 && (item.map((ele, index)=>{
            return(
                <div className="cd" style={{display:'inline-grid'}} key={index}>
                    <div className="card">
                        <img className="card-img-top" src={ele.images[0]} alt="Card cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ele.title}</h4>
                            <h4>Rating : <IoMdStar/> {ele.rating}</h4>
                            <h4>Price : ${ele.price}</h4>
                           <Link to="/ProductDetails" state={{info:ele}}> <button className="btn btn-primary stretched-link">More Details ...</button></Link>
                        </div>
                    </div>
                </div>
            )
        })
        )}
         
        </>
    )
}