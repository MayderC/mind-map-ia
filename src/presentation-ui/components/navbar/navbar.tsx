import { Input, Link, Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";

import { SupportIcon } from "../icons/navbar/support-icon";

import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 bg-black overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full flex justify-between",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full">
          <Input
            placeholder="Pidele a la IA que te genere algo en Excalidraw"
            className="w-full text-white">
          </Input>

          <div className="btn-gradient relative z-10 inline-flex rounded-lg p-[2px] hover:cursor-pointer ">
          <div className="relative z-10 rounded-lg bg-slate-900 px-3 text-center flex nowrap">
            <p className="py-[6px] block flex nowrap"><span className="font-semibold text-pink-500 hover:text-purple-500 block">IA</span> Tool</p>
          </div>
      </div>

        </NavbarContent>

        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <NotificationsDropdown />

          <div className="max-md:hidden">
            <SupportIcon />
          </div>

          <NavbarContent>
            <UserDropdown />
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
