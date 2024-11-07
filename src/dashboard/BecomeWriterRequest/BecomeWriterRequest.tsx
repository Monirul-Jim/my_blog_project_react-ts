import {
  useGetUserInfoQuery,
  useUpdateUserRoleMutation,
} from "../../redux/feature/writer/writerApi";

type User = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  roles: string[];
};

const BecomeWriterRequest = () => {
  const { data: users, isLoading, error } = useGetUserInfoQuery(null);
  const [updateUserRole, { isLoading: updateLoading }] =
    useUpdateUserRoleMutation();

  const handleRoleUpdate = async (userId: number, newRole: string) => {
    try {
      await updateUserRole({ id: userId, role: newRole });
    } catch (error) {
      console.error("Error updating role", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching users.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">User List</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by username, name, or email"
          className="px-4 py-2 border rounded-md w-full md:w-1/2"
        />
        <button>Search</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Username
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Full Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Roles
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: User) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {user.username}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {user.first_name} {user.last_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <ul className="list-disc pl-5">
                    {user.roles.map((role, index) => (
                      <li key={index} className="text-gray-600 list-none">
                        {role}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  <button
                    className={`py-2 px-4 rounded-md hover:bg-blue-600 mr-2 ${
                      updateLoading || user.roles.includes("writer")
                        ? "bg-[#64748b] cursor-not-allowed"
                        : "bg-blue-500"
                    }`}
                    onClick={() => handleRoleUpdate(user.id, "writer")}
                    disabled={updateLoading || user.roles.includes("writer")}
                  >
                    Set as Writer
                  </button>
                  <button
                    className={`py-2 px-4 rounded-md hover:bg-green-600 ${
                      updateLoading || user.roles.includes("user")
                        ? "bg-[#64748b] cursor-not-allowed"
                        : "bg-green-500"
                    }`}
                    onClick={() => handleRoleUpdate(user.id, "user")}
                    disabled={updateLoading || user.roles.includes("user")}
                  >
                    Set as User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BecomeWriterRequest;
