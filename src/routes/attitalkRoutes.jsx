import Atti from "../pages/attitalk/Atti";
import Attitalk from "../pages/attitalk/Attitalk";
import Newchat from "../pages/attitalk/Newchat";
import Search from "../pages/attitalk/Search";

const attitalkRoutes = [
  {
    path: "/atti",
    element: <Atti />,
    children: [
      // { path: "chatting", element: },
      { path: "search", element: <Search /> },
      { path: "new-chat", element: <Newchat /> },
    ],
  },
];

export default attitalkRoutes;

const attiRoute = [
  {
    path: "/attitalk",
    element: <Attitalk />,
  },
];

export { attiRoute };
