// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Question() {
  let HOST = '';  
    if (process.env.NODE_ENV === 'production') {
      HOST = 'https://xtend-back.onrender.com';
    } else {
      // Assuming development environment
      HOST = 'http://localhost:8080';
    }
  const [file, setFile] = useState(null);
  const [wait, setwait] = useState(false)
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setwait(true);
      const formData = new FormData();
      formData.append('file', file);

      const res = await axios.post(`${HOST}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data.data);
      alert(res.data.msg);
      setwait(false);
    } catch (error) {
      console.error('Error uploading questions:', error.message);
      alert('Failed to upload questions.');
      setwait(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Question Upload App</h1>
      <div style={styles.uploadSection}>
        <input
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          style={styles.fileInput}
        />
        <button onClick={handleUpload} disabled={!file} style={styles.uploadButton}>
          {wait ?'UPLOADING...':'UPLOAD FILE'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#333',
    fontSize: '2em',
    marginBottom: '20px',
  },
  uploadSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fileInput: {
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '200px',
  },
  uploadButton: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default Question;
