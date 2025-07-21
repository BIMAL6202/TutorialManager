import { Routes, Route, Link } from "react-router-dom";
import TutorialsList from "./pages/TutorialsList";
import AddTutorial from "./pages/AddTutorial";
import Tutorial from "./pages/Tutorial";
import { BrowserRouter } from "react-router-dom";
 
function App() {
    return (
        <BrowserRouter>
            <div>
                {/* NAVBAR */}
                <nav className="bg-gray-400 p-4 text-black">
                    <div className="flex space-x-4">
                        <Link to="/tutorials" className="hover:text-gray-300 font-semibold">
                            TUTORIALS
                        </Link>
                        <Link to="/add" className="hover:text-gray-300 font-semibold">
                            ADD
                        </Link>
                    </div>
                </nav>
 
                {/* ROUTES */}
                <div className="container mx-auto mt-8 px-4">
                    <Routes>
                        <Route path="/" element={<TutorialsList />} />
                        <Route path="/tutorials" element={<TutorialsList />} />
                        <Route path="/add" element={<AddTutorial />} />
                        <Route path="/tutorials/:id" element={<Tutorial />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
 
export default App;