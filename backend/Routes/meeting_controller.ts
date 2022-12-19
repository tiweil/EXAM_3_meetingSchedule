// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import meeting_logic from '../Logic/meeting_logic';

// generic router 
const router_meeting = express.Router();

// gets all
router_meeting.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await meeting_logic.getAllMeetings())
})

// add meeting to DB
router_meeting.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await meeting_logic.addMeeting(someData))
})








export default router_meeting;