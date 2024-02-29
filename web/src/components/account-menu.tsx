import { Menu } from "lucide-react";

import { NavLink } from "./nav-link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function AccountMenu() {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            <Menu className="w-5 h-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="flex items-center justify-center  w-56 h-56">
          <nav className="flex flex-col gap-4 items-center">
            <NavLink to="/">Cardápio</NavLink>
            <NavLink to="/carnes">Carnes</NavLink>
            <NavLink to="/massas">Massas</NavLink>
            <NavLink to="/combos">Combo</NavLink>
            <NavLink to="/veganos">Veganos</NavLink>
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
