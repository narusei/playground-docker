import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import logo from "./logo.svg";
import "./App.css";

if (window.location.origin === "http://localhost:3000") {
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
} else {
  axios.defaults.baseURL = window.location.origin;
}
const csrfToken = Cookies.get("csrftoken");
const http = axios.create({
  headers: {
    "content-type": "application/json;charset=utf-8",
    "x-csrftoken": csrfToken,
  },
  withCredentials: true,
});

function App() {
  const [response, setResponse] = React.useState();

  React.useEffect(() => {
    (async function () {
      const res = await http.get("/api/entries");
      console.log(response);
      setResponse(res.data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
