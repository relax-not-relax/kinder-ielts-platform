import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { SnackbarProvider } from "notistack";
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "a2621942-5d1d-4e45-94c4-db26eb7331c5",
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </Provider>
);
