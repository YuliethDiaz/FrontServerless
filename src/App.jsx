import React ,{Fragment,useEffect } from 'react'
import GetComponent from './components/GetComponent';
import PostComponent from './components/PostComponent';
import { Route,Routes,Link,Outlet } from 'react-router-dom';
import useToken from "./components/Hooks/useToken";
import Layout from './components/Home/Layout';
import ClientTable from './components/Client/ClientTable';

const App = () =>{


  const urlSearchParams = new URLSearchParams(window.location.hash);
  const params = Object.fromEntries(urlSearchParams.entries());
  const API_URL = process.env.REACT_APP_SERVER_URL;    
  const LOGIN =process.env.REACT_APP_LOGIN_URL;
  const { Token, setToken } = useToken();


  if(Token == null || Token == "") {
    if(params["#id_token"] != undefined){
       setToken(params["#id_token"])
    }
 }
 
    useEffect(() => {
    
      var TokenValue = Token.value ? Token.value : Token;

     /*  axios.get(API_URL+'/decodetoken', {
      params: {
          encoded:'"'+TokenValue+'"'
      }
          }).then(response => { 

            var dataResult = JSON.parse(JSON.stringify(response.data));    
            console.log(dataResult)  
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

                //entro
              }
                  
          
          })  */
            
        }, [Token]);


  return (
    <div>
      
     


      <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/clients" element={<ClientTable />} ></Route>
        <Route path="/post" element={<PostComponent />} ></Route>
        </Route>
      </Routes>
    </div>



  )
}

export default App;
