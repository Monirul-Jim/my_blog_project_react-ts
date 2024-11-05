const Banner = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1924137135/photo/online-blog-search-learning-work-internet-freelance-business-post-website-online-homepage.jpg?s=612x612&w=0&k=20&c=kzmDarljUaSpYSxO4MzDbqRWTT-3qVcVtthJDYzy6qo=')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for contrast */}
      <div className="relative text-center text-white p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown animate__delay-1s">
          Explore the World of Blogging
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate__animated animate__fadeInUp animate__delay-2s">
          Dive into a variety of topics, insights, and stories crafted just for
          you.
        </p>
        <a
          href="/read-more"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s"
        >
          Start Reading
        </a>
      </div>
    </div>
  );
};

export default Banner;
