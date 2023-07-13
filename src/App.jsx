import { BrowserRouter } from "react-router-dom";
import RouterRoute from "./routes/RouterRoute";
import AuthContextProvider from "./context/AuthContext";
import CollectionContextProvider from "./context/CollectionContext";
import FlashcardContextProvider from "./context/FlashcardContext";
function App() {
    return (
        <AuthContextProvider>
            <CollectionContextProvider>
                <FlashcardContextProvider>
                    <BrowserRouter>
                        <div className="App">
                            <RouterRoute></RouterRoute>
                        </div>
                    </BrowserRouter>
                </FlashcardContextProvider>
            </CollectionContextProvider>
        </AuthContextProvider>
    );
}

export default App;
