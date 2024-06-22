import React, { useState } from "react";
import { Layout, Table } from "antd";
import Fileupload from "../component/uploadpage/fileupload";
import '../index.css'
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const Uploaddata = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (file) => {
    // Assuming 'file' contains the uploaded file object
    // You can extract the file name from 'file' and add it to the list
    setFileList(prevList => [...prevList, file.name]);
  };

  // Columns for the table
  const columns = [
    {
      title: 'Sequence Number',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1
    },
    {
      title: 'File Name',
      dataIndex: 'fileName',
      key: 'fileName',
    },
    {
      title: 'Upload Date',
      dataIndex: 'uploadDate',
      key: 'uploadDate',
      render: () => new Date().toLocaleDateString() // Display current date for each upload
    },
  ];

  // Data for the table
  const data = fileList.map((fileName, index) => ({
    key: index,
    index: index + 1,
    fileName: fileName,
  }));

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center", background:"#fff", justifyContent: "space-between" }}>
        <div>
            <img src= "/kenning-logo.webp" width={180} alt="Kenning Logo" />
        </div>
        <div>
        <button onClick={() => navigate('/')} className="ant-btn css-dev-only-do-not-override-1ae8k9u ant-btn-default ml-3">Back to Dashboard</button>
        </div>
      </Header>
      <Content style={{ padding: "40px 48px 100px" }}>
        <div className="layoutrow">
          <div className="layoutsection">
            <Fileupload onFileUpload={handleFileUpload} />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
    </Layout>
  );
};

export default Uploaddata;
