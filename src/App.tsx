import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { AppState } from './models/state/AppState';
import { AppProps } from './models/props/AppProps';
import { Unsubscribe } from 'firebase';

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth!: Unsubscribe;

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/sign-in" component={SignInAndSignUp} />
                </Switch>
            </>
        );
    }
}

export default App;
