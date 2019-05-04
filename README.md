# react-api-fetch-component

A react component to fetch data from your favorite API.

## Installation

`npm i --save react-api-fetch-component`

## Usage

*Don't forget to see the `example` folder, who contain a complete example of this component, with user registration / login / logout example.*  
  
First, include the provider at the root of your app:  
  
```
    import {FetchProvider} from "react-api-fetch-component";
    
    <FetchProvider
        baseUrl={'https://example.fr/api'}
        baseMode={"cors"}
        beforeRequest={(request) => {
            // Set the user auth token before each request for example
        }}
        onError={(error, request) => {
            // Common onError, call everytime an error append. Usefull for the refresh token.
        }
    >
        {...children}
    </FetchProvider>
```

Now, you can use the Fetch component where you want for making request:  

```
    import {Fetch} from "react-api-fetch-component";
    
    <Fetch url={'/api/endpoint'} method={'GET'}>
        {({loading, error, data}) => {
            return (
                <div>{data.id}</div>
            );
        }}
    </Fetch>
```

You can see more example in the corresponding folder.

This project is open to contributions :)
