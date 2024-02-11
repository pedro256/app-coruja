"use client";
import Link from "next/link";
import { IRoute, NavRoutes } from "@/mock/navbar/routes";
import {DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";


function DropdownItemView({item}:{item:IRoute}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex gap-2 items-center text-xs md:text-md lg:text-lg">{item.icon}{item.title}</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>{item.dropdownOps?.title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {
                        item.dropdownOps?.subs.map(sub => (
                            <DropdownMenuItem>
                                {
                                    sub.isDropdown ?(
                                        <DropdownItemView item={sub} />
                                    ):(
                                        <Link className="flex gap-2 items-center text-xs md:text-md lg:text-lg" href={sub.url || "/"}>
                                            {sub.icon}
                                            {sub.title}
                                        </Link>
                                    )
                                }
                               
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function Navbar() {
    return (
        <nav className="fixed w-full flex justify-between p-8 md:p-4 bg-foreground text-input">
            <div>
                <h4>CRJ</h4>
            </div>
            <div>

                <div className=" md:hidden">
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <p className="text-xs">Opções</p>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white">
                                <DropdownMenuLabel>Opções</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {
                                        NavRoutes.map(route => (
                                            <DropdownMenuItem>
                                                {
                                                    route.isDropdown ?(
                                                        <DropdownItemView item={route} />
                                                    ):(
                                                        <Link className="flex gap-2 items-center text-xs" href={route.url || "/"}>
                                                            {route.icon}
                                                            {route.title}
                                                        </Link>
                                                    )
                                                }
                                            </DropdownMenuItem>
                                        ))
                                    }
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <ul className="hidden md:flex gap-2">
                    {
                        NavRoutes.map(route => (
                            <li className="mx-4">
                                {
                                    route.isDropdown ?(
                                        <DropdownItemView item={route} />
                                    ):(
                                        <Link className="flex gap-2 items-center text-xs md:text-md lg:text-lg" href={route.url || "/"}>
                                            {route.icon}
                                            {route.title}
                                        </Link>
                                    )
                                }
                            </li>
                        ))
                    }
                </ul>

            </div>
        </nav>
    )
}