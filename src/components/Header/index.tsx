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
import { Logo } from "./Logo.jsx";
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

export default function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">EcoHub</p>
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
              >
                Learn
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="environmental_issues"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={<ForestOutlinedIcon />}
            >
              Environmental issues
            </DropdownItem>
            <DropdownItem
              key="sustainable_living_tips"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={<RecyclingOutlinedIcon />}
            >
              Sustainable Living Tips
            </DropdownItem>
            <DropdownItem
              key="green_innovations"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={<VolunteerActivismOutlinedIcon />}
            >
              Green innovations
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
              >
                Watch
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="videos"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={<VideocamOutlinedIcon />}
            >
              Videos
            </DropdownItem>
            <DropdownItem
              key="success_stories"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
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
              >
                Interact
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="quizzes_and_challenges"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={<QuizOutlinedIcon />}
            >
              Quizzes & Challenges
            </DropdownItem>
            <DropdownItem
              key="discussion_forum"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={<ForumOutlinedIcon />}
            >
              Discussion-forum
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
              >
                Resources
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="downloads_and_library"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={<FileDownloadOutlinedIcon />}
            >
              Downloads & library
            </DropdownItem>
            <DropdownItem
              key="environmental_impact_assessment"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
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
              >
                Engage
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="user_stories"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={<PersonSearchOutlinedIcon />}
            >
              User Stories
            </DropdownItem>
            <DropdownItem
              key="submit_your_story"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
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
              >
                About
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="mission_and_team"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={<GroupsOutlinedIcon />}
            >
              Mission & Team
            </DropdownItem>
            <DropdownItem
              key="news_and_ypdates"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={<FeedOutlinedIcon />}
            >
              News & Updates
            </DropdownItem>
            <DropdownItem
              key="press_and_media"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={<ContactMailOutlinedIcon />}
            >
              Press & Media
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
