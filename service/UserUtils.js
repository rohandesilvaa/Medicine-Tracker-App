import { getLocalStorage } from "./Storage";

export const GetUserDetail = async (setUser) => {
  const userInfo = await getLocalStorage("userDetail");
  console.log("User Already Logged In");
  setUser(userInfo);
};
