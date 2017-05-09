import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { AppContainer } from "react-hot-loader";

import Routes from "./routes";
import store from "./store";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
    </AppContainer>,

    document.getElementById("root")
  );
};

render();

// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept("./components/App", () => {
//     render();
//   });
// }