import React, {useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'



function CreateProduct() {

    // const location = useLocation();
    // const {pd} = location.state;
    const navigateTo=useNavigate()
    
    const formData = {id:'', title:"", description:"", price:'',
                    discountPercentage:"", rating:"", stock:"",
                    brand:'', category:'', thumbnail:'', images:''}
   
    const [formInfo, setForm] = useState(formData)

    const handleChange=(event)=>{
        const {name, value} = event.target;
        setForm({...formInfo, [name] : value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formInfo, "formInfo")
        console.log(formInfo.id, "id")
        const oldData = JSON.parse(localStorage.getItem('data'))
        // const newData = JSON.stringify([...oldData, {formInfo}])
        // props.np(formInfo)
        oldData.push(formInfo)
        localStorage.setItem("data", JSON.stringify(oldData))
        // let lsData = JSON.parse(localStorage.getItem("data"));
        console.log(oldData, "oldData")
        // console.log(typeof(lsData), "type lsData")
        // const d = lsData.concat(formInfo)
        
        // console.log(lsData, "localdata")
        navigateTo('/')
        // console.log(pd, "pd")
        // const updatedProducts = pd.concat(formInfo)
        // console.log(updatedProducts, "ghvsgh")
    }

    // useEffect(()=>{
    //     const json = JSON.stringify(formInfo);
    //     localStorage.setItem("data", json)
    // }, [formInfo])
    
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <h1>CreateProduct</h1>
            <label>Id : </label>
            <input type="number" name='id' onChange={(e)=>handleChange(e)}></input>
            <label>Title : </label>
            <input type="text" name='title' onChange={(e)=>handleChange(e)}></input>
            <label>Description : </label>
            <input type="text" name='description' onChange={(e)=>handleChange(e)}></input>
            <label>Price : </label>
            <input type="number" name='price' onChange={(e)=>handleChange(e)}></input>
            <label>Discount Percentage : </label>
            <input type="number" name='discountPercentage' onChange={(e)=>handleChange(e)}></input>
            <label>Rating : </label>
            <input type="number" name='price' onChange={(e)=>handleChange(e)}></input>
            <label>Stock : </label>
            <input type="number" name='stock' onChange={(e)=>handleChange(e)}></input>
            <label>Brand : </label>
            <input type="text" name='brand' onChange={(e)=>handleChange(e)}></input>
            <label>Category : </label>
            <input type="text" name='category' onChange={(e)=>handleChange(e)}></input>
            <label>thumbnail : </label>
            <input type="text" name='thumbnail' onChange={(e)=>handleChange(e)}></input>
            <label>Images : </label>
            <input type="text" name='images' onChange={(e)=>handleChange(e)}></input>
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default CreateProduct