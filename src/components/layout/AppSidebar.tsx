"use client";

import {
  faFileLines,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "../buttons/LogoutButton";
import { faArrowLeft, faChartLine } from "@fortawesome/free-solid-svg-icons";

const AppSidebar = () => {
  const path = usePathname();

  return (
    <nav className="inline-flex flex-col text-center mt-12 gap-2 text-gray-500">
      <Link
        href={"/account"}
        className={"flex gap-4 p-2 " + (path === "/account" ? "text-blue-500" : "")}
      >
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faFileLines}
          className="w-6 h-6 "
        />
        <span>My page</span>
      </Link>
      <Link
        href={"/analytics"}
        className={
          "flex gap-4 p-2 " + (path === "/analytics" ? "text-blue-500" : "")
        }
      >
        <FontAwesomeIcon
          fixedWidth={true}
          icon={faChartLine}
          className="w-6 h-6"
        />
        <span>Analytics</span>
      </Link>
      <LogoutButton
        iconLeft={true}
        className="flex gap-4 items-center p-2"
        iconClasses="w-6 h-6"
      />
      <Link
        href={"/"}
        className="flex gap-2 items-center text-sm text-gray-500 border-t pt-4"
      >
        <FontAwesomeIcon className="w-3 h-3" icon={faArrowLeft} />
        <span>Go Back</span>
      </Link>
    </nav>
  );
};

export default AppSidebar;
