import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout.jsx';

import Forum from './pages/Forum.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/forum' element={<Forum />} />
                    <Route path='/login' element={<Login />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
