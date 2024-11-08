
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-2 text-lg text-gray-600">
        Welcome to our blog! Discover who we are and what drives us.
      </p>
    </div>

    <div className="text-center mb-16">
      <p className="max-w-2xl mx-auto text-gray-700 text-md md:text-lg">
        Our blog is dedicated to bringing you insightful articles on various topics, from technology and lifestyle to personal development. We are passionate about sharing knowledge and connecting with readers worldwide.
      </p>
    </div>

    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Team Member"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-500 text-sm">Editor & Writer</p>
          <p className="mt-4 text-gray-600">
            John brings years of experience in writing to our blog. He is passionate about delivering well-researched and engaging content.
          </p>
        </div>
      </div>
    </div>

    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
      <p className="mt-2 text-gray-600">
        Have questions? Feel free to reach out to us!
      </p>
      <p className="mt-4 text-gray-700">
        <span className="font-medium">Email:</span> contact@ourblog.com
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Phone:</span> +123 456 7890
      </p>
    </div>
  </div>
</div>

  );
};

export default About;