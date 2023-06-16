import { BrowserRouter } from "react-router-dom";
import RouterRoute from "./routes/RouterRoute";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <RouterRoute></RouterRoute>
            </div>
        </BrowserRouter>
    );
}

export default App;
