import React, { useState } from 'react';

interface JsonEditorProps {
  jsonSchema: string;
  setJsonSchema: (schema: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ jsonSchema, setJsonSchema }) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonSchema(value);

    try {
      JSON.parse(value); // Validate JSON
      setError(null);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">JSON Editor</h2>
      <textarea
        value={jsonSchema}
        onChange={handleInputChange}
        className="w-full h-96 border rounded p-2 font-mono"
        placeholder="Enter JSON schema..."
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonEditor;
export {};
