import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ImageContext = createContext();
function ImageContextProvider(props) {
    const [imageInfo, setImageInfo] = useState(undefined);
    async function getImageInfo() {


    const imageInfoRes = await axios.get(
      "http://localhost:5000/api/users/retrieveImage"
    );
    setImageInfo(imageInfoRes.data);
    console.log("ImageContext URL is: ", imageInfoRes.data)
    }
    useEffect(() => {
    getImageInfo();
    }, []);
    return (
        <ImageContext.Provider value={{ imageInfo, getImageInfo }}>
      {props.children}
    </ImageContext.Provider>
    )
}
export default ImageContext;
export { ImageContextProvider };