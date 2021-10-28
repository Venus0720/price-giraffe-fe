import axios from 'axios'


const registerMailList = async (email) => {
    const response = await axios.post('/api/v1/mail_list', email)
    return response.data
}

const mailService = {
    registerMailList
}
export default mailService 