import React from 'react';
import { Table, Button, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CreateCompany = () => {
  // Sample data for the tables
  const companyData = [
    {
      key: '1',
      sno: '1',
      companyName: 'ABC Pvt Ltd',
      gstin: '22AAAAA0000A1Z5',
      address: '123 Main St, City',
      mobile: '9876543210',
      email: 'abc@company.com',
    },
    // Add more company details here
  ];

  const bankData = [
    {
      key: '1',
      sno: '1',
      bankName: 'XYZ Bank',
      branchName: 'Downtown Branch',
      accountName: 'ABC Pvt Ltd',
      accountNumber: '1234567890',
      ifsc: 'XYZB0001234',
    },
    // Add more bank details here
  ];

  // Company columns
  const companyColumns = [
    {
      title: 'S.No.',
      dataIndex: 'sno',
      key: 'sno',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
    },
    {
      title: 'GSTIN',
      dataIndex: 'gstin',
      key: 'gstin',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button icon={<EditOutlined />} className="text-blue-500">
            Update
          </Button>
          <Button icon={<DeleteOutlined />} className="text-red-500">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // Bank columns
  const bankColumns = [
    {
      title: 'S.No.',
      dataIndex: 'sno',
      key: 'sno',
    },
    {
      title: 'Bank Name',
      dataIndex: 'bankName',
      key: 'bankName',
    },
    {
      title: 'Branch Name',
      dataIndex: 'branchName',
      key: 'branchName',
    },
    {
      title: 'Account Name',
      dataIndex: 'accountName',
      key: 'accountName',
    },
    {
      title: 'Account Number',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
    },
    {
      title: 'IFSC',
      dataIndex: 'ifsc',
      key: 'ifsc',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button icon={<EditOutlined />} className="text-blue-500">
            Update
          </Button>
          <Button icon={<DeleteOutlined />} className="text-red-500">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg mb-8 animate-fadeIn">
        <div className="flex items-center justify-between">
          {/* Main Heading */}
          <div className="flex items-center space-x-4">
            <PlusOutlined className="text-white text-4xl animate-pulse" />
            <h2 className="text-4xl font-extrabold text-white">
              Create Company
            </h2>
          </div>

          {/* Subheading */}
          <p className="text-white text-lg italic">
            Company List
          </p>
        </div>
      </div>

      {/* Company Details Table */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Company Details</h4>
        <Table
          dataSource={companyData}
          columns={companyColumns}
          pagination={false}
          className="mb-6 border rounded-lg"
        />
      </div>

      {/* Bank Details Table */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Bank Details</h4>
        <Table
          dataSource={bankData}
          columns={bankColumns}
          pagination={false}
          className="border rounded-lg"
        />
      </div>

      {/* Add Bank Button */}
      <div className="flex justify-end mt-4">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Add Bank Details
        </Button>
      </div>
    </div>
  );
};

export default CreateCompany;
