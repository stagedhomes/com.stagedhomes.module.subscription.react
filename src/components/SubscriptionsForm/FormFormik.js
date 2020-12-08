import React from 'react';
import Form from './Form';
import { withFormik } from 'formik';
import './SubscriptionsForm.css';



function myForm( {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  }) {
    return(
      <div className="subs-form">
        <Form
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          touched={touched}
          values={values}
        />
      </div>
    );
  }

  const FormFormik = withFormik({
    mapPropsToValues: ({ initialValues }) => {
      return {
        ...initialValues,
      };
    },

    validate: (values, { validate }) => 
      Object.keys(values).reduce((errors, field) => {
        const error = validate[field](values[field]);
        return {
          ...errors,
          ...(error && { [field]: error }),
        };
      },{}),

    handleSubmit: (values, { setSubmitting }) => {
      const myPayload = JSON.stringify(values, null, 2);
      console.table(myPayload);
      setSubmitting(false);
    },

    validateOnChange: false,

    displayName: 'FormFormik'

  })(myForm);

  export default FormFormik;



