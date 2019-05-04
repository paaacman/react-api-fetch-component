import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Home from "./Page/Home/Home";
import Login from "./Page/Home/LoginModal";
import 'typeface-roboto';
import CssBaseline from "@material-ui/core/es/CssBaseline";
import {getRefreshToken, getToken, login, logout, UserProvider} from "./User/Hoc";
import {Fetch, FetchProvider} from "react-api-fetch-component";
import NotFound from "./Page/Error/NotFound";

ReactDOM.render(
    <FetchProvider
        baseUrl={process.env.REACT_APP_API_BASE_URL}
        baseMode={"cors"}
        beforeRequest={(request) => {
            let token = getToken();
            if (token) {
                request.headers.set('Authorization', 'Bearer ' + token);
            }
        }}
        onError={(error, request) => {
            let refresh_token = getRefreshToken();
            if (!error || !error.code || error.code !== 401 || error.message !== 'Expired JWT Token' || !refresh_token || !getToken()) {
                return false;
            }

            // Try to fetch a new token
            let url = request.props.baseUrl + '/users/refresh';
            let method = 'POST';
            let headers = Object.assign({}, request.props.baseHeaders);

            let refreshRequest = new Request(url, {
                method,
                headers,
                body: JSON.stringify({refresh_token: refresh_token}),
            });

            return fetch(refreshRequest)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }

                    throw(response);
                })
                .then((data) => {
                    login(data.token, data.refresh_token);

                    console.log('REFETCH ONERROR !');
                    request.fetch(request.body);

                    return true;
                })
                .catch(() => {
                    logout();

                    return false;
                });
            }
        }
    >
        <Fetch url={'/users/me'} method={'GET'}>
            {({data, loading}) => {
                if (loading) return <div>LOADING</div>

                return (
                    <UserProvider user={data || {}}>
                        <CssBaseline/>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/login" component={Login}/>
                                {data && data.id && <Route path="/dashboard" component={Dashboard}/>}
                                <Route component={NotFound} />
                            </Switch>
                        </Router>
                    </UserProvider>
                );
            }}
        </Fetch>
    </FetchProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
