import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DevGroup from "../../../Models/DevGroup";
import Meeting from "../../../Models/Meeting";
import { URLs } from "../../../utils/URLs";
import Header from "../Header/Header";
import "./Add.css";

function Add(): JSX.Element {
    const[groups,setGroups]=useState<DevGroup[]>([]);
    const { register, handleSubmit } = useForm<Meeting>();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(URLs.getAllGroups)
        .then(response=>setGroups(response.data));
    },[])

    

    const send=async(newMeeting:Meeting)=>{

        try{
            axios.post(URLs.addMeeting,newMeeting)
            .then(res=>navigate("/"));
        }catch(err:any){
            console.log(err.message);
        }
    }

    return (
        <div className="Add">
            <Header/>

			<div className="Box">
                <form onSubmit={handleSubmit(send)}>
                    <h2>add book</h2>

                    <label>group:</label>
                    <select required style={{ height: 30 }} {...register("development_group")}>
                        <option disabled value="">Select group...</option>
                        {groups.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>

                    
                    <label>from:</label>
                    <input required id="1" type="datetime-local"  {...register("start_date")}/>

                    
                    <label>to:</label>
                    <input required id="1" type="datetime-local" {...register("end_date")}/>

                    <label>description:</label><br/>
                    <textarea required style={{height:30}} {...register("description")}/>
                    <br />
                    <label>room:</label>
                    <input type="text"  {...register("room")}/>


                    <input type="submit" value="save problem" style={{ height: 50, backgroundColor: "lightgreen", borderRadius: 20 }} />

                </form>
            </div>

        </div>
    );
}

export default Add;
