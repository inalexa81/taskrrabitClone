import API from "./ApiSingelton";


export const getCategories = async () => {
    try {
        return await API.getCategory();
    } catch (error) {
        console.error("Error getting categories:", error);
        throw error;
    }
}

export const getActions = async () => {
    try {
        const responce = await API.getAction();
        return responce.data;
    } catch (error) {
        console.error("Error getting actions:", error);
        throw error;
    }
}