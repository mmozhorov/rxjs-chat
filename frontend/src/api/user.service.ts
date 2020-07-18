import axios from 'axios';
import { Observable } from 'rxjs';

import { baseUrl, baseHeaders } from "../constants/urls";

export default class UserService {
    private static userUrl: string = `${baseUrl}/user`;

    public static login( username: string, password: string ){
        const loginUrl = `${UserService.userUrl}/login`;

        return Observable.create( async observer => {
            try{
                const response = await axios.post(loginUrl,{ username, password }, {
                    headers: {
                        ...baseHeaders
                    }
                });

                observer.next(response);
                observer.complete();
            }
            catch (error) {
                observer.error(error);
            }
        });
    }
}
