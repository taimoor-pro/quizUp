// eslint-disable-next-line

import Router from "./router/index";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const noop = () => {};

  if (process.env.REACT_APP_BASE === "production") {
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router />
    </>
  );
}

export default App;
