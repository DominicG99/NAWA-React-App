import React, { useState, useContext } from "react";
import ImageInput from "./ImageInput";
import axios from "axios";
import UserContext from "../context/UserContext";
import ImageContext from "../context/ImageContext";


function ImageUpload() {
  const { getImageInfo } = useContext(ImageContext);
  const { userInfo } = useContext(UserContext);
  const [fileData, setFileData] = useState();
  const [images, setFile] = useState("");
  const handleFileChange = ({ target }) => {
    setFileData(target.files[0]);
    setFile(target.value);
    console.log(target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FUCKKKK");
    const formdata = new FormData();
    formdata.append("email", userInfo.userInfo.email);
    formdata.append("image", fileData);
    console.log(userInfo.userInfo.email);
    console.log(formdata);
    axios
      .post("http://localhost:5000/api/users/image", formdata)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
    console.log("line 30");
    getImageInfo();
      

  }
  return (
    <form onSubmit={handleSubmit}>
      <ImageInput
        type="file"
        name="file"
        value={images}
        accept="image/*"
        onChange={handleFileChange}
        placeholder="upload image"
        isRequired={true}
      />

      <button>submit</button>
    </form>
  );
}

export default ImageUpload;


//await axios.get("http://localhost:5000/api/users/retrieveImage")
//     .then((response) => console.log("this is the url: ", response.data));