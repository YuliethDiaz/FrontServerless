import React from "react";

export default function CreateClient(){

return (
    <div className="p-8 mx-10">
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
    
            <div className="pt-2 mx-8">
                <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>              
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>
    
                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"                        />
                    </div>
                </div>
    
                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                    <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>
    
                <div className="sm:col-span-4">
                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                    Phone
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-indigo-300 rounded-md"
                    />
                    </div>
                </div>
    
                <div className="sm:col-span-4">
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                    Company
                    </label>
                    <div className="mt-1">
                    <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
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
  