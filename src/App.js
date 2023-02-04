import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TerminalPage from "./Pages/TerminalPage";
function App() {
  return (
    <BrowserRouter >
    <Routes >
    <Route path="/" element={<TerminalPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
