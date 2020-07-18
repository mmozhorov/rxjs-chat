import axios from 'axios';
import { Observable } from 'rxjs';

import { baseUrl, baseHeaders } from "../constants/urls";

export default class FriendsService {
    private static friendsUrl: string = `${baseUrl}/friends`;

    public static getAllFriends = (userId: string) =>
        Observable.create( async ( observer ) => {
            const response = await axios.get(`${FriendsService.friendsUrl}?userId=${userId}`, {
                    headers: {
                        ...baseHeaders
                    }
                });
            observer.next( response );
            observer.complete();
        });
}


