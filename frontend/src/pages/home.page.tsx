import React from 'react';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import FriendsService from "../api/friends.service";

import { Chat } from "../components/Chat";
import { Friends } from "../components/Friends";

interface IHomePage{
    isLoading: boolean
}

export default class HomePage extends React.Component<any, IHomePage>{
    state = {
        isLoading: true
    };

    componentDidMount(): void {
        const userToken = localStorage.getItem('userToken') || '';
        const sub$ = FriendsService.getAllFriends(userToken);

        sub$.subscribe(
            ( data: any ) => {
                console.log(data)
            },
            console.error,
            () => sub$.unsubscribe()
        )
    }

    render(){
        const { isLoading } = this.state;
        //{/*<Redirect to="/login" />*/}
        return( { isLoading } ? <Loader type="Grid" color="#5a5e63" height={60} width={60}/>: null);
    }
};
