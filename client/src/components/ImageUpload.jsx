import React, { useState } from "react";
import ImageInput from "./ImageInput";
import axios from "axios";

function ImageUpload() {
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

    formdata.append("image", fileData);

    await axios
      .post("http://localhost:5000/api/uploadImageRoute/image/", formdata)
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
  };

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
