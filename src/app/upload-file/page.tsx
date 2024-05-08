'use client'
import React from 'react';
import FileUpload from '@/components/FileUpload';

const HomePage: React.FC = () => {
  const handleFileUpload = (file: File) => {
    // Handle file upload logic here
    console.log('File uploaded:', file);
  };

  return (
    <div>
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
}

export default HomePage;
