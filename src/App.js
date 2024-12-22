import './App.css';
import {BrowserRouter} from "react-router-dom";
import ManagerRoute from "./componants/ManagerRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <>
          <BrowserRouter>
              <ManagerRoute/>
          </BrowserRouter>
      </>
  );
}

export default App;
