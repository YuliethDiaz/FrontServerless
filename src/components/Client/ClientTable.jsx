import React,{useEffect,useState, useCallback, Fragment} from 'react'
import 'devextreme/dist/css/dx.light.css';
import { PlusSmIcon } from '@heroicons/react/solid'
import { Link} from "react-router-dom";
import data from './data.json';
import axios from 'axios'
import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Paging,
    SearchPanel,
    HeaderFilter,
    FilterPanel,
    FilterRow,
    Selection, TotalItem,GroupItem
  } from 'devextreme-react/data-grid';

export default function ClientTable() {

    const API_URL = process.env.REACT_APP_SERVER_URL;    
    const [dataClients, setdataClients] = useState([""])  

    useEffect(() => {

      axios.get(API_URL+'/clients').then(response => { 
  
              var dataResult = JSON.parse(response.data);    
              console.log(dataResult)  
              setdataClients(dataResult.Clients)
                    
            
            }) 
  
  }, []);

return (
    <div className="p-4">

    <div class="flex justify-center mb-2 ">
     <h1 className=" text-lg font-medium text-2xl ">Clients</h1>
               
       <Link to="/clients/create"> 
                <button type="button"  
                  className="ml-2 p-1 border border-transparent rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
              </Link>           
                     
        </div>
        <hr />

        <DataGrid
      dataSource={dataClients}
      keyExpr="Email"
      allowColumnReordering={true}
      showBorders={true}
    >
      <GroupPanel visible={true} />
      <SearchPanel visible={true} />
      <Grouping autoExpandAll={true} />
    
      <HeaderFilter visible={true} />
      <FilterPanel visible={true} />
      <FilterRow visible={true} />
      <Paging defaultPageSize={20} />

      <Column dataField="Name" dataType="string" />
      <Column dataField="LastName" dataType="string" />
      <Column dataField="Email"  dataType="string" />
      <Column dataField="Phone" dataType="string" />
      <Column dataField="City" dataType="string" />
      <Column dataField="Company" dataType="string" />

   
    </DataGrid>



    <div>
               
                </div>
 
  </div>
)

}