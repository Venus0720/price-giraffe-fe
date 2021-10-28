import axios from 'axios'


const registerMailList = async (email) => {
    const response = await axios.post('https:/pricegiraffe.co/api/v1/mailist', email)
    console.log(response, "res")
    return response
}

const mailService = {
    registerMailList
}
export default mailService 