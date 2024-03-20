

import { type } from "os";
import {create} from "zustand";
import {devtools, persist} from "zustand/middleware"
import { Userdata } from "../components/User";

export type UserTypes= {
    users: Userdata[];
}

type States={
    users: Userdata[];
}

type Actions= {
    addUser: (user:Userdata)=> void
    //  addOneUser:(userD:Userdata)=>void
}

export const UserStore = create<States & Actions>()(
    devtools(
        persist(
            (set)=>({
                users:[],
             addUser:(user)=> set((state)=>({
                users:[user, ...state.users]})),
            }),
            // (set)=>{

            // }
            {name:"UserStore"}
        )
    )
)