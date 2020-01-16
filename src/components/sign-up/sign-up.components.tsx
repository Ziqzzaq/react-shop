import React, { ChangeEvent, FormEvent } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {
    auth,
    createUserProfileDocument
} from '../../helpers/firebase/firebase.helper';
import { SignUpProps, SignUpState } from './sign-up.types';

class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const { displayName, email, confirmPassword, password } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (e) {
            console.log(e);
        }
    };

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, confirmPassword, password } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        id="displayName"
                        name="displayName"
                        handleChange={this.handleChange}
                        type="text"
                        value={displayName}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        id="email"
                        name="email"
                        handleChange={this.handleChange}
                        type="email"
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        id="sign-up-password"
                        name="password"
                        handleChange={this.handleChange}
                        type="password"
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        id="confirm-password"
                        name="confirmPassword"
                        handleChange={this.handleChange}
                        type="password"
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                    <Button type="submit">Sign up</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;
