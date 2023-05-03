      // console.log("user", findUser.fname)
      import "./App.css";

// react-bootstrep ....!!
import "bootstrap/dist/css/bootstrap.min.css";

// react-router-dom ....!!
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./componets/Homepage";
import FormPage from "./componets/FormPage";
import TablePage from "./componets/TablePage";



function App() {
  return (
    <div className="App container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/form/" element={<FormPage />} />
            <Route path="/form/:id" element={<FormPage />} />
            <Route path="/table/" element={<TablePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
