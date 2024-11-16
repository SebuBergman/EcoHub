import HomePage from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../AppRoutes";
import EnvIssuesPage from "@/pages/learn/envIssues";
import SustainableLiving from "@/pages/learn/sustainableLiving";
import DashboardPage from "@/pages/user/account/dashboard";
import NotFoundPage from "@/pages/not-found";


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
      {/*
      <Route element={<AuthLayout />}>
        <Route path={AppRoutes.signUp} element={<SignUpPage />} />
        <Route path={AppRoutes.login} element={<LoginPage />} />
      </Route>*/}
      {/* Account Pages */}
      {/*<Route
        element={
          <ProtectedRoute>
            <AccountLayout />
          </ProtectedRoute>
        }
      >*/}
      <Route path={AppRoutes.dashboard} element={<DashboardPage />} />
      {/*</Route>*/}
      {/* Not Found Page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}