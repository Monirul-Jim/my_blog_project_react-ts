import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useState } from "react";
import { useAppDispatch } from "../../redux/feature/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/feature/auth/authSlice";
interface IFormInput {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
interface IRegistrationErrorResponse {
  error?: string[];
}

type IError = {
  data: IRegistrationErrorResponse;
  status: number;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [login, { data, isLoading, error }] = useLoginMutation();

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      const res = await login(formData).unwrap();

      const user = verifyToken(res.access) as TUser;

      dispatch(
        setUser({
          user: {
            ...user,
            first_name: res.first_name,
            last_name: res.last_name,
            username: res.username,
            email: res.email,
          },
          token: res.access,
        })
      );
    } catch (err) {
      console.error("login failed", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        {error && (error as IError).data?.error && (
          <p className="text-red-600">{(error as IError)?.data?.error}</p>
        )}
        {data && (
          <p className="mt-4 text-center text-green-700 bg-green-100 border border-green-300 rounded-md p-3">
            Login successful!
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          {showPassword ? "Hide Password" : "Show Password"}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
              isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {isLoading ? "Login..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
