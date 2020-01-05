import React, { ChangeEvent, FormEvent } from 'react';
import { SignInProps } from '../../models/props/SignInProps';
import { SignInState } from '../../models/state/SignInState';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import Button from '../button/button.component';
import { signInWithGoogle } from '../../helpers/firebase/firebase.helper';

class SignIn extends React.Component<SignInProps, SignInState> {
    constructor(props: SignInProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    };

    handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id="name"
                        label="Email"
                        type="email"
                        name="email"
                        handleChange={this.handleChanges}
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        id="sign-in-password"
                        label="Password"
                        type="password"
                        name="password"
                        handleChange={this.handleChanges}
                        value={this.state.password}
                        required
                    />

                    <div className="buttons">
                        <Button type="submit">Sign in</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
