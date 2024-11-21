// src/App.tsx

import React from 'react';
import './App.css';
import FormPreview from './components/FormPreview';

// Define the JSON schema with an id of type number
const jsonSchema = [
  {
    id: 1,  // id is now a number
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    required: true,
  },
  {
    id: 2,  // id is now a number
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
    pattern: '\\S+@\\S+\\.\\S+',
  },
  {
    id: 3,  // id is now a number
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="w-full lg:w-1/2 p-4">
        {/* Pass jsonSchema as a prop to FormPreview */}
        <FormPreview fields={jsonSchema} />
      </div>
    </div>
  );
}

export default App;
