import React from 'react';
const MyComponent = () => {
  const myObject = {
    key1: 'Value 1',
    key2: 'Value 2',
    key3: 'Value 3',
  };
  return (
    <ul>
      {Object.entries(myObject).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};
export default MyComponent;