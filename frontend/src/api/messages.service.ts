import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { baseUrl } from "../constants/urls";



export default class MessagesService {
    private static messagesUrl: string = '/messages';

    public static getFriendMessages = ( friend: string ) => {
        const requestUrl = `${baseUrl}${MessagesService.messagesUrl}`;
        const urlWithParams = `${requestUrl}?friend=${friend}`;

        return ( resolveFn, rejectFn, finallyFn ) => ajax.getJSON(urlWithParams)
            .pipe(
                map(
                    ( data: any ) => data.messages
                )
            )
            .subscribe( resolveFn, rejectFn, finallyFn );
    }
}
