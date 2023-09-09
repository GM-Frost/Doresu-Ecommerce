import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
const AdminNav = () => {
  return (
    <>
      <div className="navbar text-white w-full px-4 flex justify-between bg-[#15212D]">
        <div className="logo flex items-center font-bold gap-3">
          <img
            src="https://user-images.githubusercontent.com/110303752/265511884-9b5ba805-6e22-48a6-b4c7-aab8d1232047.png"
            alt=""
            className="h-10 w-full"
          />
          <span>Doresu</span>
        </div>
        <div className="flex items-center gap-4 mr-2">
          <SearchIcon />
          <DashboardIcon />
          <CropLandscapeIcon />

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="p-1.5 rounded-sm inline-flex items-center text-white hover:text-opacity-100 focus:outline-none active:bg-gray-100">
                  <NotificationsActiveIcon />
                  <span className="bg-red-600 text-white w-4 h-4 rounded-full absolute -top-1 right-0  flex items-center justify-center text-[12px] gap-2 ">
                    1
                  </span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80 text-gray-900">
                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium">
                        Messages
                      </strong>
                      <div className="mt-2 py-1 text-sm text-center">
                        This is Notification Panel
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <div className="users flex items-center gap-2">
            <img
              className=" w-10 h-10 rounded-full object-cover"
              src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148903319.jpg?w=740&t=st=1694190758~exp=1694191358~hmac=16cfde6ed0b79933df43377d1a94688115050c08fad187f1db3311b8f2e7ffb1"
            />
            Admin
          </div>
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

export default AdminNav;
