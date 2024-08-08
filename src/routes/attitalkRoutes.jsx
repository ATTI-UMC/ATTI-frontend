import Attitalk from "../pages/attitalk/Attitalk";
import Newchat from "../pages/attitalk/Newchat";
import Search from "../pages/attitalk/Search";

const attitalkRoutes = [
  {
    path: "/attitalk",
    element: <Attitalk />,
    children: [
      // { path: "chatting", element: },
      { path: "search", element: <Search /> },
      { path: "new-chat", element: <Newchat /> },
    ],
  },
];

export default attitalkRoutes;
