import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export default class MessagesService {
    private static messagesUrl: string = '/messages';

    public static getMessages = () => {
        const LIMIT = 10;

        return ajax.getJSON(`https://api.github.com/users?per_page=${LIMIT}`);
    }
}