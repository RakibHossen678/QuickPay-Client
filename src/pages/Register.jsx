import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/axiosPublic";
import { useMutation } from "@tanstack/react-query";
// import bcrypt from 'bcrypt'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { mutateAsync } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosPublic.post("/users", info);
      console.log(data);
    },
    onSuccess: async () => {
      toast.success("User created  Successful");
      navigate("/login");
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const pin = form.pin.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    if (pin.length !== 5) {
      toast.error("Pin number should be 5 characters");
      return;
    }
    // const hashedPin=await bcrypt.hash(pin,10)
    const info = { name, pin, email, mobile, role: "pending" };
    console.log(info);

    await mutateAsync(info);
  };
  return (
    <div className="w-full mx-auto my-auto max-w-lg p-5 space-y-4 rounded-lg shadow-xl">
      <h1 className="text-3xl text-center font-semibold pb-4">
        Register to <br /> create account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <label className="">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
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
          <br />
          <label className="">Mobile Number</label>
          <br />
          <input
            id="mobile"
            name="mobile"
            type="number"
            placeholder="Enter Your mobile Number"
            className="w-full p-2 rounded-md mt-1 border-gray-400 border-2 text-gray-900"
          />
          <br />
          <br />
          <label className="">Email Address</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your email address"
            className="w-full p-2 rounded-md mt-1 border-gray-400 border-2 text-gray-900"
          />
          <br />
          <br />
        </div>
        <div className="">
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded bg-blue-800 text-white w-full"
          >
            Sign up
          </button>
        </div>
        <div className="text-center">
          Do You have account?
          <Link className="text-blue-800" to={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
