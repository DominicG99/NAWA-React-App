import myEmail from "./RegisterForm";
import axios from "axios";
var user = {firstName: '', lastName: '', email: ''};

function ProfilePage() {
  async function getNameById() {
     const {data:response} = await axios.get('http://localhost:5000/api/users/userFirstName');
     return response
   }
  getNameById()
    .then(data => {
    document.write(data);
    
  })
    .catch(err => console.log(err))
  document.write("bruh");
  
}

export default ProfilePage;
