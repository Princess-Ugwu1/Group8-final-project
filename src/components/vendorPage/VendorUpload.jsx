import React, { useState } from 'react';
import './VendorUpload.css';
import { IoIosImages } from "react-icons/io";
import { useSelector } from 'react-redux';
import axios from 'axios';

const VendorUpload = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // Image preview state

  const url = "https://groceria.onrender.com/api/v1";
  const userData = useSelector((state) => state.groceria);
  const merchantId = userData.id;
  const token = localStorage.getItem('userToken');

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Display image preview
        setProductImage(file); // Store image file for form submission
      };
      reader.readAsDataURL(file); // Converts the file to base64
    }
  };

  // Upload product handler
  const handleUploadProduct = async (e) => {
    e.preventDefault(); // Prevent form from submitting

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("price", productPrice);
      formData.append("description", productDescription);
      formData.append("image", productImage); // Add image file to FormData

      const response = await axios.post(`${url}/${merchantId}/create-product`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file upload
          "Authorization":` Bearer ${token}`, // Include the token in the headers
        },
      });

      console.log("Product created successfully:", response.data);

      // Clear form fields and image preview after successful upload
      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductImage(null);
      setImagePreview(null);
      
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  return (
    <div className='VendorUploadWrapper'>
      <div className="uploadHolder">
        <div className="descriptiveDiv">
          <p>Upload your Product</p>
          <span>Show the world what you're selling</span>
        </div>

        <form className='VendorUploadForm' onSubmit={handleUploadProduct}>
          <div className="UploadFormHolder">
            <label htmlFor="productName">Product Name</label>
            <input 
              type="text" 
              placeholder='Product Name' 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="UploadFormHolder">
            <label htmlFor="productPrice">Product Price</label>
            <input 
              type="text" 
              placeholder='Product Price' 
              value={productPrice} 
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>
          <div className="UploadFormHolder">
            <label htmlFor="productDescription">Product Description</label>
            <textarea 
              placeholder='Product Description'
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>

          <div className="UploadHolderDiv">
            <label htmlFor="file-upload" className="custom-file-upload">
              <IoIosImages /> Upload Image
            </label>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange} // Handle image change
              required
            />
          </div>

          {imagePreview && (
            <div>
              <h4>Image Preview:</h4>
              <img src={imagePreview} alt="Product Preview" style={{ width: "200px", height: "200px" }} />
            </div>
          )}

          <button type="submit" className='uploadButton'>Upload Product</button>
        </form>
      </div>
    </div>
  );
};

export default VendorUpload;