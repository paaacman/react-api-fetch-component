import React, {Component, createContext} from "react";
import {withFetch} from "./Hoc";
import 'abortcontroller-polyfill';

const AbortController = window.AbortController;

class Fetch extends Component {
    constructor(props) {
        super(props);

        this.fetch = this.fetch.bind(this);
        this.reset = this.reset.bind(this);
        this.fetchContext = createContext({});
        this.controller = new AbortController();

        this.state = {
            data: null,
            error: null,
            loading: !this.props.manual,
            fetched: false,
            fetchError: null,
            send: this.fetch,
            reset: this.reset,
        };
    }

    componentDidMount() {
        const {manual, body} = this.props;

        if (!manual) {
            this.fetch(body);
        }
    }

    componentWillUnmount() {
        this.controller.abort();
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            url,
            method,
            headers,
            referrer,
            mode,
            credentials,
            redirect,
            integrity,
            cache,
            manual,
            body
        } = this.props;

        if (prevProps.url !== url ||
            prevProps.method !== method ||
            prevProps.headers !== headers ||
            prevProps.referrer !== referrer ||
            prevProps.mode !== mode ||
            prevProps.credentials !== credentials ||
            prevProps.redirect !== redirect ||
            prevProps.integrity !== integrity ||
            prevProps.cache !== cache ||
            prevProps.manual !== manual
        ) {
            if (!manual) {
                this.fetch(body);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        const {
            url,
            method,
            headers,
            referrer,
            mode,
            credentials,
            redirect,
            integrity,
            cache,
            manual
        } = this.props;

        if (nextProps.url !== url ||
            nextProps.method !== method ||
            nextProps.headers !== headers ||
            nextProps.referrer !== referrer ||
            nextProps.mode !== mode ||
            nextProps.credentials !== credentials ||
            nextProps.redirect !== redirect ||
            nextProps.integrity !== integrity ||
            nextProps.cache !== cache ||
            nextProps.manual !== manual
        ) {
            this.setState({
                data: null,
                error: null,
                loading: !this.props.manual,
                fetched: false,
                fetchError: null,
            });
        }
    }

    render() {
        const FetchContext = this.fetchContext;

        return (
            <FetchContext.Provider value={this.state}>
                <FetchContext.Consumer>
                    {this.props.children}
                </FetchContext.Consumer>
            </FetchContext.Provider>
        );
    }

    async fetch(body, complementHeaders) {
        const {beforeRequest, onError, onSuccess} = this.props;

        if (!complementHeaders) {
            complementHeaders = {};
        }

        let url = this.props.baseUrl + this.props.url;
        const method = this.props.method;
        const headers = Object.assign({}, this.props.baseHeaders, this.props.headers, complementHeaders);
        const referrer = this.props.referrer;
        const mode = this.props.mode || this.props.baseMode;
        const credentials = this.props.credentials || this.props.baseCredentials;
        const redirect = this.props.redirect || this.props.baseRedirect;
        const integrity = this.props.integrity;
        const cache = this.props.cache || this.props.baseCache;

        let request = new Request(url, {
            method,
            headers,
            referrer,
            mode,
            credentials,
            redirect,
            integrity,
            cache,
            body,
            signal: this.controller.signal,
        });

        if (typeof beforeRequest === "function") {
            await beforeRequest(request);
        }

        return fetch(request)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }

                throw(response);
            })
            .then((data) => {
                if (typeof onSuccess === "function") {
                    onSuccess(data);
                } else {
                    this.setState({
                        data,
                        loading: false,
                        fetched: true,
                        error: null,
                    });
                }
            })
            .catch((error) => {
                if (typeof error.json === 'function') {
                    return error.json();
                }

                return new Promise((resolve) => resolve(error.toString()));
            })
            .catch((error) => {
                error = error.toString();

                if (error === 'SyntaxError: JSON Parse error: Unrecognized token \'<\'') {
                    return new Promise((resolve) => resolve(true));
                }

                return new Promise((resolve) => resolve(error));
            })
            .then((error) => {
                if (!error) {
                    this.setState({
                        error: null,
                        loading: false,
                        fetched: true,
                    });

                    return;
                }

                if (typeof onError === "function") {
                    let e = onError(error, this);
                    if (e && typeof e.then === "function") {
                        e.then((data) => {
                            if (!data) {
                                this.setState({
                                    data: null,
                                    error,
                                    loading: false,
                                    fetched: true
                                });
                            }
                        });
                    } else {
                        this.setState({
                            data: null,
                            error,
                            loading: false,
                            fetched: true
                        });
                    }
                } else {
                    this.setState({
                        data: null,
                        error,
                        loading: false,
                        fetched: true
                    });
                }
            });
    }

    reset() {
        this.setState({
            data: null,
            error: null,
            loading: !this.props.manual,
            fetched: false,
            fetchError: null,
        }, () => {
            if (!this.props.manual) {
                this.fetch(this.props.body);
            }
        });
    }
}

Fetch.defaultProps = {
    url: '/',
    method: 'GET',
    manual: false,
};

export default withFetch(Fetch);
