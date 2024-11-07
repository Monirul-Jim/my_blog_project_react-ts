import {
  useApproveApplicationMutation,
  useGetAllApplicationQuery,
} from "../../redux/feature/writer/becomeWriter";

type WriterApplicationForm = {
  id: number;
  user: string;
  first_name: string;
  last_name: string;
  email: string;
  agreed_to_terms: boolean;
  is_approved: boolean;
};

const ApprovedRequest = () => {
  const { data, isLoading, error } = useGetAllApplicationQuery(null);
  const [approveApplication, { isLoading: isApproving }] =
    useApproveApplicationMutation();

  const handleApprovalToggle = async (id: number, currentStatus: boolean) => {
    try {
      await approveApplication({ id, isApproved: !currentStatus }).unwrap();
      alert(
        `Application ${
          !currentStatus ? "approved" : "set to pending"
        } successfully!`
      );
    } catch (err) {
      console.error("Failed to update approval status", err);
    }
  };

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Failed to load applications.</p>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Approved Request Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">First Name</th>
              <th className="py-2 px-4 border">Last Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((application: WriterApplicationForm) => (
              <tr key={application.id} className="text-center">
                <td className="py-2 px-4 border">{application.user}</td>
                <td className="py-2 px-4 border">{application.first_name}</td>
                <td className="py-2 px-4 border">{application.last_name}</td>
                <td className="py-2 px-4 border">{application.email}</td>
                <td className="py-2 px-4 border">
                  {application.is_approved ? "Approved" : "Pending"}
                </td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() =>
                      handleApprovalToggle(
                        application.id,
                        application.is_approved
                      )
                    }
                    className={`px-4 py-2 rounded-md text-white font-semibold ${
                      application.is_approved
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                    disabled={isApproving}
                  >
                    {application.is_approved ? "Pending" : "Approve"}
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

export default ApprovedRequest;
