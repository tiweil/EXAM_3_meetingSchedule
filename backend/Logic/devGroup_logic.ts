// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";
import DevGroup from "../Models/DevGroup";
import Meeting from "../Models/Meeting";


// functions( async / await ) for getting data from DB
const getAllGroups = async (): Promise<DevGroup[]> => {
    // command line for the DB
    const sql = `
        SELECT * FROM development_group;
        
    `;
    // a promise function that connects us to the database with the command line
    const group = await dal.execute(sql);
    return group;
}
const getGroupsById = async (id:number): Promise<Meeting[]> => {
    // command line for the DB
    const sql = `
    SELECT meetings.* ,development_group.name AS development_group
    FROM meetings JOIN development_group
    ON meetings.development_group = development_group.id
    WHERE development_group.id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}


export default {
    getAllGroups,
    getGroupsById
}