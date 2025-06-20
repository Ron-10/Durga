import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconHome,
  IconInfoCircle,
  IconBook,
  IconSchool,
  IconCalendar,
  IconPhone,
  IconUsers,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IconInfoCircle className="h-full w-full text-white" />,
      href: "/about",
    },
    {
      title: "Academics",
      icon: <IconBook className="h-full w-full text-white" />,
      href: "/academics",
    },
    {
      title: "Admissions",
      icon: <IconSchool className="h-full w-full text-white" />,
      href: "/admissions",
    },
    {
      title: "Events",
      icon: <IconCalendar className="h-full w-full text-white" />,
      href: "/events",
    },
    {
      title: "Contact",
      icon: <IconPhone className="h-full w-full text-white" />,
      href: "/contact",
    },
    {
      title: "Portal",
      icon: <IconUsers className="h-full w-full text-white" />,
      href: "/portal",
    },
  ];
  
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-0"
        items={links}
      />
    </div>
  );
} 