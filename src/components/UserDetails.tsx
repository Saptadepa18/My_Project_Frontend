import { Link, useParams } from "react-router-dom"
import { UserStore } from "../states/UserStore"
import MenuExampleInvertedSecondary from "./Headers";


export const UserDetails: React.FC= ()=>{
    const {userId}=useParams<{userId: string}>();
    console.log(userId)
    // const currId=localStorage.getItem("currId");
    const data=UserStore((state)=>state.users)

    const uniqueUserIds= new Set<number>();

    const uniqueData= data.filter((user)=>{
        if(!uniqueUserIds.has(user.id)){
            uniqueUserIds.add(user.id);
            return true;
        }
        return false;
    })

    return(
        
    <>
    <MenuExampleInvertedSecondary/>
    {
    
        uniqueData?.filter((user)=> userId && user.id===parseInt(userId))
        .map((user)=> (

            <div className="ui segment" key={user.id}>
                
  <div className="ui two column very relaxed grid">
    <div className="column">
        <div className="ui message">
            <div className="header">
                Personal Information
            </div>
            <ul className="list">
                <li>
        <p>
        <div className="header">Avatar:</div>
        {user.avatar && user.avatar[0] && user.avatar[0].url && (
            <img src={user.avatar[0].url} alt={user.firstName}/>
        )}
        </p></li>

      <li><p>
        <div className="header">UserName:</div> {user.firstName} {user.lastName}
        </p></li>

      <li><p><div className="header">Email:</div> {user.email}</p></li>

      <li><p><div className="header">Birthday:</div> {user.birthday}</p></li>
      
      </ul>
    </div>
    </div>
    <div className="column">
        <div className="ui message">
        <div className="header">
               Skill sets
            </div>

        <ul className="list">
      <li><p><div className="header">Skill1:</div> {user.skills[0]}</p></li>
      <li><p><div className="header">Skill2:</div> {user.skills[1]}</p></li>
      <li><p><div className="header">Skill3:</div> {user.skills[2]}</p></li>
      </ul>
    </div>
    </div>
  </div>
  <div className="ui vertical divider">
    and
  </div>
</div>
        ))
    }
    </>
    )
}