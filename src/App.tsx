import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './helpers/firebase/firebase.helper';
import { AppState } from './app.types';
import { Unsubscribe } from 'firebase';
import { DocumentFirebaseRef } from './types/CustomFirebaseTypes';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { User } from './redux/user/user.types';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

type AppProps = AppStateToPropsType & typeof mapDispatchToProps;

interface AppStateToPropsType {
    currentUser: User | null;
}

const App: React.FC<AppProps> = ({ setCurrentUser, currentUser }) => {
    useEffect(() => {
        let unsubscribeFromAuth!: Unsubscribe;
        unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef: DocumentFirebaseRef = await createUserProfileDocument(
                    user
                );
                userRef?.onSnapshot((snapShot) => {
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
    }, [setCurrentUser]);

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                {currentUser ? (
                    <Route
                        exact
                        path="/sign-in"
                        render={() => <Redirect to="/" />}
                    />
                ) : (
                    <Route exact path="/sign-in" component={SignInAndSignUpPage} />
                )}
            </Switch>
        </>
    );
};

const mapStateToProps = createStructuredSelector<AppState, AppStateToPropsType>({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = {
    setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
