import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const FormSchema = Yup.object().shape({
  image: Yup.string()
    .url('Invalid URL')
    .required('Image URL is required'),
  contact: Yup.string()
    .required('Contact information is required'),
  description: Yup.string()
    .required('Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(200, 'Description can not exceed 200 characters')
});

const MyForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3000/characters', values);
      alert(response.data);
      resetForm();
    } catch (error) {
      alert(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="form-area">
        <Formik
      initialValues={{
        image: '',
        contact: '',
        description: ''
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <div >
            <div className='form'>
            <h2 className='form-header'>input Pet information</h2>
            <Form className='form-input'>
                
                <Field type="text" name="image" placeholder="Image URL" />
                <ErrorMessage name="image" component="div" />
                <Field type="text" name="contact" placeholder="Contact Information" />
                <ErrorMessage name="contact" component="div" />
                <Field 
                    as="textarea" 
                    name="description" 
                    placeholder="Description"
                    rows={7} 
                />
                <ErrorMessage name="description" component="div" />
                <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
            </div>
            
        </div>
        
      )}
    </Formik>
    </div>
    
  );
}
export default MyForm;
