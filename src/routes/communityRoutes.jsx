import CategoryCommunity from "../pages/Community/CategoryCommunity";
import CommunityHome from "../pages/Community/CommunityHome";
import Post from "../pages/Community/Post";

const communityRoutes = [
  {
    path: "/community",
    element: <CommunityHome />,
    children: [
      {
        path: ":category",
        element: <CategoryCommunity />,
      },
      {
        path: ":category/:postId",
        element: <Post />,
      },
    ],
  },
];

export default communityRoutes;
