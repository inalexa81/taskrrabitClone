
import API from "./ApiSingelton";

export const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  zipCode: string
) => {
  try {
    if (!firstName || !lastName || !email || !password || !phone || !zipCode)
      throw new Error("missing data from client");
    return await API.createUser({
      firstName,
      lastName,
      email,
      password,
      phone,
      zipCode,
    });
  } catch (error) {
    console.error("On userApi file.Error signing up:", error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
  
      // Call the API method to log in the user
      return await API.logiInUser(email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };
