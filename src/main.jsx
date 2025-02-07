import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <SnackbarProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SnackbarProvider>
  </Provider>
);
