import axios from 'axios';
export class ServiceRegister{
    async registerUser(data){
        let response = await axios.post('http://localhost:5000/api/register', data);
        return response;
    }
}