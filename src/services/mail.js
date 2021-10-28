import axios from 'axios'


const registerMailList = async (email) => {
    const response = await axios.post('/api/v1/mail_list', email)
    console.log(response)
    console.log(response.data)
    return response.data
}

const mailService = {
    registerMailList
}
export default mailService 