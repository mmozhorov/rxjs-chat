import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import {baseHeaders, baseUrl} from "../constants/urls";
import axios from "axios";



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


