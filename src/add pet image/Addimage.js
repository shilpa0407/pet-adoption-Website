import React, {useState} from 'react'
import "./Addimage.css";
import {FcAddImage} from "react-icons/fc"
import {Link} from "react-router-dom";


const Addimage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {

    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };
  return (
    <>
    <div className='heading'>
    <h4>add images in inventory</h4>
    <p style={{fontSize:'small'}}>some random text some text</p>
    </div>
    
    <div className="app">
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
        <label htmlFor="file" className="add-icon">
            <i className="add-img-icon"><FcAddImage/></i>
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
      <div className='formbtn'>
  <Link to="/Addimage"><button type="submit" className ="save">Save</button></Link><br></br>
  <Link to="/Dashboard"><button type="submit" className ="cancel">Cancel</button></Link>
  </div>
    </div>

    </>
  )
}

export default Addimage;