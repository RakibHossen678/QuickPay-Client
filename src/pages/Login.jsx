const Login = () => {
  return (
    <div className="w-full mx-auto my-auto max-w-lg p-5 space-y-4 rounded-lg shadow-xl">
      <h1 className="text-3xl text-center font-semibold pb-4">
        Login to <br /> your account
      </h1>

      <form className="space-y-4">
        <div className="">
          <label className="">Email/Phone Number</label>
          <br />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email/Number"
            className="w-full p-2 rounded-md mt-1 border-gray-400 border-2 text-gray-900"
          />
          <br />
          <br />
          <label className="">Pin Number</label>
          <br />
          <input
            id="pin"
            name="pin"
            type="number"
            placeholder="Enter Your Pin Number"
            className="w-full p-2 rounded-md mt-1 border-gray-400 border-2 text-gray-900"
          />
          <br />
        </div>
        <div className="">
          <button
            type="button"
            className="px-8 py-3 space-x-2 font-semibold rounded bg-blue-800 text-white w-full"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
