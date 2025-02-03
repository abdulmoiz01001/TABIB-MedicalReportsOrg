import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

const ForgotPasswordComp = () => {
  const [errorTimeout, setErrorTimeout] = useState(null);
  const navigate = useNavigate();

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
  const [invalidCredentials, setInvalidCredentials] = useState('');
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        `https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/resetPassword`,
        {
          method: 'POST',
          headers: {
            'x-api-key': '0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        navigate('/login');
      } else {
        setInvalidCredentials(data.message);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  // Tailwind class variables using clsx
  const containerClass = clsx(
    'w-full',
    'h-screen',
    'flex',
    'mobile:py-2',
    'justify-center',
    'items-center'
  );

  const formContainerClass = clsx(
    'w-[80%]',
    'h-[70%]',
    'tablet:h-[90%]',
    'mobile:flex-col-reverse',
    'tablet:flex-col-reverse',
    'mobile:h-[90%]',
    'mobile:w-[90%]',
    'tablet:w-[90%]',
    'flex',
    'justify-evenly',
    'items-center',
    'rounded-[16px]',
    'bg-[#FFFEFE]',
    'bg-opacity-75'
  );

  const inputClass = clsx(
    'w-[80%]',
    'pr-5',
    'desktop:pl-6',
    'mobile:mb-1',
    'tablet:mb-2',
    'mobile:mb-0',
    'mb-3',
    'tablet:h-[40px]',
    'mobile:h-[40px]',
    'mobile:pl-4',
    'tablet:pl-4',
    'laptop:pl-4',
    'laptop:h-[45px]',
    'large-desktop:pl-10',
    'desktop:text-[20px]',
    'large-desktop:text-[40px]',
    'desktop:h-[80px]',
    'tablet:placeholder:text-[12px]',
    'large-desktop:h-[90px]',
    'border-2',
    'bg-transparent',
    'desktop:placeholder:text-[20px]',
    'large-desktop:placeholder:text-[35px]',
    'mobile:placeholder:text-[12px]',
    'border-red-900',
    'rounded-[15px]',
    'font-normal'
  );

  const buttonClass = clsx(
    'desktop:w-[200px]',
    'tablet:w-[150px]',
    'mobile:text-[12px]',
    'tablet:text-[14px]',
    'mobile:w-[130px]',
    'tablet:h-[40px]',
    'mobile:h-[40px]',
    'large-desktop:w-[400px]',
    'laptop:w-[150px]',
    'laptop:h-[40px]',
    'laptop:mt-2',
    'large-desktop:h-[100px]',
    'desktop:h-[50px]',
    'mobile:text-[11px]',
    'tablet:text-[12px]',
    'rounded-[15px]',
    'desktop:text-[20px]',
    'large-desktop:text-[40px]',
    'bg-[#CC0001]',
    'text-[#FFFFFF]',
    'z-50'
  );

  const headingClass = clsx(
    'text-[#CC0001]',
    'tablet:text-center',
    'mobile:text-center',
    'mobile:text-[12px]',
    'tablet:text-[15px]',
    'items-start',
    'desktop:text-[22px]',
    'large-desktop:text-[46px]',
    'font-bold'
  );

  const subTextClass = clsx(
    'text-[#313131]',
    'tablet:text-center',
    'mobile:text-center',
    'mobile:text-[10px]',
    'laptop:text-[0.8rem]',
    'desktop:text-[15px]',
    'large-desktop:text-[30px]',
    'font-normal'
  );

  const backToLoginClass = clsx(
    'text-[#CC0001]',
    'cursor-pointer',
    'desktop:text-[15px]',
    'large-desktop:text-[30px]',
    'font-normal'
  );

  const resetPasswordHeadingClass = clsx(
    'text-[#313131]',
    'laptop:text-[1.5rem]',
    'large-desktop:mb-4',
    'tablet:text-[2rem]',
    'mobile:text-[1.5rem]',
    'text-center',
    'desktop:text-[45px]',
    'large-desktop:text-[65px]',
    'font-bold'
  );

  const errorMessageClass = clsx(
    'text-red-500',
    'w-[80%]',
    'tablet:mb-1',
    'mobile:mb-1',
    'mobile:text-[12px]',
    'mobile:h-6',
    'tablet:text-[14px]',
    'tablet:h-8',
    'flex',
    'justify-start',
    'laptop:text-[0.9rem]',
    'items-center'
  );

  const forgotPasswordContainerClass = clsx("w-[40%] tablet:h-[60%] mobile:h-[60%] tablet:w-full mobile:w-full flex flex-col justify-center items-center laptop:gap-2 desktop:gap-2 mobile:gap-2 large-desktop:gap-2 h-full")
  const logoImageClass = clsx("desktop:w-[161px] desktop:h-[80px] large-desktop:w-[350px] large-desktop:h-[200px]")
  const logoContainerClass = clsx("w-[35%] mobile:px-4 tablet:px-4 tablet:w-full tablet:h-[40%] mobile:h-[40%] mobile:w-full flex flex-col justify-center tablet:gap-2 mobile:gap-2 gap-8 tablet:items-center mobile:items-center items-start h-full")
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
            className={containerClass}
          >
            <div className={formContainerClass}>
              <div className={logoContainerClass}>
                <img
                  src="logo.png"
                  alt="logo"
                  className={logoImageClass}
                />
                <h1 className={headingClass}>Reset Your Password</h1>
                <p className={subTextClass}>
                  Please enter your details to reset your password. Make sure
                  your new password matches the confirmation field.
                </p>

                <p
                  onClick={() => navigate('/login')}
                  className={backToLoginClass}
                >
                  Back to Login
                </p>
              </div>
              <div className={forgotPasswordContainerClass}>
                <h1 className={resetPasswordHeadingClass}>Forgot Password</h1>

                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={inputClass}
                  onBlur={() => {
                    setFieldTouched('email', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.email && errors.email && (
                  <div className={errorMessageClass}>{errors.email}</div>
                )}

                <Field
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  className={inputClass}
                  onBlur={() => {
                    setFieldTouched('currentPassword', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.currentPassword && errors.currentPassword && (
                  <div className={errorMessageClass}>{errors.currentPassword}</div>
                )}

                <Field
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  className={inputClass}
                  onBlur={() => {
                    setFieldTouched('newPassword', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.newPassword && errors.newPassword && (
                  <div className={errorMessageClass}>{errors.newPassword}</div>
                )}

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={inputClass}
                  onBlur={() => {
                    setFieldTouched('confirmPassword', true);
                    clearTimeout(errorTimeout);
                  }}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className={errorMessageClass}>{errors.confirmPassword}</div>
                )}

                {invalidCredentials && (
                  <div className="text-[#CC0001]">{invalidCredentials}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={buttonClass}
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
