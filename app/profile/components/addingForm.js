import React from 'react'
import { Field, Form, Formik } from "formik"
import * as Yup from 'yup'
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import CustomInput from "@/app/components/Formik/CustomInput";
import Profile from '../page';


const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email address.')
    .required('Email is required.'),
  name: Yup.string()
    .required('Name is required.')
})

function ProfileForm (details){

  const isLoading = false
  const initialProps = {
    email: '',
    name: '',
    date: new Date().toISOString().split('T')[0], // Set today's date as the initial value
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Set current time as the initial value
  };

  const onSubmit = (data) => {
    console.log(data)
  }

  return (

    <div className=' flex items-center justify-center h-full w-full'>
        <div className="flex flex-col w-fit mb-5">
          <p className="text-2xl font-bold">Add Details </p>
          <div className="w-3/5 h-[3px] bg-primary"></div>
        </div>

       <Formik initialValues={initialProps} validationSchema={loginValidation}>
        {() => (
        
          <Form className='flex flex-col h-[50vh] justify-evenly'>
            <div className='flex justify-between'>
            <Field
              disabled={isLoading}
              name="name"
              type="text"
              label="First Name"
              value={details.firstName}
              component={CustomInput}
            />
            <Field
              disabled={isLoading}
              name="name"
              type="text"
              label="Last Name"
              value={details.lastName}
              component={CustomInput}
            />
            </div>
            <Field
              disabled={isLoading}
              name="address"
              type="text"
              label="Address"
              value={details.address}
              component={CustomInput}
            />
            <Field
              disabled={isLoading}
              name="email"
              type="email"
              label="Email"
              value={details.email}
              component={CustomInput}
            />
            
            <div className="">
              <button
                className="button bg-textColorPrimary mt-3 py-2 px-4 rounded-lg text-white font-bold flex items-center text-sm hover:opacity-80 transition-all duration-300"
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
                &nbsp;
                {isLoading ? 'Adding' : 'Add'}
              </button>
            </div>
          </Form>
        )}
       </Formik>
      </div>
    
  )
}

export default ProfileForm
