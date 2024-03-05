import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import Users from './pages/User.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './ui/Navbar.jsx';
import Post from './pages/Post.jsx';
// import {useNavigate} from 'react-router-dom';

function App() {
    // const navigate = useNavigate();
    // function goBack() {
    //     navigate(-1);
    // }
    return (
        <>
            <h1>React Router</h1>
            {/* <button onClick={goBack}>Back</button> */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='posts' element={<Posts />} />
                <Route path='posts/:postId' element={<Post />} />

                {/* <Route path='users'>
                    <Route index element={<Users />} />
                    <Route path='me' element={<Dashboard />} />
                    <Route path=':userId' element={<Users />} /> */}
                {/* </Route> */}
                <Route path='users' element={<Users />}>
                    <Route path='me' element={<Dashboard />} />
                    <Route path=':userId' element={<Users />} />
                </Route>
                <Route path=':id/users/me' element={<div>Hello</div>} />
                <Route path='*' element={<div>Not Found</div>} />
            </Routes>
        </>
    );
}

export default App;
