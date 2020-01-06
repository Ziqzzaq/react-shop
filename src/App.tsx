import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './helpers/firebase/firebase.helper';
import { User } from './models/state/AppState';
import { AppProps } from './models/props/AppProps';
import { Unsubscribe } from 'firebase';
import { DocumentFirebaseRef } from './types/CustomFirebaseTypes';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { Dispatch } from 'redux';
import { UserActionsTypes } from './redux/user/userActions.types';

const App = ({ setCurrentUser }: AppProps<typeof mapDispatchToProps>) => {
    useEffect(() => {
        let unsubscribeFromAuth!: Unsubscribe;
        unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef: DocumentFirebaseRef = await createUserProfileDocument(
                    user
                );

                userRef?.onSnapshot((snapShot) => {
                    console.log(snapShot);
                    setCurrentUser({
                        id: snapShot.id,
                        createAt: snapShot.data()?.createAt.toDate(),
                        email: snapShot.data()?.email,
                        displayName: snapShot.data()?.displayName
                    });
                });
            } else {
                setCurrentUser(null);
            }
        });
        return () => {
            unsubscribeFromAuth();
        };
    });

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/sign-in" component={SignInAndSignUp} />
            </Switch>
        </>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionsTypes>) => ({
    setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
