import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordComp = () => {
  const [errorTimeout, setErrorTimeout] = useState(null);
  const navigate = useNavigate()

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    currentPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Current password is required'),
    newPassword: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log('Form values:', values);
    try {
      const response = await fetch(
        `https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/resetPassword`,
        {
          method: 'POST',
          headers: {
            "x-api-key" : "0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      console.log('API response:', data);
      if (response.status === 200) {
        console.log('Password updated successfully');
        navigate("/login")
        // Handle success (e.g., navigate to login)
      } else {
        console.log('Error:', data.message);
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      console.log('Error:', error);
      // Handle API error
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched, setFieldTouched, setFieldValue }) => (
        <Form>
          <div
            style={{
              backgroundImage: `url("loginbg.svg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-screen flex justify-center items-center"
          >
            <div className="w-[80%] h-[70%] flex justify-evenly items-center rounded-[16px] bg-[#FFFEFE] opacity-75">
              <div className="w-[35%] flex flex-col justify-center gap-8 items-start h-full">
                <img
                  src="logo.svg"
                  alt="logo"
                  className="desktop:w-[161px] desktop:h-[80px] large-desktop:w-[350px] large-desktop:h-[200px]"
                />
                <h1 className="text-[#CC0001] items-start desktop:text-[22px] large-desktop:text-[46px] font-bold">
                  Reset Your Password
                </h1>
                <p className="text-[#313131] desktop:text-[15px] large-desktop:text-[30px] font-normal">
                  Please enter your details to reset your password. Make sure
                  your new password matches the confirmation field.
                </p>

                <p onClick={() => navigate("/login")} className="text-[#313131] cursor-pointer desktop:text-[15px] large-desktop:text-[30px] font-normal">Back to Login </p>
              </div>
              <div className="w-[40%] flex flex-col justify-center items-center desktop:gap-8 large-desktop:gap-16 h-full">
                <h1 className="text-[#313131] text-center desktop:text-[45px] large-desktop:text-[95px] font-bold">
                  Forgot Password
                </h1>

                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal"
                  onBlur={() => {
                    setFieldTouched('email', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 w-[80%] flex justify-start items-center">
                    {errors.email}
                  </div>
                )}

                <Field
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal"
                  onBlur={() => {
                    setFieldTouched('currentPassword', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.currentPassword && errors.currentPassword && (
                  <div className="text-red-500 w-[80%] flex justify-start items-center">
                    {errors.currentPassword}
                  </div>
                )}

                <Field
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal"
                  onBlur={() => {
                    setFieldTouched('newPassword', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.newPassword && errors.newPassword && (
                  <div className="text-red-500 w-[80%] flex justify-start items-center">
                    {errors.newPassword}
                  </div>
                )}

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal"
                  onBlur={() => {
                    setFieldTouched('confirmPassword', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-red-500 w-[80%] flex justify-start items-center">
                    {errors.confirmPassword}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="desktop:w-[200px] large-desktop:w-[400px] large-desktop:h-[100px] desktop:h-[50px] rounded-[15px] desktop:text-[20px] large-desktop:text-[40px] bg-[#CC0001] text-[#FFFFFF] z-50"
                >
                  {isSubmitting ? 'Loading...' : 'Reset Password'}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordComp;
