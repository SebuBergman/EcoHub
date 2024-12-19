import { Route, Routes } from "react-router-dom";

import AccountLayout from "@/features/ui/layout/accountLayout/AccountLayout";
import HomePage from "@/pages/home";
import UserDashboardPage from "@/pages/user/userDashboard.tsx";
import NotFoundPage from "@/pages/not-found";
import EnvIssuesPage from "@/pages/learn/envIssues";
import SustainableLiving from "@/pages/learn/sustainableLiving";
import AuthLayout from "@/features/ui/layout/AuthLayout";
import SignUpPage from "@/pages/register";
import LoginPage from "@/pages/login";

import { AppRoutes } from "../AppRoutes";
import ProtectedRoute from "./ProtectedRoute";
import SettingsPage from "@/pages/user/settings";
import UserEcoStory from "@/features/userData/userEcoStory/ecoStory";


export default function AppRouter() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path={AppRoutes.home} element={<HomePage />} />
      <Route path={AppRoutes.envIssues} element={<EnvIssuesPage />} />
      <Route
        path={AppRoutes.sustainableLiving}
        element={<SustainableLiving />}
      />
      <Route element={<AuthLayout />}>
        <Route path={AppRoutes.signUp} element={<SignUpPage />} />
        <Route path={AppRoutes.login} element={<LoginPage />} />
      </Route>
      {/* Account Pages */}
      <Route
        element={
          <ProtectedRoute>
            <AccountLayout />
          </ProtectedRoute>
        }
      >
        <Route path={AppRoutes.dashboard} element={<UserDashboardPage />} />
        <Route path={AppRoutes.ecoStory} element={<UserEcoStory />} />
        <Route path={AppRoutes.settings} element={<SettingsPage />} />
      </Route>
      {/* Not Found Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
