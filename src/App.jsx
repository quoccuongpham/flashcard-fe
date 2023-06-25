import { BrowserRouter } from "react-router-dom";
import RouterRoute from "./routes/RouterRoute";
import AuthContextProvider from "./context/AuthContext";
function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <div className="App">
                    <RouterRoute></RouterRoute>
                </div>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
