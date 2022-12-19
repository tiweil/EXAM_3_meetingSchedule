// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import devGroup_logic from '../Logic/devGroup_logic';


// generic router 
const router_parts = express.Router();

// gets all
router_parts.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await devGroup_logic.getAllGroups())
})

router_parts.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const someData = +request.params.id;
  response.status(200).json( await devGroup_logic.getGroupsById(someData))
})





export default router_parts;