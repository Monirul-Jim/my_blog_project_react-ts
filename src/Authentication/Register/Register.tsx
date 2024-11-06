import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../redux/feature/auth/authApi";
import { useState } from "react";

interface IFormInput {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}
interface IRegistrationErrorResponse {
  username?: string[];
  email?: string[];
  password?: string[];
  // Add other fields you expect to see in the error response
}

type IError = {
  data: IRegistrationErrorResponse;
  status: number;
};
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [registerUser, { data, isLoading, error }] = useRegisterUserMutation();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {
    try {
      await registerUser(formData);
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Register
        </h1>
        {data && (
          <p className="mt-4 text-center text-green-700 bg-green-100 border border-green-300 rounded-md p-3">
            Registration successful!
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Username
            </label>
            <input
              {...register("username", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
            {error && (error as IError).data?.username && (
              <p className="text-red-600">
                {(error as IError)?.data?.username}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              First Name
            </label>
            <input
              {...register("first_name", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.first_name && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Last Name
            </label>
            <input
              {...register("last_name", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.last_name && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </div>
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
            {error && (error as IError).data?.email && (
              <p className="text-red-600">{(error as IError)?.data?.email}</p>
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
            {error && (error as IError).data?.password && (
              <p className="text-red-600">
                {(error as IError)?.data?.password}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("confirm_password", { required: true })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirm_password && (
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
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
