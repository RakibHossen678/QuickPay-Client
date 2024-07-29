import toast from "react-hot-toast";

export const getUser = () => {
  let users = [];
  const storedUser = localStorage.getItem("users");
  if (storedUser) {
    users = JSON.parse(storedUser);
  }
  return users;
};

export const saveUser = (user) => {
  const users = getUser();
  const isExist = users.find(
    (data) => data.email === user.email || data.mobile === user.mobile
  );
  if (isExist) {
    return toast.error("User already exists!");
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  toast.success("User saved successfully!");
};
export const deleteUser = () => {
  localStorage.removeItem("users");
};
