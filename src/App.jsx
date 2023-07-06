import { BrowserRouter } from "react-router-dom";
import RouterRoute from "./routes/RouterRoute";
import AuthContextProvider from "./context/AuthContext";
import CollectionContextProvider from "./context/CollectionContext";
function App() {
    return (
        <AuthContextProvider>
            <CollectionContextProvider>
                <BrowserRouter>
                    <div className="App">
                        <RouterRoute></RouterRoute>
                    </div>
                </BrowserRouter>
            </CollectionContextProvider>
        </AuthContextProvider>
    );
}

export default App;
