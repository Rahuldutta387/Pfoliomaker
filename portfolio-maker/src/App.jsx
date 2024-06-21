import "./App.css";
import { Main } from "./components/Main";
import {  UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
        <div className="App">
        <Main/>
        </div>
    </UserProvider>
  );
}

export default App;
