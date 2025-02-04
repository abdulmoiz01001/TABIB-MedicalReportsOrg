import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { setLoginDone } from "../store/features/LoginSlice";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Eye, EyeOff } from 'lucide-react';
import clsx from 'clsx';

const DashboardLoginComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    
    console.log(localStorage.getItem("token") !== null)
    localStorage.getItem("token") !== null  ? navigate("/") : null;
  }, []);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = async (values) => {
    setErrorMessage('');
    try {
      const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/signIn`, {
        method: 'POST',
        headers: {
          "x-api-key": "0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        if (localStorage.getItem("token") != null) {
          navigate("/");
        }
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (e) {
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  // Tailwind CSS class variables
  const containerClasses = 'w-full h-screen flex mobile:py-2 justify-center items-center';
  const formContainerClasses = 'w-[80%] tablet:h-[80%] mobile:h-[80%] mobile:w-[90%] tablet:w-[90%] h-[70%] mobile:flex-col-reverse tablet:flex-col-reverse flex justify-evenly items-center rounded-[16px] bg-[#FFFEFE] bg-opacity-75';
  const logoClasses = 'desktop:w-[161px] mobile:w-[120px] laptop:w-[120px] large-desktop:w-[350px]';
  const headingClasses = 'text-[#CC0001] tablet:text-center mobile:text-center mobile:text-[12px] tablet:text-[15px] items-start desktop:text-[22px] large-desktop:text-[46px] font-bold';
  const descriptionClasses = 'text-[#313131] tablet:text-center mobile:text-center mobile:text-[10px] desktop:text-[15px] tablet:text-[12px] laptop:text-[0.8rem] large-desktop:text-[30px] font-normal';
  const inputFieldClasses = 'w-[80%] pr-5 desktop:pl-6 mobile:placeholder:text-[10px] tablet:placeholder:text-[12px] tablet:h-[40px] mobile:mb-2 mobile:h-[40px] mobile:pl-4 tablet:pl-4 laptop:h-[50px] laptop:pl-4 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[90px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal';
  const passwordFieldWrapperClasses = 'w-[80%] relative';
  const passwordFieldClasses = 'w-full pr-12 desktop:pl-6 mobile:placeholder:text-[10px] tablet:placeholder:text-[12px] tablet:h-[40px] mobile:h-[40px] mobile:pl-4 tablet:pl-4 laptop:h-[50px] laptop:pl-4 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[90px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] mobile:mt-0 tablet:mt-3 mt-5 border-red-900 rounded-[15px] font-normal';
  const buttonClasses = 'desktop:w-[200px] mobile:w-[80px] mobile:h-[30px] tablet:w-[100px] tablet:h-[40px] laptop:w-[150px] laptop:h-[40px] large-desktop:w-[400px] large-desktop:h-[100px] desktop:h-[50px] rounded-[15px] desktop:text-[20px] tablet:text-[12px] mobile:text-[11px] large-desktop:text-[40px] bg-[#CC0001] text-[#FFFFFF] z-50';
  const loginHeadingClasses = clsx("text-[#313131] text-center tablet:text-[2rem] mobile:text-[1.5rem] laptop:text-[35px] laptop:mb-3 desktop:text-[45px] large-desktop:text-[95px] font-bold")
  const loginContainerClasses = clsx("w-[40%] tablet:h-[50%] mobile:h-[50%] tablet:w-full mobile:w-full overflow-auto flex flex-col justify-center items-center  desktop:gap-2 mobile:gap-2 large-desktop:gap-6 h-full")
  const mainSubContainerClasses = clsx("w-[35%] mobile:px-4 tablet:px-4 tablet:w-full tablet:h-[50%] mobile:h-[50%] mobile:w-full flex flex-col tablet:items-center mobile:items-center justify-center mobile:gap-4 gap-8 items-start h-full")
  const loginButtonClasses = clsx("absolute top-1/2 -translate-y-1/5 mobile:-translate-y-1/2 tablet:-translate-y-1/3 right-4 text-gray-500 hover:text-gray-700")
  const loginErrorClasses = clsx("text-red-500 h-2 w-[80%] mobile:text-[12px] mobile:h-6 tablet:text-[14px] tablet:h-8  laptop:h-8  flex justify-start items-center")
  const loginErrorPasswordClasses = clsx("text-red-500 h-2 w-[80%] mobile:text-[12px] mobile:h-6 tablet:text-[14px] tablet:h-8 flex laptop:h-8 justify-start items-center")
  const errorMessageClasses = clsx("text-red-500 w-[80%] text-center mt-3")
  const forgotTextClasses = clsx("text-[#CC0001] laptop:my-2 font-semibold cursor-pointer tablet:py-2 laptop:text-[0.8rem] mobile:text-[10px] tablet:text-[12px] mobile:py-3 desktop:text-[18px] large-desktop:text-[30px]")
  const forgotContainerClasses = clsx('flex justify-end items-center w-[80%]')
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
            className={clsx(containerClasses)}
          >
            <div className={clsx(formContainerClasses)}>
              <div className={mainSubContainerClasses}>
                <img src="logo.png" alt="logo" className={clsx(logoClasses)} />
                <h1 className={clsx(headingClasses)}>
                  Your Gateway to Precision Insights and <br /> Patient Well-being
                </h1>
                <p className={clsx(descriptionClasses)}>
                  Step into the nerve center of health monitoring—designed exclusively for administrators. This dashboard provides you with a seamless overview of aggregated temperament and blood pressure results, offering key insights into patient trends at a glance.
                </p>
              </div>
              <div className={loginContainerClasses}>
                <h1 className={loginHeadingClasses}>Login</h1>

                <Field
                  type="text"
                  name="email"
                  placeholder="Email / Username"
                  className={clsx(inputFieldClasses)}
                  onBlur={() => {
                    setFieldTouched('email', true);
                  }}
                />
                {touched.email && errors.email && (
                  <div className={loginErrorClasses}>{errors.email}</div>
                )}

                <div className={clsx(passwordFieldWrapperClasses)}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={clsx(passwordFieldClasses)}
                    onBlur={() => {
                      setFieldTouched('password', true);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={loginButtonClasses}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <div className={loginErrorPasswordClasses}>{errors.password}</div>
                )}

                <div className={forgotContainerClasses}>
                  <p onClick={() => navigate("/forget-password")} className={forgotTextClasses}>Forgot Password?</p>
                </div>

                {errorMessage && (
                  <div className={errorMessageClasses}>{errorMessage}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={clsx(buttonClasses)}
                >
                  {isSubmitting ? 'Loading...' : 'Login'}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DashboardLoginComp;
