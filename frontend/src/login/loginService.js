import axios from 'axios';

export class LoginService {
    async loginUser(data) {
        let response = await axios.post('http://localhost:5000/api/login', data);
        return response;
    }
}