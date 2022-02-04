import React ,{Fragment,useEffect, useState } from 'react'
import { Route,Routes,Link,Outlet } from 'react-router-dom';
import useToken from "./components/Hooks/useToken";
import Layout from './components/Home/Layout';
import ClientTable from './components/Client/ClientTable';
import CreateClient from './components/Client/CreateClient';
import axios from 'axios'
import swal from 'sweetalert';

const App = () =>{


  const urlSearchParams = new URLSearchParams(window.location.hash);
  const params = Object.fromEntries(urlSearchParams.entries());
  const API_URL = process.env.REACT_APP_SERVER_URL;    
  const LOGIN =process.env.REACT_APP_LOGIN_URL;
  const { Token, setToken } = useToken();
  const [userData, setUserData] = useState([])

  if(Token == null || Token == "") {
    if(params["#id_token"] != undefined){
       setToken(params["#id_token"])
    }
 }
 
    useEffect(() => {
    
      var TokenValue = Token.value ? Token.value : Token;

     axios.get(API_URL+'/token', {
      params: {
        "encoded_str":'"'+TokenValue+'"'
      }
          }).then(response => { 

            var dataResult = JSON.parse(JSON.stringify(response.data));    
            if(dataResult.errorMessage !== undefined ){
                if(dataResult.errorMessage){
                  swal({  
                      title:"Error",
                      text:"Not authorized",
                      icon: "error"
                    }).then(() => {
                      window.localStorage.clear();
                      window.location.href = LOGIN; 

                    });


                }
            }else{

              setUserData(dataResult)
            }
                  
          
          })  
            
        }, [Token]);


  return (
    <div>
      
     


      <Routes>
      <Route path="/" element={<Layout user ={userData}/>} >
        <Route path="/clients" element={<ClientTable />} ></Route>
        <Route path="/clients/create" element={<CreateClient />} ></Route>
        </Route>
      </Routes>
    </div>



  )
}

export default App;
