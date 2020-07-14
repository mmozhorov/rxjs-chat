import axios from 'axios';
import { Observable } from 'rxjs';

import { baseUrl, baseHeaders } from "../constants/urls";

export default class UserService {
    private static userUrl: string = `${baseUrl}/user`;

    public static async login( token: string ){
        const loginUrl = `${UserService.userUrl}/login`;

        const response = await axios.get(loginUrl, {
            headers: {
                ...baseHeaders
            }
        });

        console.log(response);
    }
}
