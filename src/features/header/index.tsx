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
} from "@nextui-org/react";
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
import { AppRoutes } from "@/app/config/routes/AppRoutes.js";
import AppLogo from "../ui/Icons/Logo";

export default function App() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Link href={AppRoutes.home} aria-current="page" color="foreground">
          <AppLogo />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="environmental_issues"
              description="Explore key environmental challenges like climate change, pollution, and deforestation."
              startContent={<ForestOutlinedIcon />}
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
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="videos"
              description="Watch engaging videos on environmental topics and success stories."
              startContent={<VideocamOutlinedIcon />}
            >
              Videos
            </DropdownItem>
            <DropdownItem
              key="success_stories"
              description="Get inspired by real-life stories of individuals and organizations making a difference."
              startContent={<AutoStoriesOutlinedIcon />}
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
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="quizzes_and_challenges"
              description="Test your knowledge with quizzes and take on exciting sustainability challenges."
              startContent={<QuizOutlinedIcon />}
            >
              Quizzes & Challenges
            </DropdownItem>
            <DropdownItem
              key="discussion_forum"
              description="Join discussions and connect with like-minded individuals in our forum."
              startContent={<ForumOutlinedIcon />}
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
                style={{ fontSize: "1rem" }}
              >
                Resources
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Resources"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="downloads_and_library"
              description="Access a library of eco-friendly guides, research, and tools."
              startContent={<FileDownloadOutlinedIcon />}
            >
              Downloads & Library
            </DropdownItem>
            <DropdownItem
              key="environmental_impact_assessment"
              description="Calculate and assess your environmental impact with our tools."
              startContent={<Co2OutlinedIcon />}
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
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="user_stories"
              description="Explore stories shared by users about their journey toward sustainability."
              startContent={<PersonSearchOutlinedIcon />}
            >
              User Stories
            </DropdownItem>
            <DropdownItem
              key="submit_your_story"
              description="Share your own sustainability journey and inspire others."
              startContent={<HistoryEduOutlinedIcon />}
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
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="mission_and_team"
              description="Learn about our mission, vision, and the team behind EcoHub."
              startContent={<GroupsOutlinedIcon />}
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
            >
              News & Updates
            </DropdownItem>
            <DropdownItem
              key="press_and_media"
              description="Contact us for media inquiries or explore our press materials."
              startContent={<ContactMailOutlinedIcon />}
            >
              <Link
                href={AppRoutes.PressAndMedia}
                aria-current="page"
                color="foreground"
              >
                Press & Media
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
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
    </Navbar>
  );
}
