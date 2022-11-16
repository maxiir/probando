import axios from 'axios'

export const data = async (values) => 
    await axios.post("http://localhost:4000/api/newpeople",values);
