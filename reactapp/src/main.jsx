import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import Login from './pages/Login/login';
import Articles from './pages/Articles/articles';
import Register from './pages/Register/register';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import Header from './Header'; // Import your Header component
import Footer from './Footer'; // Import your Header component
import { persistor, store } from './Pages/Articles/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

/**
 * The main component of the app. It is the one defining the `CookieProvider` and the `Router`.
 * The ´CookieProvider´ provides a centralised way of checking the cookies of the browser from any part of the app using the hook `useCookie()`
 * The `Router` component provides a list of routes and defines which component must render on each route.
 * E.g:
 *    ```
 *         <Routes>
 *           <Route path="/login" element={<Login />} />
 *           <Route path="/register" element={<Register />} />
 *           <Route
 *             path="/articles"
 *             element={<PrivateRoute path="/articles"> <Articles /> </PrivateRoute>}
 *             />
 *         </Routes>
 *     ```
 *    When the user visit the page `HOST_ADDRESS:PORT/login` it will render the `Login` component.
 *    The `PrivateRoute`component is a custom component defined in ./components/PrivateRoute.jsx 
 *    used to verify that the session cookie exists before rendering the `Articles` component.
 * 
 * @returns {Component}
 */
const App = () => {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={ persistor }>
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

                        <Footer /> 
                    </div>
                  
                    </Router>
                </PersistGate>
            </Provider>
        </CookiesProvider>
    );
};

// This is the entry point of the app. It creates the root of your application and it renders the React component `App` inside an HTML element identified with the id `root`.
createRoot(document.getElementById('root')).render(<App />)