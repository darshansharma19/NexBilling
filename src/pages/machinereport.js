
import React, { useState } from "react";
import { Table } from "antd";
import { FaArrowLeft } from "react-icons/fa6";
import { PiListDashesBold } from "react-icons/pi";
import { GiTeamDowngrade } from "react-icons/gi";

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

const MachineReport = () => {
  return (
    <div>
      <div className="flex items-center align-middle bg-blue-100 p-4">
        <div className="text-3xl">
          <GiTeamDowngrade/>
        </div>
        <div className="pl-4">
          <h2 className="text-2xl mb-0 font-bold">Machine Report</h2>
          <span className="text-md font-semibold">Report List</span>
        </div>
      </div>
      <div className="p-4">
        {/* Upper Heading with Button */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="flex items-center text-sm sm:text-xl font-semibold text-blue-500">
            <PiListDashesBold />
            <span className="pl-2">Machine Report List</span>
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
                  Machine:
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

          {/* Table Heading */}
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-semibold">Machine Status</h1>
          </div>

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

export default MachineReport;

