import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import api from '../api';

const UploadComponent: React.FC = () => {

  const handleUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      // console.log(file)

      // Make a POST request to the server to upload the file
      const response = await api.post('/ChatAnalyzerApi/upload/', formData, {
        headers: {
          'Content-Type': 'form-data', // Set content type to multipart/form-data
        },
      });

      // Handle successful upload
      console.log('File uploaded successfully:', response.data);
      message.success(`${file.name} file uploaded successfully`);
    } 
    catch (error) {
      // Handle upload error
      console.error('Error uploading file:', error);
      message.error(`${file.name} file upload failed.`);
    }
  };

  const props = {
    beforeUpload: (file: File) => {
      handleUpload(file);
      return false; // Prevent default upload behavior
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload File</Button>
    </Upload>
  );
};

export default UploadComponent;
