import React from 'react';
export default function RegisterPage() {
  return (
    <div>
      <div className="ml-5 mt-5">
        <button className="text-xl font-semibold ml-5">
          <a href="/">Go Back</a>
        </button>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gray-500">
        <div className="">
          <h2 className="text-3xl font-bold mb-5 text-center">Sign Up</h2>

          <div className="w-full px-6 py-4 mt-6  sm:max-w-md sm:rounded-lg">
            <form>
              <div className="mt-4">
                <label
                  for="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <a
                    className="text-sm text-gray-600 underline hover:text-gray-900"
                    href="/login"
                  >
                    Already registered?
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-4 py-2 ml-4 text-lg font-bold bg-gray-500 text-black uppercase rounded-md active:bg-gray-900"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
