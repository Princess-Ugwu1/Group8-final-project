import React, { useState } from 'react'
import './VendorUpload.css'
import { IoIosImages } from "react-icons/io";

const VendorUpload = () => {
    // const [productImage, setProductImage]=useState()
    // const [picture, setPicture]=useState(null)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProducImage] = useState(null)
    
  
    const url = "https://groceria.onrender.com/api/v1/";
    const token = localStorage.getItem('userToken');


    const uploadImage=()=>{



    }

  return (
    <div className='VendorUploadWrapper'>
        <div className="uploadHolder">
        <div className="descriptiveDiv">
            <p>Upload your Product</p>
            <span>show the world what you're selling</span>
        </div>
       
            <form className='VendorUploadForm'>
                <div className="UploadFormHolder">
                    <label htmlFor="firstName">Product Name</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className="UploadFormHolder">
                    <label htmlFor="firstName">Product Store</label>
                    <input type="text" placeholder='John' />
                </div>

                <div className="UploadHolderDiv">
                    <input type='file' placeholder='upload an image' hidden id='e'/>
                    <label htmlFor="file-upload" className="custom-file-upload">
                    <IoIosImages /> Upload Image
      </label>
      <input
        type="file"
        style={{ display: "none" }}
        id="file-upload"
        // onChange={uploadImage}
/>
                </div>
                <button className='uploadButton'>upload product</button>
                </form>
                
        </div>
    </div>
  
  )
}

export default VendorUpload