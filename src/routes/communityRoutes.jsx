import CategoryCommunity from "../pages/Community/CategoryCommunity";
import CommunityHome from "../pages/Community/CommunityHome";
import Post from "../pages/Community/Post";

const communityRoutes = [
  {
    path: "/community/:category",
    element: <CommunityHome />,
  },
  {
    path: "/community/:category/:mbti",
    element: <CategoryCommunity />,
  },
  {
    path: "/community/:category/:mbti/:postId",
    element: <Post />,
  },
];

export default communityRoutes;
