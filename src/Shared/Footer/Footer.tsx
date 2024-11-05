const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="mb-4">
              We are a blog dedicated to sharing the latest insights and stories
              from various fields. Join us on our journey to explore and learn.
            </p>
            <a href="/about" className="text-blue-400 hover:underline">
              Read more
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>If you have any questions, feel free to reach out!</p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="text-blue-400 hover:underline"
              >
                info@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 text-gray-300 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.926 0 0 .926 0 2.025v19.949C0 23.074.926 24 2.025 24h21.95C23.074 24 24 23.074 24 21.974V2.025C24 .926 23.074 0 22.675 0zM12 24h-4.036v-10.265h-3.964V12H8.964V9.75C8.964 7.962 9.684 6.495 11.571 6.495c1.024 0 2.221.169 2.221.169v2.637h-1.25c-1.036 0-1.353.645-1.353 1.305V12h2.644l-.414 1.735H10.5V24h-2.5z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 text-gray-300 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.643 4.937a10.081 10.081 0 01-2.828.775 4.926 4.926 0 002.164-2.724 10.036 10.036 0 01-3.127 1.184 4.913 4.913 0 00-8.38 4.48A13.947 13.947 0 011.671 3.149a4.918 4.918 0 001.523 6.565A4.897 4.897 0 01.96 9.97c0 .02 0 .041.001.062a4.916 4.916 0 003.946 4.816 4.929 4.929 0 01-2.223.085 4.927 4.927 0 004.59 3.417 9.865 9.865 0 01-6.099 2.104 9.83 9.83 0 01-1.174-.069 13.935 13.935 0 007.548 2.212c9.057 0 14.015-7.501 14.015-13.986 0-.213-.005-.425-.014-.637A10.051 10.051 0 0024 4.57a9.96 9.96 0 01-2.357.647z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 text-gray-300 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.002 2C5.24 2 4 3.238 4 4.988v14.024C4 20.762 5.24 22 7.002 22h14.024C20.762 22 22 20.762 22 18.012V3.988C22 1.238 20.762 0 18.026 0H7.002zm11.047 3.355c.688 0 1.253.565 1.253 1.253s-.565 1.253-1.253 1.253-1.253-.565-1.253-1.253.565-1.253 1.253-1.253zM12 4.428c3.228 0 5.841 2.607 5.841 5.841 0 3.228-2.613 5.841-5.841 5.841-3.229 0-5.841-2.613-5.841-5.841 0-3.234 2.612-5.841 5.841-5.841zm0 10.33c2.48 0 4.489-2.009 4.489-4.489 0-2.48-2.009-4.489-4.489-4.489s-4.489 2.009-4.489 4.489c0 2.48 2.009 4.489 4.489 4.489z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6 text-gray-300 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.797v-5.54c0-1.323-.025-3.029-1.839-3.029-1.839 0-2.117 1.437-2.117 2.917v5.652H10.002V10.04h3.63v1.549h.051c.505-.963 1.734-1.974 3.568-1.974 3.818 0 4.51 2.52 4.51 5.791v5.046h-.002zM5.337 9.304c-1.229 0-2.227-.998-2.227-2.227 0-1.229.998-2.227 2.227-2.227 1.229 0 2.227.998 2.227 2.227 0 1.229-.998 2.227-2.227 2.227zm1.115 11.148H4.223V10.04h2.229v10.412zM22.225 0H1.775C.792 0 0 .792 0 1.775v20.449C0 23.208.792 24 1.775 24h20.449C23.208 24 24 23.208 24 22.225V1.775C24 .792 23.208 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
