import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts/Posts";
import Main from "../layout/Main";
import SinglePost from "../Pages/Posts/SinglePost";
import Login from "../Pages/Login/Login";
import AddPost from "../Pages/AddPost/AddPost";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'posts',
                element: <Posts />
                
            },
            {
                path: '/posts/:id',
                element: <SinglePost />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/add-post',
                element: <AddPost />
            }
        ]
    }
])

export default router;