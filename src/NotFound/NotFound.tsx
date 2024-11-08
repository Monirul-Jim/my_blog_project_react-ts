const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex items-center space-x-4 animate-bounce mb-6">
        <span className="text-9xl font-extrabold text-pink-500">4</span>
        <span className="text-9xl font-extrabold text-yellow-400">0</span>
        <span className="text-9xl font-extrabold text-blue-500">4</span>
      </div>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-gray-400 mb-8 text-center max-w-lg">
        It seems we can’t find the page you’re looking for. Try going back to
        the homepage and start again.
      </p>
      <a
        href="/"
        className="px-6 py-3 text-lg font-medium text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
      >
        Take me home
      </a>
    </div>
  );
};

export default NotFound;
