import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/axiosPublic";
import toast from "react-hot-toast";
import { saveUser } from "../lib/localStorage";

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { data: usersData = {} } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/users`);
      return data;
    },
  });
  console.log(usersData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailOrMobile = form.emailOrMobile.value;
    const pin = form.pin.value;
    console.log(emailOrMobile, pin);

    const matchedUser = usersData.find(
      (user) =>
        (user.email === emailOrMobile || user.mobile === emailOrMobile) &&
        user.pin === pin
    );
    console.log(matchedUser);

    if (matchedUser) {
      saveUser(matchedUser);
      toast.success("User Logged in Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };
  return (
    <div className="w-full mx-auto my-auto max-w-lg p-5 space-y-4 rounded-lg shadow-xl">
      <h1 className="text-3xl text-center font-semibold pb-4">
        Login to <br /> your account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <label className="">Email/Phone Number</label>
          <br />
          <input
            id="email"
            name="emailOrMobile"
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
            type="submit"
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
