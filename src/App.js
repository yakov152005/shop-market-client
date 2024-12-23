import './App.css';
import {BrowserRouter} from "react-router-dom";
import ManagerRoute from "./componants/ManagerRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import {IMG_PATH} from "./constants/Constant";

const backgroundStyle = {
    backgroundImage: IMG_PATH,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    minHeight: "100vh",
};



function App() {
  return (
      <div style={backgroundStyle}>
          <BrowserRouter>
              <ManagerRoute/>
          </BrowserRouter>
      </div>
  );
}

export default App;
