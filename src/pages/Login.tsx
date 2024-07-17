import { useForm , SubmitHandler } from "react-hook-form"
import Input from "../elements/Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import axiosInstance from "../utlis/axios"
// import { logInOut } from "../rtk/authSlice"



////yub validation
const schema = yup.object({
    email: yup
        .string()
        .email("Email format is not Valid")
        .required("Email is required"),
    password: yup
        .string()
        .min(8)
})

////input tupe
type Typeform={
    email:string,
    password:string
}

const Login = () => {

    const { 
        register,
        handleSubmit,
        formState :{errors},
    } = useForm<Typeform>({
        mode:"onBlur",
        resolver: yupResolver(schema), ///yub for validation
      }) 

    const url="http://localhost:3030/auth/signin";
    const submitForm : SubmitHandler<Typeform> = () => {
        axiosInstance.post(url,{
           register
          })
          console.log(Response)
    }
  return (
    <div className="bglogin relative h-[100vh] w-full md:py-[40px]">
        <div className="bg-white mx-auto lg:w-1/3 md:w-1/2 sm:w-[100%] text-center pt-[40px] rounded-md shadow-loginshadow h-[100vh] md:h-[600px]">
            <h1 className="font-bold text-[30px] md:text-[30px]">My <span className="text-main">Book</span></h1>
            <p className="text-logintext text-[16px] md:text-[18px] pt-[18px]">Welcome Back!</p>
            <p className="text-[14px] md:text-[16px] text-seccolor pt-2">Sign in to continue to your Digital Library </p>
            <div className="pt-[30px]">
                <form onSubmit={handleSubmit(submitForm)}
                    className="box-border mx-[50px]"
                >
                    <Input
                        name="email"   
                        label="Email" 
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
                    <p  className="font-bold text-red-600 text-left mb-[14px]">{errors.password?.message}</p>
                    <div className="flex justify-between text-[13px] md:text-[16px] text-logintext my-[35px]">
                        <label ><input type="checkbox"/>Remember me</label>
                        <Link to="#" className="underline">Forget Password?</Link>
                    </div>
                    <button className="bg-main text-white w-full rounded-md p-[8px] text-[14px] md:text-[16px] font-bold">Login</button>
                    <div className="flex justify-between  text-[13px] md:text-[14px] py-[15px]">
                        <p className="">New User?<Link to='/register'  className="underline">Register Here</Link></p>
                        <p>Use as Guest</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login