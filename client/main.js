import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';


import { theme } from '/theme';

import store, { history } from './store/configureStore';
import { verifyToken } from './services/tokenService';
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');

// Used to log in if token is valid
store.dispatch(verifyToken());

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </Suspense>,
  mountNode
);
