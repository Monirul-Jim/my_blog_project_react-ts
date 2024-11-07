import { useAppSelector } from "../../redux/feature/hooks";
import { useApplicationWriterMutation } from "../../redux/feature/writer/becomeWriter";
import { useForm } from "react-hook-form";

type WriterApplicationForm = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  agreed_to_terms: boolean;
};
interface IRegistrationErrorResponse {
  detail?: string[];
}

type IError = {
  data: IRegistrationErrorResponse;
  status: number;
};
const BecomeWriter = () => {
  const user = useAppSelector((state) => state.auth.user);

  const [applicationWriter, { isLoading, error }] =
    useApplicationWriterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriterApplicationForm>({
    defaultValues: {
      // Pre-fill form fields with user data
      username: user?.username || "",
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      agreed_to_terms: false, // Initially set to false
    },
  });

  const onSubmit = async (data: WriterApplicationForm) => {
    if (!data.agreed_to_terms) {
      console.log("You must agree to the terms.");
      return;
    }

    try {
      await applicationWriter(data).unwrap();
      alert("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your application.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Become a Writer
        </h1>
        {error && (error as IError).data?.detail && (
          <p className="text-red-600">{(error as IError)?.data?.detail}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Username
            </label>
            <input
              type="text"
              {...register("username", {
                required: "Username is required",
              })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              First Name
            </label>
            <input
              type="text"
              {...register("first_name", {
                required: "First name is required",
              })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs">
                {errors.first_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              {...register("last_name", {
                required: "Last name is required",
              })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs">{errors.last_name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("agreed_to_terms", {
                  required: "You must agree to the terms",
                })}
                className="mr-2"
              />
              I agree to the{" "}
              <a href="/terms" className="text-blue-500">
                terms and conditions
              </a>
              .
            </label>
            {errors.agreed_to_terms && (
              <p className="text-red-500 text-xs">
                {errors.agreed_to_terms.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md ${
              isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {isLoading ? "Submitting..." : "Apply to Become a Writer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeWriter;
