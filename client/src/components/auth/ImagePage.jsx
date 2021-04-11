import React, {useState} from "react";
import axios from "axios";
import { Form } from "antd";
import "antd/dist/antd.css";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom'
import ImageUploader from 'react-images-upload';


//import { UserOutlined, LockOutlined } from "@ant-design/icons";

function handleClick(e) {
  
  
  axios.get("http://localhost:5000/api/users/retrieveImage")
  .then((response) => {
    console.log("this is the url: ", response.data);
    var base64Data = response.data;
    var x = 0
    for (var i = 0; i < 4000; i++){
      console.log(x)
      x++;
    }

    
  }
  
  )
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>

  );
 
}

export class App extends React.Component {
  
  constructor(props) {
      super(props);
       this.state = { pictures: [] };
       this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
      console.log("yo pic:", picture);
      var formData =  new FormData();
      var imageFile = document.querySelector('#file');
      formData.append("image", picture);
      for(var pair of formData.entries()) {
        console.log(pair[0]+ ', '+ pair[1]);
     }
      axios
      
      .post("http://localhost:5000/api/users/imageData", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        
        withCredentials: true,
        credentials: "include",
      })
  }

  render() {
      return (
          
          <div> 
            <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
          <a href="#" onClick={handleClick}>
              Click me
           </a>
          </div>
          
      );
  }
  
}

function ImagePage() {
  const [image, setImage] = useState(undefined);
  


  function onFinish(values) {
    var data = {
      pictureURL: values.pictureURL
    };
    axios
      .post("http://localhost:5000/api/users/imageData", data, {
        withCredentials: true,
        credentials: "include",
      })

      .catch(async (err) => console.log(err.response.data));
  }


   
  
   
}
export default App;

 // <Form
    //   name="register_form"
    //   className="login-form"
    //   initialValues={{
    //     remember: false,
    //   }}
    //   onFinish={onFinish}
    // >
    //   <Form.Item
    //     name="pictureURL"
    //     rules={[{ required: true, message: "Please input your first name!" }]}
    //     style={{ width: "25%" }}
    //   >
    //     <Input placeholder="Upload your image URL" />
    //   </Form.Item>
     
      

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Apply Changes
    //     </Button>
    //   </Form.Item>
    //   <a href="#" onClick={handleClick}>
    //      Click me
    //   </a>
    // </Form>