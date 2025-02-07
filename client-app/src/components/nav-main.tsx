"use client"

import { useLocation } from "react-router-dom"
import { ChevronRight, type LucideIcon } from "lucide-react"
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import clsx from "clsx"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger
} from "@/components/ui/sidebar"

type NavItem = {
  title: string
  url: string
  icon: LucideIcon
  items?: {
    title: string
    url: string
  }[]
}

export function NavMain({ items }: { items: NavItem[] }) {
  const location = useLocation()

  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          {items.map((item) => {
            const parentIsActive = location.pathname === item.url
            const subItemIsActive = item.items?.some(
              (sub) => location.pathname === sub.url
            )
            const isActive = parentIsActive || subItemIsActive

            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={isActive}
              >
                <SidebarMenuItem
                  className={clsx(
                    isActive && !subItemIsActive && "border-2 rounded-full border-[#4CFAC7]",
                    //disabled for now
                    item.title.includes("Emma AI") && "pointer-events-none opacity-50"
                  )}
                >
                  <SidebarMenuButton asChild tooltip={item.title}>
                    {/* If it's Emma AI, show a disabled layout with “Coming soon” */}
                    {item.title.includes("Emma AI") ? (
                      <div className="flex flex-row gap-3 items-center">
                        <item.icon style={{ width: 25, height: 25 }}/>
                        <div className="flex flex-col">
                          <span>Emma AI</span>
                          <span className="text-xs">Coming soon</span>
                        </div>
                      </div>
                    ) : (
                      /* Otherwise, use your existing link as normal */
                      <a href={item.url}>
                        <div className="flex flex-row gap-3 items-center">
                          <item.icon />
                          <span>{item.title}</span>
                        </div>
                      </a>
                    )}
                  </SidebarMenuButton>

                  {item.items?.length ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction className="data-[state=open]:rotate-90 h-[33px]">
                          <ChevronRight />
                          <span className="sr-only">Toggle</span>
                        </SidebarMenuAction>
                      </CollapsibleTrigger>

                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => {
                            const subIsActive =
                              location.pathname === subItem.url

                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a
                                    href={subItem.url}
                                    className={clsx(
                                      subIsActive && "text-[#47ecbb] hover:text-[#47ecbb] font-medium "
                                    )}
                                  >
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            )
          })}
        </SidebarMenu>
      </SidebarGroup>

      {/* Footer & Social Icons */}
      <SidebarMenu className="flex flex-col h-full">
        <div className="mt-auto">
          <SidebarMenuItem className="mb-8 pl-6 ml-6">
            <SidebarTrigger
              onlyShowWhen="open"
              className="rounded-full text-black w-[33px] h-[33px]"
            />
          </SidebarMenuItem>

          <div className="flex flex-row items-center justify-between gap-2 flex-1 mb-16 pl-6 ml-6 pr-6 mr-6">
                <a href="#">
                  <div className="items-center bg-[#9999FF] rounded-full p-1 text-white transform transition-transform duration-200 hover:scale-125">
                    <FaGithub size={25} />
                  </div>
                </a>
  
                <a href="#">
                  <div className="items-center bg-[#9999FF] rounded-full p-1 text-white transform transition-transform duration-200 hover:scale-125">
                    <FaYoutube size={25} />
                  </div>
                </a>
                          
                <a href="#">
                  <div className="items-center bg-[#9999FF] rounded-full p-1 text-white transform transition-transform duration-200 hover:scale-125">
                    <FaDiscord size={25} />
                  </div>
                </a>

                <a href="#">
                  <div className="items-center bg-[#9999FF] rounded-full p-1 text-white transform transition-transform duration-200 hover:scale-125">
                    <FaXTwitter size={25} />
                  </div>
                </a>
            </div>
          </div>
      </SidebarMenu>
    </>
  )
}
