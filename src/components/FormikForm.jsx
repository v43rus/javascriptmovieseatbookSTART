import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

function FormikForm({ isFormVisible, setIsFormVisible }) {
    
    function CloseBookingForm() {
        setIsFormVisible(false);
    }
    
    return isFormVisible &&
    <div>
        <Formik
            initialValues={{ name: '', phone: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (!values.phone) {
                    errors.phone = 'Required';
                } else if (
                    !/^\+?[1-9]\d{1,14}$/i.test(values.phone)
                ) {
                    errors.phone = 'Invalid phone number';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                    alert("Congratulations " + values.name + ", you have successfully booked your tickets!\n" + "A confirmation will be sent to " + values.phone + ".");
                    setSubmitting(false);
                    setIsFormVisible(false);
            }}
        >
            {({ isSubmitting }) => (
                    <Form className="form">
                        <button onClick="CloseBookingForm" id="close-form-btn">X</button>
                    <Field type="text" name="name" placeholder="Full Name" />
                    <ErrorMessage name="name" component="div" />
                    <Field type="tel" name="phone" placeholder="Phone Number" />
                    <ErrorMessage name="phone" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Buy Tickets
                    </button>
                </Form>
            )}
        </Formik>
    </div>
};
FormikForm.propTypes = {
    isFormVisible: PropTypes.bool.isRequired,
    setIsFormVisible: PropTypes.bool.isRequired,
};
export default FormikForm;