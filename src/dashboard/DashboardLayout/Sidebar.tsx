const Sidebar = () => {
  return (
    <nav className="w-64 h-screen bg-gray-800 text-white p-4">
      <ul className="space-y-4">
        <li>
          <a
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Dashboard Home
          </a>
        </li>
        <li>
          <a
            href="/dashboard/accept-writer-request-or-declined"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Pending Request
          </a>
        </li>
        <li>
          <a
            href="/dashboard/writer-request-accept"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Writer Requests
          </a>
        </li>

        <li>
          <a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
