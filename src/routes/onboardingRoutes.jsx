import InterestInfo from "../pages/onboarding/InterestInfo";
import MbtiInfo from "../pages/onboarding/MbtiInfo";
import Onboarding from "../pages/onboarding/Onboarding";
import PersonalInfo from "../pages/onboarding/PersonalInfo";
import TermsAgreement from "../pages/onboarding/TermsAgreement";

const onboardingRoutes = [
  {
    path: "/onboarding",
    element: <Onboarding />,
    children: [
      { path: "personal-info", element: <PersonalInfo /> },
      { path: "mbti-info", element: <MbtiInfo /> },
      { path: "interest-info", element: <InterestInfo /> },
      { path: "terms-agreement", element: <TermsAgreement /> },
    ],
  },
];

export default onboardingRoutes;
