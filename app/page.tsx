"use client";

import { MdAdd } from "react-icons/md";
import { AppLogo } from "./components/app-logo";
import DashboardNavBar1 from "./components/nav-bar";
import { ModeToggle } from "./dark-mode";
// Assuming you're using next-themes

export default function Home() {
  return (
    <div className="">
      <DashboardNavBar1
        showAvatar={false}
        showSearchBar={false}
        buttonData={{ text: "Add Session", icon: MdAdd }}
        leftSection={<AppLogo />}
        iconButtons={[<ModeToggle />]}
      />
    </div>
  );
}
