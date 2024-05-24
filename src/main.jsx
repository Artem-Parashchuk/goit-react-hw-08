import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store.js";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppBar from "./AppBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppBar />
    </PersistGate>
    </Provider>
  </BrowserRouter>
);
