import React from "react";
import {useForm} from "react-hook-form"
import axios from 'axios'
import {Link,useNavigate} from "react-router-dom";
import swal from 'sweetalert';


export default function CreateClient(){
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const API_URL = process.env.REACT_APP_SERVER_URL; 
let navigate = useNavigate();
const onSubmit = (data) => {

    console.log("data",data)
    
    //Ejemplo consumo metodo post
    const dataPost={
        "name": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "phone": data.phone,
        "city": data.city,
        "company": data.company,
        }
        console.log("dataPost",dataPost)
     axios.post(API_URL+'/clients', dataPost).then(response => {
        console.log("response",response)
        swal({  
            title:"Success",
            text:"The project has been saved correctly",
            icon: "success"
          }).then(() => {             

          navigate("/clients",{replace: true})

          });
    }).catch(error => {
        console.error('Something went wrong!', error);
    });  
};
return (
    <div className="p-8 mx-10">
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={handleSubmit(onSubmit)} >
            <div className="space-y-8 divide-y divide-gray-200">
    
            <div className="pt-2 mx-8">
                <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>              
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        {...register("firstName", {required:"This is required"})}   
                        id="firstName"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    <p className="text-red-700 text-xs">{errors.firstName?.message}</p>
                    </div>
                </div>
    
                <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        {...register("lastName", {required:"This is required"})}  
                        id="lastName"
                        autoComplete="family-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"                        />
                    </div>
                    <p className="text-red-700 text-xs">{errors.lastName?.message}</p>
                </div>
    
                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                    <div className="mt-1">
                    <input
                        id="email"
                        {...register("email", {required:"This is required"})} 
                        type="email"
                        autoComplete="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    <p className="text-red-700 text-xs">{errors.email?.message}</p>
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        {...register("city")}
                        id="city"
                        autoComplete="city"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>
    
                <div className="sm:col-span-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        {...register("phone")}
                        id="phone"
                        autoComplete="phone"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>
    
                <div className="sm:col-span-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        {...register("company")}
                        id="company"
                        autoComplete="company"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>
    
                </div>
            </div>
    
            
            </div>
    
            <div className="pt-5">
            <div className="flex justify-end">
                <button
                type="button"
                className="bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Save
                </button>
            </div>
            </div>
        </form>
        </div>
    )
  }
  