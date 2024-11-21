import React from 'react';
import { useForm, Controller, FieldValues, FieldError } from 'react-hook-form';

interface Field {
  id: number;
  name: string;
  label: string;
  type: string;
}

interface FormPreviewProps {
  fields: Field[];
}

const FormPreview: React.FC<FormPreviewProps> = ({ fields }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log('Form Data:', data);
  };

  // Updated error handling with explicit type check
  const getErrorMessage = (fieldName: string): React.ReactNode => {
    const error = errors[fieldName];
    if (error && 'message' in error) {
       error.message; // Return the message if it's available
    }
    return ''; // Return an empty string if no error or no message
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div key={field.id} className="mb-4">
          <label htmlFor={field.name} className="block text-sm font-medium">
            {field.label}
          </label>
          <Controller
            control={control}
            name={field.name}
            render={({ field: controllerField }) => (
              <div>
                <input
                  {...controllerField}
                  type={field.type || 'text'}
                  className="w-full border rounded p-2"
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">
                    {typeof errors[field.name] === 'object' && errors[field.name]?.message
                      ? (errors[field.name] as FieldError).message // Explicit cast to FieldError
                      : 'This field is required.'}
                  </p>
                )}
              </div>
            )}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default FormPreview;
