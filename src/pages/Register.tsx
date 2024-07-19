import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../elements/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../rtk/registerSlice";
import { RootState, AppDispatch } from "../rtk/store";
import { useEffect } from "react";
////yub validation
const schema = yup.object({
  email: yup
    .string()
    .email("Email format is not Valid")
    .required("Email is required"),
  password: yup.string().min(8).required("password is required"),
  passwordConfirm: yup
    .string()
    .required("Email is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

////input tupe
type Typeform = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, user } = useSelector((state: RootState) => state.register);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Typeform>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<Typeform> = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content=" register book store" />
      </Helmet>
      <div className="bglogin relative h-[100vh] w-full md:py-[30px]">
        <div className="bg-white mx-auto lg:w-1/3 md:w-1/2 sm:w-[100%] text-center pt-[40px] rounded-md shadow-loginshadow h-[100vh] md:h-[600px]">
            <h1 className="font-bold text-[30px] md:text-[30px]">My <span className="text-main">Book</span></h1>
            <p className="text-logintext text-[16px] md:text-[18px] pt-[18px]">Registration</p>
            <p className="text-[14px] md:text-[16px] text-seccolor pt-2">For Both Staff & Students</p>
            <div className="pt-20px]">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="box-border mx-[50px]"
            >
              <Input
                name="email"
                label="College Email ID"
                register={register}
                error={errors.email?.message}
              />

              <Input
                name="password"
                label="Password"
                register={register}
                error={errors.password?.message}
              />

              <Input
                name="passwordConfirm"
                label="Confirm Password"
                register={register}
                error={errors.passwordConfirm?.message}
              />

              <button
                type="submit"
                disabled={loading}
                className={` ${
                  loading ? "opacity-50" : "opacity-100"
                } bg-main text-white w-full rounded-md p-[8px] text-[14px] md:text-[16px] font-bold`}
              >
                Register
              </button>
              <div className="flex justify-between text-[13px] md:text-[14px] py-[10px]">
                <p className="">
                  Already a User
                  <Link to="/login" className="underline">
                    {" "}
                    Login now
                  </Link>
                </p>
                <p>Use as Guest</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
