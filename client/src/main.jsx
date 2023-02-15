import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Auth0Provider} from '@auth0/auth0-react'
import { getConfig } from './config'
import { BrowserRouter } from 'react-router-dom'


// const onRedirectCallback = (appState) => {
//     history.push(
//       appState && appState.returnTo ? appState.returnTo : window.location.pathname
//     );
//   };
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId:config.clientId,
  authorizationParams:{
    redirect_uri: window.location.origin,
    // ...(config.audience ? {audience:config.audience}:null)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Auth0Provider {...providerConfig}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
)
