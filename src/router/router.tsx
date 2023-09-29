import { createBrowserRouter } from "react-router-dom";
import { InstagramLogin } from "../pages/Instagram-login";
import { RedirectInstagram } from "../pages/redirect-instagram";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/instagram-login",
        element: InstagramLogin(),
    },
    {
        path: "/redirect-instagram",
        element: RedirectInstagram(),
    },
]); 