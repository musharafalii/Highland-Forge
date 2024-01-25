import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import './Home.css';

function Service() {
  const [sidebar, setSidebar] = useState(false);

  const initialValues = {
    orderNumber: '',
    orderDate: '',
    escalationReason: '',
    partsOrdered: '',
  };

  const validationSchema = Yup.object().shape({
    orderNumber: Yup.string()
      .required('Order Number is required'),
    orderDate: Yup.date()
      .required('Order Date is required'),
    escalationReason: Yup.string()
      .max(200, 'Escalation Reason must be at most 200 characters'),
    partsOrdered: Yup.string()
      .required('Parts Ordered is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const newStock = {
    
      orderNumber: values.orderNumber.trim(),
      orderDate: values.orderDate,
      escalationReason: values.escalationReason.trim(),
      partsOrdered: values.partsOrdered.trim(),
    };

    try {
      // Your existing fetch logic here...
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStock),
      });

      if (response.status === 201) {
        resetForm();
      } else {
        console.error('Error adding stock:', response.statusText);
      }
    } catch (error) {
      console.error('Network error while adding stock', error);
    }
  };

  return (
    <div className="">
      <div className='content-area'>
        <div class="page-title">Add Management System</div>
        <div class="page-desc">Add and view your stocks</div>

        <div className="add-item">
          <div className="item">
            <div className='title_add'>Add New Stock</div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                {/* Existing form fields... */}
                <div className="form-group">
                  <label htmlFor="orderNumber">Order Number:</label>
                  <Field type="text" id="orderNumber" name="orderNumber" required />
                  <ErrorMessage name="orderNumber" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="orderDate">Order Date:</label>
                  <Field type="date" id="orderDate" name="orderDate" required />
                  <ErrorMessage name="orderDate" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="escalationReason">Escalation Reason:</label>
                  <Field as="textarea" id="escalationReason" name="escalationReason" required />
                  <ErrorMessage name="escalationReason" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="partsOrdered">Parts Ordered:</label>
                  <Field type="text" id="partsOrdered" name="partsOrdered" required />
                  <ErrorMessage name="partsOrdered" component="div" className="error-message" />
                </div>

                {/* Existing form fields... */}
                
                <button type="submit" className="button">Add Stock</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
