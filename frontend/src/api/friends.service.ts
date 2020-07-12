import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { baseUrl } from "../constants/urls";



export default class FriendsService {
    private static friendsUrl: string = '/friends';

    public static getAllFriends = () => {
        const requestUrl = `${baseUrl}${FriendsService.friendsUrl}`;

        return ( resolveFn, rejectFn, finallyFn ) => ajax.getJSON(requestUrl)
            .pipe(
                map( (data: any ) => data.friends )
            )
            .subscribe( resolveFn, rejectFn, finallyFn );
    }
}
