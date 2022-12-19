import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DevGroup from "../../../Models/DevGroup";
import Meeting from "../../../Models/Meeting";
import { URLs } from "../../../utils/URLs";
import Header from "../Header/Header";
import "./Main.css";

function Main(): JSX.Element {
    const[groups,setGroups]=useState<DevGroup[]>([]);
    const[meetings,setMeeting]=useState<Meeting[]>([]);
    let specialUrl=URLs.getAllMeetings;
    let groupId="";
    useEffect(()=>{
        axios.get(specialUrl+groupId)
        .then(response=>setMeeting(response.data));
    },[])
    useEffect(()=>{
        axios.get(URLs.getAllGroups)
        .then(response=>setGroups(response.data));
    },[])
    return (
        <div className="Main">
            <Header/>
            <label>show by group:</label>
            <select required style={{ height: 30 }} onChange={(args)=>{
                axios.get(`http://localhost:3008/meetings/groups/${args.target.value}`)
                .then(response=>setMeeting(response.data))}}>
                <option disabled value="">Select group...</option>
                {groups.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>development group</th>
                        <th>from</th>
                        <th>to</th>
                        {/* <th>time of meeting</th> */}
                        <th>description</th>
                        <th>room</th>
                    </tr>
                </thead>
                <tbody>
                    {meetings.map((item)=>
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.development_group}</td>
                            <td>{new Date(item.start_date).toISOString().replace('T',' ').slice(0,19)}</td>
                            <td>{new Date(item.end_date).toISOString().replace('T',' ').slice(0,19)}</td>
                            {/* <td>{}</td> */}
                            <td>{item.description}</td>
                            <td>{item.room}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default Main;




