// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";
import Meeting from "../Models/Meeting";


// functions( async / await ) for getting data from DB
const getAllMeetings = async (): Promise<Meeting[]> => {
    // command line for the DB
    const sql = `
        SELECT meetings.* ,development_group.name AS development_group
        FROM meetings JOIN development_group
        ON meetings.development_group = development_group.id;
        
    `;
    // a promise function that connects us to the database with the command line
    const meeting = await dal.execute(sql);
    return meeting;
}


const addMeeting = async (newMeeting: Meeting): Promise<Meeting> => {
    // command line for the DB
    const sql = `
    INSERT INTO meetings VALUES 
    (DEFAULT, 
    ${newMeeting.development_group},
    '${newMeeting.start_date}',
    '${newMeeting.end_date}',
    '${newMeeting.description}',
    '${newMeeting.room}');`;
    const response : OkPacket = await dal.execute(sql);
    newMeeting.id = response.insertId;
    return newMeeting;

} 




export default {
    getAllMeetings,
    addMeeting,
    
}