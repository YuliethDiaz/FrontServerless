import { useState } from 'react';
import swal from 'sweetalert';

const useToken= () =>  { 
  const getToken = () => {
    const tokenString = localStorage.getItem('Token');
    const LOGIN = process.env.REACT_APP_LOGIN_URL;
    let userToken = "";
    const now = new Date()
  
    if(tokenString !=null && tokenString.includes("value")){
       userToken = JSON.parse(tokenString);

        // compare the expiry time of the item with the current time
          if (now.getTime() > userToken.expiry) {
          // If the item is expired, delete the item from storage
          // and return null

          swal({  
            title:"Alerta",
            text:"La sesión ha expirado",
            icon: "warning"
          }).then(() => {
            window.localStorage.clear();      
            window.location.href = LOGIN; 

          });


        }

    }
  
    return userToken
  };

  const [Token, setToken] = useState(getToken());

  const saveToken = userToken => {

    const now = new Date()
  
          // `item` is an object which contains the original value
          // as well as the time when it's supposed to expire
          const item = {
            value: userToken,
            expiry: now.setMinutes( now.getMinutes() + 180 )
            ,
          }

    localStorage.setItem('Token', JSON.stringify(item));
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    Token
  }
}
export default useToken;