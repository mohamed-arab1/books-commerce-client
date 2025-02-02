import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../elements/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../rtk/store";
import { loginUser } from "../rtk/loginSlice";
import { useEffect } from "react";

// yup validation
const schema = yup.object({
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

type Typeform = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Typeform>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, user } = useSelector(
    (state: RootState) => state.login
  );

  const submitForm: SubmitHandler<Typeform> = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to book store" />
      </Helmet>
      <div className="bg-slate-600 h-screen w-full md:py-[30px]">
        <div className="bg-white mx-auto lg:w-1/3 md:w-1/2 sm:w-full text-center pt-[40px] rounded-md shadow-loginshadow h-[100vh] md:h-auto">
          <h1 className="font-bold text-[30px] md:text-[30px]">
            My <span className="text-main">Book</span>
          </h1>
          <p className="text-logintext text-[16px] md:text-[18px] pt-[18px]">
            Welcome Back!
          </p>
          <p className="text-[14px] md:text-[16px] text-seccolor pt-2">
            Sign in to continue to your Digital Library
          </p>
          <div className="pt-[30px]">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="box-border mx-[50px]"
            >
              <Input
                name="email"
                label="Email"
                register={register}
                error={errors.email?.message}
              />
              <Input
                name="password"
                label="Password"
                register={register}
                error={errors.password?.message}
              />
              <div className="flex justify-between text-[13px] md:text-[16px] text-logintext my-[35px]">
                <p>Remember me</p>
                <Link to={""} className="underline">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className={` ${
                  loading ? "opacity-50" : "opacity-100"
                } bg-main text-white w-full rounded-md p-[8px] text-[14px] md:text-[16px] font-bold`}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex justify-between text-[13px] md:text-[14px] py-[15px]">
                <p className="">
                  New User?{" "}
                  <Link to="/Register" className="underline">
                    Register Here
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

export default Login;
