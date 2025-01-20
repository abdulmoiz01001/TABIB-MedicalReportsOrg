import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { setLoginDone } from "../store/features/LoginSlice"
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const DashboardLoginComp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorTimeout, setErrorTimeout] = useState(null)

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  // Handle form submission
  const handleSubmit = async (values) => {
    // Replace with your API call
    console.log('Form values:', values)
    try{
        const response = await fetch(`https://nole90yyzc.execute-api.us-east-1.amazonaws.com/dev/signIn`,{
          method: 'POST',
          headers: {
            "x-api-key": "0qNs7fXFGB6OXqRwgSGVH1wCBBhnhBVf4hj65ONL",
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        
        });
        const data = await response.json();
        console.log("data", data)
        if(response.status == 200){
          console.log("success")
          dispatch(setLoginDone())
          navigate("/")
        }
    }catch(e){
      console.log("error" , e)
    }
    // Example: Call an API here using fetch or axios to log the user in
  }

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
            className='w-full h-screen flex justify-center items-center'
          >
            <div className='w-[80%] h-[70%] flex justify-evenly items-center rounded-[16px] bg-[#FFFEFE] opacity-75'>
              <div className="w-[35%] flex flex-col justify-center gap-8 items-start h-full">
                <img src="logo.svg" alt="logo" className="desktop:w-[161px] desktop:h-[80px] large-desktop:w-[350px] large-desktop:h-[200px]" />
                <h1 className="text-[#CC0001] items-start desktop:text-[22px] large-desktop:text-[46px] font-bold">
                  Your Gateway to Precision Insights and <br /> Patient Well-being
                </h1>
                <p className="text-[#313131] desktop:text-[15px] large-desktop:text-[30px] font-normal">
                  Step into the nerve center of health monitoring—designed exclusively for administrators. This dashboard provides you with a seamless overview of aggregated temperament and blood pressure results, offering key insights into patient trends at a glance.
                </p>
              </div>
              <div className="w-[40%] flex flex-col justify-center items-center desktop:gap-8 large-desktop:gap-16 h-full">
                <h1 className="text-[#313131] text-center desktop:text-[45px] large-desktop:text-[95px] font-bold">Login</h1>

                <Field
                  type="text"
                  name="email"
                  placeholder="Email / Username"
                  className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal"
                  onBlur={() => {
                    setFieldTouched('email', true)
                    clearTimeout(errorTimeout) // Clear any previous timeout
                  
                  }}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 w-[80%] flex justify-start items-center">{errors.email}</div>
                )}

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-[80%] pr-5 desktop:pl-6 large-desktop:pl-10 desktop:text-[20px] large-desktop:text-[50px] desktop:h-[80px] large-desktop:h-[130px] border-2 bg-transparent desktop:placeholder:text-[20px] large-desktop:placeholder:text-[40px] border-red-900 rounded-[15px] font-normal"
                  onBlur={() => {
                    setFieldTouched('password', true)
                    clearTimeout(errorTimeout) // Clear any previous timeout
                    
                  }}
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 w-[80%] flex justify-start items-center ">{errors.password}</div>
                )}

                <div className='flex justify-end items-center w-[80%]'>
                  <p onClick={() => navigate("/forget-password")} className="text-[#313131] font-semibold cursor-pointer desktop:text-[18px] large-desktop:text-[30px]">Forgot Password?</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className='desktop:w-[200px] large-desktop:w-[400px] large-desktop:h-[100px] desktop:h-[50px] rounded-[15px] desktop:text-[20px] large-desktop:text-[40px] bg-[#CC0001] text-[#FFFFFF] z-50'
                >
                  {isSubmitting ? 'Loading...' : 'Login'}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default DashboardLoginComp
