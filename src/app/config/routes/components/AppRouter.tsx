import { Route, Routes } from "react-router-dom";

import AccountLayout from "@features/ui/layout/accountLayout/AccountLayout";
import NotFoundPage from "@pages/not-found";
import AuthLayout from "@features/ui/layout/AuthLayout";
import SignUpPage from "@pages/register";
import LoginPage from "@pages/login";
import NotYetFinished from "@pages/not-implemented";

import { AppRoutes } from "../AppRoutes";
import ProtectedRoute from "./ProtectedRoute";
import PressAndMedia from "@pages/about/pressAndMedia";
import MissionAndTeam from "@pages/about/missionAndteam";
import DiscussionForum from "@pages/interact/discussionForum";
import UserStories from "@pages/engage/userStories";
import SubmitUserStories from "@pages/engage/userStorySubmission";
import UserDashboardPage from "@pages/user/userDashboard";
import LandingPage from "@pages/home";
import EnvIssuesPage from "@pages/learn/envIssues";
import SustainableLiving from "@pages/learn/sustainableLiving";
import SettingsPage from "@pages/user/settings";
import PostDetail from "@features/forum/PostDetail";

export default function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path={AppRoutes.home} element={<LandingPage />} />
      {/* Learn Pages */}
      <Route path={AppRoutes.envIssues} element={<EnvIssuesPage />} />
      <Route
        path={AppRoutes.sustainableLiving}
        element={<SustainableLiving />}
      />
      {/* Interact Pages */}
      <Route path={AppRoutes.forum} element={<DiscussionForum />} />
      <Route path={AppRoutes.forumPost} element={<PostDetail />} />
      {/* Engage Pages */}
      <Route path={AppRoutes.userStories} element={<UserStories />} />
      <Route path={AppRoutes.submitUserStory} element={<SubmitUserStories />} />
      {/* About Pages */}
      <Route path={AppRoutes.missionTeam} element={<MissionAndTeam />} />
      <Route path={AppRoutes.pressAndMedia} element={<PressAndMedia />} />

      <Route element={<AuthLayout />}>
        <Route path={AppRoutes.signUp} element={<SignUpPage />} />
        <Route path={AppRoutes.login} element={<LoginPage />} />
      </Route>
      {/* User account Pages */}
      <Route
        element={
          <ProtectedRoute>
            <AccountLayout />
          </ProtectedRoute>
        }
      >
        <Route path={AppRoutes.dashboard} element={<UserDashboardPage />} />
        <Route path={AppRoutes.settings} element={<SettingsPage />} />
      </Route>
      {/* Not Found Page */}
      <Route path="*" element={<NotFoundPage />} />
      {/* Not implemented yet */}
      <Route path={AppRoutes.notImplemented} element={<NotYetFinished />} />
    </Routes>
  );
}
