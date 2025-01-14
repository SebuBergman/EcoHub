import HomeIcon from "@mui/icons-material/Home";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import SettingsIcon from "@mui/icons-material/Settings";
import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";


import { AppRoutes } from "@config/routes/AppRoutes";

interface AccountLinks {
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  text: string;
  path: string;
}

export const ACCOUNT_LINKS: AccountLinks[] = [
  {
    Icon: HomeIcon,
    text: "Home",
    path: AppRoutes.dashboard,
  },
  {
    Icon: EnergySavingsLeafIcon,
    text: "My Eco Story",
    path: AppRoutes.ecoStory,
  },
  {
    Icon: SettingsIcon,
    text: "Settings",
    path: AppRoutes.settings,
  },
];
