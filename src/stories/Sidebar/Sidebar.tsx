
import { ChevronUp, LucideIcon, User2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider, SidebarTrigger
} from "../../components/ui/sidebar";
import './header.css';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "../../components/ui/dropdown-menu";

type ItemNav = {
  title: string,
  url: string,
  icon?: LucideIcon | null
};

type User = {
  name: string;
  items: ItemNav[]
};

export interface SidebarProps {
  children: React.ReactNode;
  items: ItemNav[],
  logo: string,
  name: string
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const SidebarComponent = ({ children, items, logo, name, user, onLogout }: SidebarProps) => (
  <SidebarProvider>
    <AppSidebar items={items} logo={logo} name={name} user={user} onLogout={onLogout} />
    <main>
      <SidebarTrigger />
      {children}
    </main>
  </SidebarProvider>
);


export function AppSidebar({ items, logo, name, user, onLogout }: { items: ItemNav[], logo: string, name: string, user?: User, onLogout?: () => void }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex gap-4  my-4 capitalize">
            <img src={logo} alt="logo" />
            <h1 className="font-bold text-xl">{name}</h1>
          </SidebarGroupLabel>
          <hr />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {user &&
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> {user.name}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  {user.items.map((item) => (
                    <DropdownMenuItem key={item.title}>
                      <a href={item.url} className=" w-full">
                        {item.title}
                      </a>
                    </DropdownMenuItem>
                  ))}
                  {/* <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem> */}
                  <DropdownMenuItem onClick={onLogout}>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>}
    </Sidebar>
  )
}
