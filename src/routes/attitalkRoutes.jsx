import Atti from "../pages/attitalk/Atti";
import Attitalk from "../pages/attitalk/Attitalk";
import Newchat from "../pages/attitalk/Newchat";
import Search from "../pages/attitalk/Search";

/*
path : /attitalk 
elemnt : <Attitalk /> 
인 route 추가 해야되는데 export 여기다 할지 ?? 
*/

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
