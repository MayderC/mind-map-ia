"use client";

import { LoginSchema } from "@/presentation-ui/helpers/schemas";
import { LoginFormType } from "@/presentation-ui/helpers/types";
import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { login } from "@/presentation-ui/services/auth.service";
import { useUser } from "@/presentation-ui/hooks/useUser";
import { useState } from "react";

export const Login = () => {
  const {login: loginContext} = useUser();
  const [errorMessage, setErrorMessage] = useState<string>('')

  const initialValues: LoginFormType = {
    email: "test1@mgail.com",
    password: "password",
  };

  const handleLogin = async (values: LoginFormType) => {
      const response = await login(values.email, values.password);
      if(response.ok){
        loginContext(response.data);
        try { window.location.href = '/dashboard'} 
        catch {console.clear();}
      }else showErrorMessage('Invalid credentials')
  }

  const showErrorMessage = (message: string) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage('')
    }, 3000)
  }

  return (
    <>
      <div className='text-center text-[25px] font-bold mb-6'>Login</div>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}>
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className='flex flex-col w-1/2 gap-4 mb-4'>
              <Input
                variant='bordered'
                label='Email'
                type='email'
                value={values.email}
                isInvalid={!!errors.email && !!touched.email}
                errorMessage={errors.email}
                onChange={handleChange("email")}
              />
              <Input
                variant='bordered'
                label='Password'
                type='password'
                value={values.password}
                isInvalid={!!errors.password && !!touched.password}
                errorMessage={errors.password}
                onChange={handleChange("password")}
              />
            </div>

            <p className='text-red-500 text-sm h-6'>
               {errorMessage && errorMessage}
            </p>

            <Button
              onPress={() => handleSubmit()}
              variant='flat'
              color='primary'>
              Login
            </Button>
          </>
        )}
      </Formik>

      <div className='font-light text-slate-400 mt-4 text-sm'>
        Don&apos;t have an account ?{" "}
        <Link href='/auth/register' className='font-bold'>
          Register here
        </Link>
      </div>
    </>
  );
};
