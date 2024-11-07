const MainDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-800">
        Welcome to Your Dashboard
      </h2>
      <p className="text-lg text-gray-600">
        Here’s a quick overview of your account.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-medium text-gray-700">
            Pending Writer Requests
          </h3>
          <p className="text-gray-500">
            Manage writer requests from the community.
          </p>
          <a
            href="/dashboard/accept-writer-request-or-declined"
            className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            View Requests
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-medium text-gray-700">Your Posts</h3>
          <p className="text-gray-500">
            View and manage the blog posts you've written.
          </p>
          <a
            href="/dashboard/your-posts"
            className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            View Posts
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
