import myEmail from "./RegisterForm";
import axios from "axios";

var bruh = myEmail;

function ProfilePage() {
  async function getNameById() {
    // const publicUserInfo = {first: '', last: ''};
    // publicUserInfo = await axios.get('http://localhost:5000/api/users/userInfo');
 
     const {data:response} = await axios.get('http://localhost:5000/api/users/userInfo');
     return response
   }
     getNameById()
     .then(data => {
      //var bruh = JSON.stringify(data);
       
       document.write(data);
     })
     .catch(err => console.log(err))


}

export default ProfilePage;
