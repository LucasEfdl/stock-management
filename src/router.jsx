import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../src/pages/layouts/RootLayout"
import ItemLayout from "../src/pages/layouts/ItemLayout"

import Home from "../src/pages/Home"
import ListItems from "../src/pages/ListItems"
import CreateItem from "../src/pages/CreateItem"
import ShowItem from "../src/pages/ShowItem"
import UpdateItem from "../src/pages/UpdateItem"

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <RootLayout />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "items",
                    element: <ItemLayout />,
                    children: [
                        { index: true, element: <ListItems /> },
                        { path: "new", element: <CreateItem /> },
                        { path: ":id", element: <ShowItem /> },
                        { path: ":id/update", element: <UpdateItem /> }
                    ]
                }
            ]
        }
    ])