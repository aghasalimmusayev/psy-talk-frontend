import axiosInstance from "./instance";

async function getUserData() {
    try {
        const res = await axiosInstance.get('/users/all')
        return res.data
    } catch (err) {
        console.warn('Get Users-de xeta: ', err)
    }
}

export { getUserData }