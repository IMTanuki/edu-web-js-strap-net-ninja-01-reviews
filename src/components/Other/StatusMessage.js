// import - modules
import React from 'react';

// import - react hooks

// import - custom hooks

// import - components

const StatusMessage = ({ loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return null; // In case neither loading nor error is true
};

export default StatusMessage;
