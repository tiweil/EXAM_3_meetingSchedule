// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import devGroup_controller from "./Routes/devGroup_controller";
import meeting_controller from "./Routes/meeting_controller";
import sql_init from "./sql/init";
import config from "./Utils/config";


const server = express();
sql_init();
const currentPort = config.port;
server.use(cors());
server.use(express.json());
server.use("/meetings/groups",devGroup_controller);
server.use("/meetings",meeting_controller);
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )