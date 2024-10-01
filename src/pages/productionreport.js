import React, { useState } from "react";
import { Table } from "antd"; // Importing Table from Ant Design
import { FaArrowLeft } from "react-icons/fa6";
import { PiListDashesBold } from "react-icons/pi";
import { GiTeamDowngrade } from "react-icons/gi";

import "antd/dist/reset.css";
import "../App.css";

// Sample Data
const dataSource = [
  {
    key: "1",
    jobNo: "12345789",
    customer: "Mike",
    spec: "Fight",
    Roll: "09",
    Pend: "33",
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
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];

const ProductionReport = () => {
  const [selectedButton, setSelectedButton] = useState("InProcess");
  const [selectTableHeading, ] = useState("Job In Process");

  // Function to dynamically return tables columns and heading based on radio selection

  const getHeading = () => {
    if (selectedButton === "InProcess") {
      return "Job In Process";
    } else if (selectedButton === "Quality") {
      return "Job In Quality Checking";
    } else if (selectedButton === "FinishedGood") {
      return "Job In Finished Goods";
    }
    return selectTableHeading;
  };



  const getColumns = () => {
    if (selectedButton === "InProcess") {
      return [
        ...cardData, { title: "Pending", dataIndex: "pending", key: "pending" },
      ];
    } else if (selectedButton === "Quality") {
      return [
        ...cardData,
        { title: "Design", dataIndex: "design", key: "design" },
        { title: "Pending", dataIndex: "pending", key: "pending" },
      ];
    } else if (selectedButton === "FinishedGood") {
      return [
        ...cardData,
        { title: "Design", dataIndex: "design", key: "design" },
      ];
    }
    return cardData;
  };

  return (
    <div>
      <div className="flex items-center align-middle bg-blue-100 p-4">
        <div className="text-3xl">
          <GiTeamDowngrade/>
        </div>
        <div className="pl-4">
          <h2 className="text-2xl mb-0 font-bold">Production Report</h2>
          <span className="text-md font-semibold">Report List</span>
        </div>
      </div>
      <div className="p-4">
        {/* Upper Heading with Button */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="flex items-center text-sm sm:text-xl font-semibold text-blue-500">
            <PiListDashesBold />
            <span className="pl-2">Production Report List</span>
          </h1>

          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 sm:py-2 sm:px-4 rounded inline-flex items-center md:text-sm">
            <FaArrowLeft />
            <span className="text-sm md:text-md pl-2">Back</span>
          </button>
        </div>

        {/* Upper Form */}
        <div className="pt-8">
          <form className="max-w-3xl mx-auto">
            <div className="w-full flex items-center sm:mb-5">
              <div className="w-full md:w-5/12 flex items-center mr-5">
                <label
                  htmlFor="customer"
                  className="block text-sm sm:text-md font-medium mr-2"
                >
                  Customer:
                </label>
                <select
                  id="customer"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>

              <div className="w-full md:w-5/12 flex items-center mr-6">
                <label
                  htmlFor="bomNumber"
                  className="block text-sm sm:text-md font-medium mr-2"
                >
                  BOM Number:
                </label>
                <select
                  id="bomNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
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
              <div className="w-full md:w-5/12 flex items-center mr-6">
                <label
                  htmlFor="specf"
                  className="block text-sm sm:text-md font-medium mr-2"
                >
                  Specf:
                </label>
                <select
                  id="specf"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>

              <div className="w-full md:w-5/12 flex items-center mr-6">
                <label
                  htmlFor="jobNumber"
                  className="block text-sm sm:text-md font-medium mr-2"
                >
                  Job Number:
                </label>
                <select
                  id="jobNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>

              <div className="w-full md:w-2/12">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Table Section*/}
        <div className="pt-8">
          {/* Table Radio Button */}
          <div className="inline-flex items-center space-x-4 pt-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                id="inProcess"
                type="radio"
                name="option"
                className="form-radio"
                value="InProcess"
                checked={selectedButton === "InProcess"}
                onChange={(e) => setSelectedButton(e.target.value)}
              />
              <span className="text-sm sm:text-md font-semibold">In Process</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                id="quality"
                type="radio"
                name="option"
                className="form-radio"
                value="Quality"
                checked={selectedButton === "Quality"}
                onChange={(e) => setSelectedButton(e.target.value)}
              />
              <span id="quality" className="text-sm sm:text-md font-semibold">
                Quality
              </span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                id="finishedGood"
                type="radio"
                name="option"
                className="form-radio"
                value="FinishedGood"
                checked={selectedButton === "FinishedGood"}
                onChange={(e) => setSelectedButton(e.target.value)}
              />
              <span
                id="finished-good"
                className="text-sm sm:text-md font-semibold"
              >
                Finished Good
              </span>
            </label>
          </div>

          {/* Table Heading */}
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-semibold">{getHeading()}</h1>
          </div>

          {/* Table Part */}
          <div>
            <Table
              className="custom-table"
              dataSource={dataSource}
              columns={getColumns()} // Dynamically render columns based on selection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionReport;