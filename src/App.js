import './App.css';
import {BrowserRouter} from "react-router-dom";
import ManagerRoute from "./componants/ManagerRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

const backgroundStyle = {
    backgroundImage: "url('/image/img.png')",
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
