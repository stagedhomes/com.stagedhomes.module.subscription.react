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
  //if (/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(ccnum)) {
    //return 'Numbers characters.';
  //}

  //check for numbers only
  const regex = /^[0-9]+$/;
  //if (regex.test(cvvNum)) {
  if (!ccnum.match(regex)) {
    return 'Please enter numeric characters only';
  }

  //check that it is at 3 length
  if (ccnum.trim().length < 13) {
    return `Credit card number needs to be at least 13 digits long`;
  }
} //ccNumValidation

/* ****************************************
 * Validation for Credit Card Security Code (CVV)
 **************************************** */
const ccCvvValidation = (cvvNum) => {
  //check that it is not blank
  if (cvvNum.trim() === '') {
    return `CVV is required`;
  }

  //check for numbers only
  const regex = /^[0-9]+$/;
  //if (regex.test(cvvNum)) {
  if (!cvvNum.match(regex)) {
    return 'Please enter numeric characters only';
  }

  //check that it is at 3 length
  if (cvvNum.trim().length < 3) {
    return `CVV needs to be at least 3 digits long`;
  }

  //check that it is at 3 length
  if (cvvNum.trim().length > 4) {
    return `CVV can not be more than 4 digits long`;
  }
} //ccNumValidation

/* ****************************************
 * Generic Not Empty Verification
 **************************************** */
const notEmpty = (fieldName, fieldVal) => {
  //check that it is not blank
  if (fieldVal.trim() === '') {
    return `${fieldName} is required`;
  }
} //notEmpty

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
    return `${fieldName} needs to be at least 2 characters`;
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
  ccCVV: ccCvvValidation,
  ccFirstName: (name) => nameValidation('First Name', name),
  ccLastName: (name) => nameValidation('Last Name', name),
  ccEmail: (email) => emailValidation(email),
  ccAddress: (fieldValue) => notEmpty('Address', fieldValue),
  ccCity: (fieldValue) => notEmpty('City', fieldValue),
  ccState: (fieldValue) => notEmpty('State', fieldValue),
  ccZip: (fieldValue) => notEmpty('Zip', fieldValue),
  ccCountry: (fieldValue) => notEmpty('Country', fieldValue)
}

const initialValues = {
  ccNum: '',
  ccCVV: '',
  ccFirstName: '',
  ccLastName: '',
  ccEmail: '',
  ccAddress: '',
  ccCity: '',
  ccState: '',
  ccZip: '',
  ccCountry: ''
}


function SubscriptionsForm() {
  return (
    <>
      <FormFormik validate={validate} initialValues={initialValues} />
    </>
  );
}
export default SubscriptionsForm;



