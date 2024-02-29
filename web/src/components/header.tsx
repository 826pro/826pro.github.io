import { ChevronDown } from "lucide-react";

import Logo from "@/assets/logo.png";

import AccountMenu from "./account-menu";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-24 items-center gap-6 px-6">
        <img src={Logo} alt="logo" />

        <Separator orientation="vertical" className="h-20 max-md:hidden"/>

        <div className="flex h-24 items-center gap-6 px-6 max-md:hidden">
          <DropdownMenu>
            <NavLink to="/">Cardápio</NavLink>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 select-none"
              >
                Categorias
                <ChevronDown className="h-4 w-4"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="flex items-center justify-center w-36 h-44"
            >
              <nav className="flex flex-col gap-4 items-center">
                <NavLink to="/carnes">Carnes</NavLink>
                <NavLink to="/massas">Massas</NavLink>
                <NavLink to="/combos">Combo</NavLink>
                <NavLink to="/veganos">Veganos</NavLink>
              </nav>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
