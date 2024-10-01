// Item Report Page Section Start

import React, { useState } from "react";
import { Table } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import { PiListDashesBold } from "react-icons/pi";
import { GiTeamDowngrade } from "react-icons/gi";
import { FaDownload } from "react-icons/fa6";

import "antd/dist/reset.css";
import "../App.css";

// Sample Data
const dataSource = [
  {
    key: "1",
    machinNo: "12345789",
    jobNo: "12345789",
    customer: "Mike",
    spec: "Fight",
    Roll: "09",
    pending: "33",
    Status: "Active",
  },
  {
    key: "1",
    machinNo: "12345789",
    jobNo: "12345789",
    customer: "Mike",
    spec: "Fight",
    Roll: "09",
    pending: "33",
    Status: "Active",
  },
  {
    key: "1",
    machinNo: "12345789",
    jobNo: "12345789",
    customer: "Mike",
    spec: "Fight",
    Roll: "09",
    pending: "33",
    Status: "Active",
  },
  {
    key: "1",
    machinNo: "12345789",
    jobNo: "12345789",
    customer: "Mike",
    spec: "Fight",
    Roll: "09",
    pending: "33",
    Status: "Active",
  },
];

// Base cardData for table columns
const cardData = [
  {
    title: "#",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Machin Number",
    dataIndex: "jobNo",
    key: "jobNo",
  },
  {
    title: "Job Number",
    dataIndex: "jobNo",
    key: "jobNo",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Spec",
    dataIndex: "spec",
    key: "spec",
  },
  {
    title: "Roll Number",
    dataIndex: "Roll",
    key: "Roll",
  },
  {
    title: "Pending",
    dataIndex: "pending",
    key: "Status",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];

const ItemReport = () => {
  // State to manage the selected option and visibility of dropdowns
  const [selectedOption, setSelectedOption] = useState("");
  const [showSecondSelect, setShowSecondSelect] = useState(false);

  // Handler for the first dropdown change
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Show the second dropdown if "PO" or "Supplier" is selected
    setShowSecondSelect(selectedValue === "Category" || selectedValue === "SubCategory" || selectedValue === "ItemName" || selectedValue === "Color");
  };

  // Additional options based on the first dropdown selection
  const getAdditionalOptions = () => {
    if (selectedOption === "Category") {
      return (
        <>
          <option value="Category Option 1">Category Option 1</option>
          <option value="Category Option 2">Category Option 2</option>
        </>
      );
    } else if (selectedOption === "SubCategory") {
      return (
        <>
          <option value="SubCategory Option 1">Sub Category Option 1</option>
          <option value="SubCategory Option 2">Sub Category Option 2</option>
        </>
      );
    } else if (selectedOption === "ItemName") {
      return (
        <>
          <option value="ItemName Option 1">Item Name Option 1</option>
          <option value="ItemName Option 2">Item Name Option 2</option>
        </>
      );
    } else if (selectedOption === "Color") {
      return (
        <>
          <option value="Color Option 1">Color Option 1</option>
          <option value="Color Option 2">Color Option 2</option>
        </>
      );
    }
    return null; // No additional options if nothing is selected
  };

  return (
    <div>
      <div className="flex items-center align-middle bg-blue-100 p-4">
        <div className="text-3xl">
          <GiTeamDowngrade />
        </div>
        <div className="pl-4">
          <h2 className="text-2xl mb-0 font-bold">Item Report</h2>
          <span className="text-md font-semibold">Report List</span>
        </div>
      </div>
      <div className="p-4">
        {/* Upper Heading with Button */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="flex items-center text-sm sm:text-xl font-semibold text-blue-500">
            <PiListDashesBold />
            <span className="pl-2">Item Report List</span>
          </h1>

          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 sm:py-2 sm:px-4 rounded inline-flex items-center md:text-sm">
            <FaArrowLeft />
            <span className="text-sm md:text-md pl-2">Back</span>
          </button>
        </div>

        {/* Upper Form */}
        <div className="pt-8">
          <form className="max-w-3xl mx-auto">

            {/* Date */}
            <div className="w-full flex items-center sm:mb-5">
              <div className="w-full md:w-4/12 flex items-center mr-5">
                <label
                  htmlFor="customer"
                  className="block text-sm sm:text-md font-medium mr-2 cursor-pointer"
                >
                  From:
                </label>
                <input type="date"></input>
              </div>

              <div className="w-full md:w-4/12 flex items-center mr-6">
                <label
                  htmlFor="customer"
                  className="block text-sm sm:text-md font-medium mr-2 cursor-pointer"
                >
                  To:
                </label>

                <input type="date"></input>
              </div>
              <div className="w-full md:w-4/12 flex items-center">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Excel Download
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="w-full flex items-center">
              <div className="w-full md:w-10/12">
                <div className="w-full md:w-6/12 flex items-center mr-6">
                  <label
                    htmlFor="specf"
                    className="block text-sm sm:text-md font-medium mr-2"
                  >
                    Search By:
                  </label>
                  <select
                    id="specf"
                    onChange={handleOptionChange}
                    value={selectedOption}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-4"
                  >
                    <option value="" selected disabled>All</option>
                    <option value="Category">Category</option>
                    <option value="SubCategory">Sub Category</option>
                    <option value="ItemName">Item Name</option>
                    <option value="Color">Color</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-2/12">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="w-full md:w-10/12">
                {showSecondSelect && (<div className="w-full md:w-6/12">
                  <div className="mt-2 flex items-center">
                    <label
                      htmlFor="additionalOptions"
                      className="block text-sm sm:text-md font-medium mb-2"
                    >
                      Additional Options:
                    </label>
                    <select
                      id="additionalOptions"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select Additional Option</option>
                      {getAdditionalOptions()}
                    </select>
                  </div>
                </div>)}

              </div>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="pt-8">
          {/* Table Heading
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-semibold"> Status</h1>
          </div> */}

          {/* Table Part */}
          <div>
            <Table
              className="custom-table"
              dataSource={dataSource}
              columns={cardData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default  ItemReport;

