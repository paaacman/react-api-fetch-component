import React, {Component, createContext} from "react";

const UserProviderContext = createContext({});

export function getToken() {
    return localStorage.getItem('token');
}

export function getRefreshToken() {
    return localStorage.getItem('refresh_token');
}

export function login(token, refresh_token, history, reload) {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refresh_token);

    if (history)
        history.push('/dashboard');

    if (reload)
        window.location.reload();
}

export function logout(history) {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');

    if (history)
        history.push('/');

    window.location.reload();
}

export class UserProvider extends Component {
    constructor(props) {
        super(props);

        const {user} = this.props;

        this.state = {
            user,
        };
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.user !== this.state.user || nextProps.user.id !== this.state.user.id) {
            this.setState({user: nextProps.user});
        }
    }

    render() {
        return (
            <UserProviderContext.Provider value={this.state}>
                {this.props.children}
            </UserProviderContext.Provider>
        );
    }
}

UserProvider.defaultProps = {
    user: {}
};

export const withUser = Component => props => (
    <UserProviderContext.Consumer>
        {store => <Component {...props} {...store} />}
    </UserProviderContext.Consumer>
);
