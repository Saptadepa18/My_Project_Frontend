import axios from "axios"
import { useMutation } from "react-query"

const useSignUpMutation= ()=>{
    return useMutation(async (data)=>{
        const response=await axios.post("http://localhost:8080/register",data);
        return response.data;
    })
}

export default useSignUpMutation;