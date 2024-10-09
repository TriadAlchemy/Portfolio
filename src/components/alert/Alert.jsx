import React from 'react';
import './Alert.css'; // You can add the styles in a separate CSS file

const Alert = ({ message, onClose }) => {
  return (
    <div className="custom-alert" style={{ display: message ? 'flex' : 'none' }}>
      <div className="alert-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
