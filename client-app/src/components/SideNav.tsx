import { NavMain } from "@/components/nav-main"
import {
  Bot,
  Home,
  LayoutDashboard
} from "lucide-react"
import { logo } from "../assets"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
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
      title: "Emma AI\n(Coming soon)",
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
    /* {
      title: "Buy Safe",
      url: "/buy-safe",
      icon: File,
    }  */   
  ]
}


export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="border-r-2 border-[#D9D9D940]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="grid flex-1 text-left text-sm my-10">
                <div className="flex flex-row items-center justify-center">
                  <img src={logo} alt="" className="w-[180px] " />
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
