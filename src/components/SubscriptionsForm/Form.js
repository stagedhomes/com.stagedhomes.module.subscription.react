import React from 'react';
import './SubscriptionsForm.css';

export default function SubscriptionsForm(
  {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    values
  }
) {

  //get today's today, so we can get the year
  const today = new Date();
  const currentYear = today.getFullYear();


  return(
    <>
      <form onSubmit={handleSubmit} className="form-constraint" action="">

        <h3>Payment Information</h3>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
            <label htmlFor="ccNum">Credit Card Number:</label>
            <input
              name="ccNum"
              id="ccNum"
              value={values.ccNum}
              className="form-control"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              required
              onChange={handleChange}
              onBlur={handleBlur}
            />
              {/* errors will only be shown if it has been touched.*/}
              <span className="text-danger error-text">{touched.ccNum && errors.ccNum}</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-8">
              <label>Expiration:</label>
              <div className="row">
                <div className="col-sm-8">
                  <select
                    className="form-control"
                    id="ccMonth"
                    name="ccMonth"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option disabled="disabled">Month</option>
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
                <div className="col-sm-4">
                  <select
                    className="form-control"
                    id="ccYear"
                    name="ccYear"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option disabled="disabled">Year</option>
                    <option value="{ currentYear }">{ currentYear }</option>
                    <option value="{ currentYear + 1 }">{ currentYear + 1 }</option>
                    <option value="{ currentYear + 2 }">{ currentYear + 2 }</option>
                    <option value="{ currentYear + 3 }">{ currentYear + 3 }</option>
                    <option value="{ currentYear + 4 }">{ currentYear + 4 }</option>
                    <option value="{ currentYear + 5 }">{ currentYear + 5 }</option>
                    <option value="{ currentYear + 6 }">{ currentYear + 6 }</option>
                    <option value="{ currentYear + 7 }">{ currentYear + 7 }</option>
                    <option value="{ currentYear + 8 }">{ currentYear + 8 }</option>
                    <option value="{ currentYear + 9 }">{ currentYear + 9 }</option>
                    <option value="{ currentYear + 10 }">{ currentYear + 10 }</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <label htmlFor="ccCVV">Security Code</label>
              <input
              name="ccCVV"
              id="ccCVV"
              value={values.ccCVV}
              className="form-control"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccCVV && errors.ccCVV}
            </div>
          </div>
        </div>

        <h3>Billing Information</h3>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="ccFirstName">First Name</label>
              <input
                name="ccFirstName"
                id="ccFirstName"
                value={values.ccFirstName}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccFirstName && errors.ccFirstName}
            </div>
            <div className="col-sm-6">
              <label htmlFor="ccLastName">Last Name</label>
              <input
                name="ccLastName"
                id="ccLastName"
                value={values.ccLastName}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccLastName && errors.ccLastName}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <label htmlFor="ccAddress">Address</label>
              <input
                name="ccAddress"
                id="ccAddress"
                value={values.ccAddress}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccAddress && errors.ccAddress}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="ccCity">City</label>
              <input
                name="ccCity"
                id="ccCity"
                value={values.ccCity}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccCity && errors.ccCity}
            </div>
            <div className="col-sm-3">
              <label htmlFor="ccState">State/Province</label>
              <input
                name="ccState"
                id="ccState"
                value={values.ccState}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccState && errors.ccState}
            </div>
            <div className="col-sm-3">
              <label htmlFor="ccZip">Zip</label>
              <input
                name="ccZip"
                id="ccZip"
                value={values.ccZip}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccZip && errors.ccZip}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <label htmlFor="ccCountry">Country</label>
              <input
                name="ccCountry"
                id="ccCountry"
                value={values.ccCountry}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccCountry && errors.ccCountry}
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-sm-12">
              <label htmlFor="ccEmail">Email</label>
              <input
                name="ccEmail"
                id="ccEmail"
                value={values.ccEmail}
                className="form-control"
                type="text"
                required
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* errors will only be shown if it has been touched.*/}
              {touched.ccEmail && errors.ccEmail}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-default">Subscribe</button>
          </div>
        </div>
      </form>
    </>
  );
}
