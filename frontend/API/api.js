import axios from 'axios'

export const addData = async (values) => 
    await axios.post("http://localhost:4000/api/newpeople",values);

export const getData = async (id) =>
    await axios.get(`http://localhost:4000/api/getpeople/${id}`);
