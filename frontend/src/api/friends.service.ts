import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { baseUrl } from "../constants/urls";



export default class FriendsService {
    private static messagesUrl: string = '/friends';

    public static getAllFriends = ( resolveFn, rejectFn, finallyFn ) => ajax.getJSON(`${baseUrl}${FriendsService.messagesUrl}`)
        .pipe(
            map( (data: any ) => data.friends )
        )
        .subscribe( resolveFn, rejectFn, finallyFn );
}
