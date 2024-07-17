import { useForm , SubmitHandler } from "react-hook-form"
import Input from "../elements/Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"
import axiosInstance from "../utlis/axios"
import { useDispatch } from "react-redux"
import { signUpUser } from "../rtk/authSlice"
import { useState } from "react"

////yub validation
const schema = yup.object({
    regNo: yup
        .number()
        .required("College Reg. No is required"),
    email: yup
        .string()
        .email("Email format is not Valid")
        .required("Email is required"),
    password: yup
        .string()
        .min(8),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match'),
})

////input tupe
type Typeform={
    regNo:number
    email:string,
    password:string
    confirmPassword:string

}

const  Register = () => {

    // const [regNo,setregNo]=useState('')
    // const [email,setEmail]=useState('')
    // const [password,setregPassword]=useState('')
    // const [confirmPassword,setregConfirmpassword]=useState('')


    const { 
        register,
        handleSubmit,
        formState :{errors},
    } = useForm<Typeform>({
        mode:"onBlur",
        resolver: yupResolver(schema), ///yub for validation
      }) 

    const dispatch=useDispatch()
    const navigate=useNavigate()

      const onSubmit=(data:Typeform) => {
        data.preventDefault();
        dispatch(signUpUser({regNo, email, password, confirmPassword}))
        .then(action=>{
            localStorage.setItem("accessToken",action.payload.token)
            navigate('login')
        })
      }

  return (
    <div className="bglogin relative h-[100vh] w-full md:py-[30px]">
        <div className="bg-white mx-auto lg:w-1/3 md:w-1/2 sm:w-[100%] text-center pt-[40px] rounded-md shadow-loginshadow h-[100vh] md:h-[600px]">
            <h1 className="font-bold text-[30px] md:text-[30px]">My <span className="text-main">Book</span></h1>
            <p className="text-logintext text-[16px] md:text-[18px] pt-[18px]">Registration</p>
            <p className="text-[14px] md:text-[16px] text-seccolor pt-2">For Both Staff & Students</p>
            <div className="pt-20px]">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="box-border mx-[50px]"
                >
                    <Input
                        name="regNo"   
                        label="Reg No." 
                        register={register}
                        error={errors.regNo?.message} 
                        />
                    <p className="font-bold text-red-600 text-left mb-[14px]">{errors.regNo?.message}</p>
                    <Input 
                        name="email" 
                        label="College Email ID"  
                        register={register}
                        error={errors.email?.message} 
                        />
                    <p className="font-bold text-red-600 text-left mb-[14px]">{errors.email?.message}</p>
                    
                    <Input 
                        name="password" 
                        label="Password"  
                        register={register}
                        error={errors.password?.message} 
                        />
                    <p className="font-bold text-red-600 text-left mb-[14px]">{errors.password?.message}</p>
                    
                    <Input 
                        name="confirmPassword" 
                        label="Confirm Password"  
                        register={register}
                        error={errors.confirmPassword?.message} 
                        />
                    <p  className="font-bold text-red-600 text-left mt-0 pt-0">{errors.confirmPassword?.message}</p>
                    
                    <button className="bg-main text-white w-full rounded-md p-[8px] text-[14px] md:text-[16px] font-bold">Register</button>
                    <div className="flex justify-between text-[13px] md:text-[14px] py-[10px]">
                        <p className="">Already a User?<Link to='/login' className="underline"> Login now</Link></p>
                        <p>Use as Guest</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register