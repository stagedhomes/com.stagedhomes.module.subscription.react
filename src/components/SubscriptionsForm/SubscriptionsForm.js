import React from 'react';
import FormFormik from './FormFormik';
import './SubscriptionsForm.css';


/* ****************************************
 * Validation for Credit Card Number
 **************************************** */
const ccNumValidation = (ccnum) => {
  //check that it is not blank
  if (ccnum.trim() === '') {
    return `Credit Card Number is required`;
  }

  //check for CC, found regex here:
  //https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
  if (/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(ccnum)) {
    return 'Numbers characters.';
  }

  //check that it is at 3 length
  if (ccnum.trim().length < 13) {
    return `Credit card number needs to be at least 13 characters`;
  }
} //ccNumValidation

/* ****************************************
 * Validation for Name
 **************************************** */
const nameValidation = (fieldName, fieldValue) => {
  //check that it is not blank
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }

  //check for valid characters only
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters.';
  }

  //check that it is at 3 length
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least 3 characters`;
  }
} //nameValidation

const emailValidation = (email) => {
  //check for valid email format
  if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return null;
  }

  //check that it is not blank
  if (email.trim() === '') {
    return `Email is required`;
  }

  //default
  return 'Please enter a valid email';
} //emailValidation

/* ****************************************
 * This is an array that maps the field
 * name in the form, to the validation
 * function that formik will use to
 * validate against.
 **************************************** */
const validate = {
  ccNum: ccNumValidation,
  firstName: (name) => nameValidation('First Name', name),
  lastName: (name) => nameValidation('Last Name', name),
  ccEmail: (email) => emailValidation(email)
}

const initialValues = {
  ccNum: '',
  ccEmail: ''
}


function SubscriptionsForm() {
  return (
    <>
      <h1>Annual Subscription</h1>
      <FormFormik validate={validate} initialValues={initialValues} />
    </>
  );
}
export default SubscriptionsForm;



