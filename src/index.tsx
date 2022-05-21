// Toast palaiko du tipus - success ir error(žalias rėmelis/raudonas rėmelis). Be nurodyti tipo elgiasi kaip success.Toast content’as gali būti bet koks React komponentasToast atsiranda vienas paskui kitą apatiniam dešiniam kampeToast užsidaro po 3sek. automatiškai arba galima uždaryti su mygtuku.

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ToastProvider from "./contexts/ToastContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
