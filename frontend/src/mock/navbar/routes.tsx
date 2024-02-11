
import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GrDomain, GrSystem } from "react-icons/gr";

export interface IRoute {
    title:string,
    url?:string,
    icon?:ReactElement<any, any>,
    rules:string[],
    isDropdown?:boolean,
    dropdownOps?:{
        subs:IRoute[],
        title?:string,
    }
}

const NavRoutes:IRoute[] = [
    {
        title:'Principal',
        icon:<GrDomain />,
        url:'/app',
        rules:[],
    },
    {
        title:'Usuários',
        icon:<FaUser />,
        url:'/app/usuarios',
        rules:[],
    },
    {
        title:'Grupos',
        icon:<FaUserGroup />,
        url:'/app/grupos',
        rules:[],
    },
    {
        title:'Sistemas',
        icon:<GrSystem />,
        url:'/app/sistemas',
        rules:[],
    },{
        title:'Link Test',
        icon:<GrSystem />,
        rules:[],
        isDropdown:true,
        dropdownOps:{
            title:"Titulo Drodown",
            subs:[
                {
                    title:"LINK 1",
                    url:"/app/l1",
                    rules:[]
                },
                {
                    title:"LINK 2",
                    url:"/app/l2",
                    rules:[]
                }
            ]
        }
    }
]

export { NavRoutes};