import axios from 'axios';
import { Observable } from 'rxjs';

import { baseUrl } from "../constants/urls";

export default class UserService {
    public static async login( token: string ){
        const loginUrl = `${baseUrl}/login`;

        const response = await axios.get(loginUrl, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log(response);
    }
}
