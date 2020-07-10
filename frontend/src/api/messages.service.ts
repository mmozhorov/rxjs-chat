import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { baseUrl } from "../constants/urls";

export default class MessagesService {
    private static messagesUrl: string = '/messages';

    public static getMessages = ( callback ) => ajax.getJSON(`${baseUrl}${MessagesService.messagesUrl}`).subscribe( callback );
}