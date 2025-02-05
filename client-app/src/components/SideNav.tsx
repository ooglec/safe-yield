import {
  BookOpen,
  Bot,
  Command,
  Frame,
  File,
  Home,
  LayoutDashboard,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  WalletMinimal,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { botIcon, dashboardIcon, documentIcon, homeIcon, logo } from "../assets";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
const data = {
  navMain: [
    {
      title: "Website",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Emma AI",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Chat",
          url: "/emma-ai",
        },
        {
          title: "Wallet",
          url: "/wallet",
        },
      ],
    },
    {
      title: "Buy Safe",
      url: "/buy-safe",
      icon: File,
    }    
  ]
}


export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <div className="flex flex-row items-center justify-center">
                  <img src={logo} alt="" className="w-[180px]" />
                </div>

              </div>

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
