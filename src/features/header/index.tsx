import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

import { useBreakpoints } from "@app/hooks/useBreakpoints";
import { IconButton, Stack } from "@mui/material";
import { AppRoutes } from "@app/config/routes/AppRoutes.js";
import { logout } from "@services/api";

import AppLogo from "../ui/Icons/Logo";
import MenuIcon from "@mui/icons-material/Menu";

import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import RecyclingOutlinedIcon from "@mui/icons-material/RecyclingOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import Co2OutlinedIcon from "@mui/icons-material/Co2Outlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";

import "./style.scss";
import { useAppSelector } from "@app/store";
import { selectAuth, selectUser } from "../auth/store/authSlice";

export default function Header() {
  const { sm } = useBreakpoints();

  const auth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);

  const userInitial = user?.displayName?.split(" ")[0][0];
  const userCredentials = useAppSelector((state) => state.auth.user?.email); // Fetch user ID

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const onLogout = () => {
    logout();
  };

  return (
    <Navbar maxWidth="full">
      {sm ? (
        <>
          <NavbarBrand>
            <Link href={AppRoutes.home} aria-current="page" color="foreground">
              <AppLogo />
            </Link>
          </NavbarBrand>
          <NavbarContent className="gap-4" justify="center">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1rem" }}
                  >
                    Learn
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Learn Pages..."
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="environmental_issues"
                  description="Explore key environmental challenges like climate change, pollution, and deforestation."
                  startContent={<ForestOutlinedIcon />}
                  href={AppRoutes.envIssues}
                >
                  <Link
                    href={AppRoutes.envIssues}
                    aria-current="page"
                    color="foreground"
                  >
                    Environmental Issues
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="sustainable_living_tips"
                  description="Discover practical tips to adopt a more eco-friendly and sustainable lifestyle."
                  startContent={<RecyclingOutlinedIcon />}
                  href={AppRoutes.sustainableLiving}
                >
                  <Link
                    href={AppRoutes.sustainableLiving}
                    aria-current="page"
                    color="foreground"
                  >
                    Sustainable Living Tips
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="green_innovations"
                  description="Learn about innovative technologies and solutions driving sustainability forward."
                  startContent={<VolunteerActivismOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Green Innovations
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1rem" }}
                  >
                    Watch
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Watch and Learn"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="videos"
                  description="Watch engaging videos on environmental topics and success stories."
                  startContent={<VideocamOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Videos
                </DropdownItem>
                <DropdownItem
                  key="success_stories"
                  description="Get inspired by real-life stories of individuals and organizations making a difference."
                  startContent={<AutoStoriesOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Success Stories
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1rem" }}
                  >
                    Interact
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Interact with Others"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="quizzes_and_challenges"
                  description="Test your knowledge with quizzes and take on exciting sustainability challenges."
                  startContent={<QuizOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Quizzes & Challenges
                </DropdownItem>
                <DropdownItem
                  key="discussion_forum"
                  description="Join discussions and connect with like-minded individuals in our forum."
                  startContent={<ForumOutlinedIcon />}
                  href={AppRoutes.forum}
                >
                  <Link
                    href={AppRoutes.forum}
                    aria-current="page"
                    color="foreground"
                  >
                    Discussion Forum
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1rem" }}
                  >
                    Resources
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Resources"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="downloads_and_library"
                  description="Access a library of eco-friendly guides, research, and tools."
                  startContent={<FileDownloadOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Downloads & Library
                </DropdownItem>
                <DropdownItem
                  key="environmental_impact_assessment"
                  description="Calculate and assess your environmental impact with our tools."
                  startContent={<Co2OutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Environmental Impact Assessment
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1rem" }}
                  >
                    Engage
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Engage with the platform"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="user_stories"
                  description="Explore stories shared by users about their journey toward sustainability."
                  startContent={<PersonSearchOutlinedIcon />}
                  href={AppRoutes.userStories}
                >
                  User Stories
                </DropdownItem>
                <DropdownItem
                  key="submit_your_story"
                  description="Share your own sustainability journey and inspire others."
                  startContent={<HistoryEduOutlinedIcon />}
                  href={AppRoutes.submitUserStory}
                >
                  Submit Your Story
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1rem" }}
                  >
                    About
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="About us"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="mission_and_team"
                  description="Learn about our mission, vision, and the team behind EcoHub."
                  startContent={<GroupsOutlinedIcon />}
                  href={AppRoutes.missionTeam}
                >
                  <Link
                    href={AppRoutes.missionTeam}
                    aria-current="page"
                    color="foreground"
                  >
                    Mission & Team
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="news_and_updates"
                  description="Stay updated with the latest news and announcements from EcoHub."
                  startContent={<FeedOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  News & Updates
                </DropdownItem>
                <DropdownItem
                  key="press_and_media"
                  description="Contact us for media inquiries or explore our press materials."
                  startContent={<ContactMailOutlinedIcon />}
                  href={AppRoutes.pressAndMedia}
                >
                  <Link
                    href={AppRoutes.pressAndMedia}
                    aria-current="page"
                    color="foreground"
                  >
                    Press & Media
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          {auth.user ? (
            <NavbarContent justify="end">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name={userInitial}
                    size="sm"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as:</p>
                    <p className="font-semibold">{userCredentials}</p>
                  </DropdownItem>
                  <DropdownItem key="settings" href={AppRoutes.dashboard}>
                    Dashboard
                  </DropdownItem>
                  <DropdownItem key="settings" href={AppRoutes.settings}>
                    Settings
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger" onClick={onLogout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          ) : (
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href={AppRoutes.login} style={{ fontSize: "1rem" }}>
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  color="primary"
                  href={AppRoutes.signUp}
                  variant="flat"
                  style={{ fontSize: "1rem" }}
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          )}
        </>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem>
            <IconButton onClick={toggleMobileMenu}>
              <MenuIcon />
            </IconButton>
          </NavbarItem>
          <NavbarBrand>
            <Link href={AppRoutes.home} aria-current="page" color="foreground">
              <AppLogo />
            </Link>
          </NavbarBrand>
        </NavbarContent>
      )}
      {!sm && mobileMenuOpen && (
        <Stack className="mobileNavContainer">
          <NavbarContent className="flex flex-col gap-4" justify="center">
            {/* Mobile Dropdown Menus */}
            <Dropdown>
              <NavbarItem className="spaceTop">
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Learn
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Learn Pages..."
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="environmental_issues"
                  description="Explore key environmental challenges like climate change, pollution, and deforestation."
                  startContent={<ForestOutlinedIcon />}
                  href={AppRoutes.envIssues}
                >
                  Environmental Issues
                </DropdownItem>
                <DropdownItem
                  key="sustainable_living_tips"
                  description="Discover practical tips to adopt a more eco-friendly and sustainable lifestyle."
                  startContent={<RecyclingOutlinedIcon />}
                  href={AppRoutes.sustainableLiving}
                >
                  Sustainable Living Tips
                </DropdownItem>
                <DropdownItem
                  key="green_innovations"
                  description="Learn about innovative technologies and solutions driving sustainability forward."
                  startContent={<VolunteerActivismOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Green Innovations
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Watch
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Watch and Learn"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="videos"
                  description="Watch engaging videos on environmental topics and success stories."
                  startContent={<VideocamOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Videos
                </DropdownItem>
                <DropdownItem
                  key="success_stories"
                  description="Get inspired by real-life stories of individuals and organizations making a difference."
                  startContent={<AutoStoriesOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Success Stories
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Interact
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Interact with Others"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="quizzes_and_challenges"
                  description="Test your knowledge with quizzes and take on exciting sustainability challenges."
                  startContent={<QuizOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Quizzes & Challenges
                </DropdownItem>
                <DropdownItem
                  key="discussion_forum"
                  description="Join discussions and connect with like-minded individuals in our forum."
                  startContent={<ForumOutlinedIcon />}
                  href={AppRoutes.forum}
                >
                  Discussion Forum
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Resources
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Resources"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="downloads_and_library"
                  description="Access a library of eco-friendly guides, research, and tools."
                  startContent={<FileDownloadOutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Downloads & Library
                </DropdownItem>
                <DropdownItem
                  key="environmental_impact_assessment"
                  description="Calculate and assess your environmental impact with our tools."
                  startContent={<Co2OutlinedIcon />}
                  href={AppRoutes.notImplemented}
                >
                  Environmental Impact Assessment
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Engage
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Engage with the platform"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="user_stories"
                  description="Explore stories shared by users about their journey toward sustainability."
                  startContent={<PersonSearchOutlinedIcon />}
                  href={AppRoutes.userStories}
                >
                  User Stories
                </DropdownItem>
                <DropdownItem
                  key="submit_your_story"
                  description="Share your own sustainability journey and inspire others."
                  startContent={<HistoryEduOutlinedIcon />}
                  href={AppRoutes.submitUserStory}
                >
                  Submit Your Story
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <NavbarItem className="spaceBottom">
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={<ExpandMoreOutlinedIcon />}
                    radius="sm"
                    variant="light"
                    style={{ fontSize: "1.2rem" }}
                  >
                    About
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="About us"
                className="w-[340px]"
                itemClasses={{ base: "gap-4" }}
              >
                <DropdownItem
                  key="mission_and_team"
                  description="Learn about our mission, vision, and the team behind EcoHub."
                  startContent={<GroupsOutlinedIcon />}
                  href={AppRoutes.missionTeam}
                >
                  Mission & Team
                </DropdownItem>
                <DropdownItem
                  key="news_and_updates"
                  description="Stay updated with the latest news and announcements from EcoHub."
                  startContent={<FeedOutlinedIcon />}
                >
                  News & Updates
                </DropdownItem>
                <DropdownItem
                  key="press_and_media"
                  description="Contact us for media inquiries or explore our press materials."
                  startContent={<ContactMailOutlinedIcon />}
                  href={AppRoutes.pressAndMedia}
                >
                  Press & Media
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          <NavbarContent justify="center" className="accountContainer">
            <NavbarItem className="lg:flex">
              <Link href={AppRoutes.login} style={{ fontSize: "1.2rem" }}>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href={AppRoutes.signUp}
                variant="flat"
                style={{ fontSize: "1.2rem" }}
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Stack>
      )}
    </Navbar>
  );
}
