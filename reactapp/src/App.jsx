import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Login from './Pages/Login/login';
import Articles from './Pages/Articles/articles';
import Register from './Pages/Register/register';
import PrivateRoute from './Components/PrivateRoute';


const App = () => {
    return (
        <CookiesProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/articles"
                            element={<PrivateRoute path="/articles"> <Articles /> </PrivateRoute>}
                        />
                        <Route path="/*" element={<Login />} />
                    </Routes>
                </div>
            </Router>
        </CookiesProvider>
    )
};
export default App;