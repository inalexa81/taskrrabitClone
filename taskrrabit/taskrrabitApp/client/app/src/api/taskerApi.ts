
import API from "./ApiSingelton";

export const taskerSignUp = async (
    taskerFirstName: string,
    taskerLastName: string,
    taskerEmail: string,
    taskerPassword: string,
    taskerPhone: string,
    taskerCategory: string,
    hourlyRate: string,
    taskerPhoto: string,
) => {
  try {
    if (!taskerFirstName || !taskerLastName || !taskerEmail || !taskerPassword || !taskerPhone || !taskerCategory || !hourlyRate)
      throw new Error("missing data from tasker");
    return await API.createTasker({
        taskerFirstName,
        taskerLastName,
        taskerEmail,
        taskerPassword,
        taskerPhone,
        taskerCategory,
        hourlyRate,
        taskerPhoto,
    });
  } catch (error) {
    console.error("On taskerApi file.Error signing up:", error);
    throw error;
  }
};

export const taskerlogin = async (taskerEmail: string, taskerPassword: string) => {
    try {
      if (!taskerEmail || !taskerPassword) {
        throw new Error("Email and password are required");
      }
      return await API.logiInTasker(taskerEmail, taskerPassword);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  export const getTaskersByCategory = async (taskerCategory: string) => {
    try {
        return await API.bringTaskersByCategory(taskerCategory);
    } catch (error) {
        console.error("Error getting taskers:", error);
        throw error;
    }
}
