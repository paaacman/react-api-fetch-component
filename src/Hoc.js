import React, {Component, createContext} from "react";

const FetchProviderContext = createContext({});

export default class FetchProvider extends Component {
    constructor(props) {
        super(props);

        const {
            baseUrl,
            baseHeaders,
            baseMode,
            baseCredentials,
            baseRedirect,
            baseCache,
            beforeRequest,
            onError
        } = this.props;

        this.state = {
            baseUrl,
            baseHeaders,
            baseMode,
            baseCredentials,
            baseRedirect,
            baseCache,
            beforeRequest,
            onError
        };
    }

    render() {
        return (
            <FetchProviderContext.Provider value={this.state}>
                {this.props.children}
            </FetchProviderContext.Provider>
        );
    }
}

FetchProvider.defaultProps = {
    baseUrl: '',
    baseHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, application/ld+json',
    },
    baseMode: 'cors',
    baseCredentials: "same-origin",
    baseRedirect: 'follow',
    baseCache: 'default',
    beforeRequest: null,
    onError: null,
};

export const withFetch = Component => props => (
    <FetchProviderContext.Consumer>
        {store => <Component {...props} {...store} />}
    </FetchProviderContext.Consumer>
);
