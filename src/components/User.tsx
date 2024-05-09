
import React from "react"
import axios from "axios"
import { useQueryClient,useQuery, QueryClient } from "react-query"
import { Link } from "react-router-dom"
import { UserStore } from "../states/UserStore"
import MenuExampleInvertedSecondary from "./Headers"

export interface Userdata{
 id:number,
 firstName: string,
 lastName: string,
 email: string,
 status: boolean,
 birthday:string,
 skills:string[],
 avatar: [{
    name: string,
    percent:number,
    size: number,
    url: string
 }]
}

export const User : React.FC = ()=>{
    const queryClient=useQueryClient();
    const userState=UserStore();

    const accessToken=localStorage.getItem("token");
    // const apiUrl="http://localhost:8080/users";
    const apiUrl="http://localhost:3001/users";

    const authAcios= axios.create({
        baseURL: apiUrl,
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })

    const {isLoading,data, isError}=useQuery("user-query",
    async () => {
        const response=await authAcios.get<Userdata[]>(apiUrl);
        response.data.forEach(user=>{
            userState.addUser(user);
        })
        return response.data;
    })
    
    return(
        <>
        <MenuExampleInvertedSecondary/>
        <div className="ui grid container">
            {data?.map(user => (
                <div className="four wide column" key={user.id}>
                    <Link to={`/user/${user.id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={user.avatar[0].url} alt={user.avatar[0].name}/>
                            </div>
                            <div className="content">
                                <div className="header">{user.firstName}  {user.lastName}</div>
                                <div className="description">{user.email}</div>
                            </div>
                        </div>
                     </div>
                     </Link>
                </div>
            ))}
        </div>
        </>
    )
}

