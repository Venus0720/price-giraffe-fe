import axios from 'axios'


const registerMailList = async (email) => {
    const response = await axios.post('https:/pricegiraffe.co/api/v1/mailist', email)
    return response.data
}

const mailService = {
    registerMailList
}
export default mailService 