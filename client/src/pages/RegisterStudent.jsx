import React from "react";

const RegisterStudent = () => {
  return (
    <div>
      <h1 className="text-2xl">Register Student</h1>
      <div className="max-w-4xl mx-auto mt-10">
        <form className="">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-xl mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="w-full bg-gray-700 text-xl p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xl mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full bg-gray-700 text-xl p-2"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
