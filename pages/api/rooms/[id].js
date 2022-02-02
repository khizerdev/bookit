import nc from "next-connect"
import dbConnect from "../../../config/dbConnect";
import {getSingleRoom,updateRoom,deleteRoom} from "../../../controllers/roomController";



const handler = nc();

dbConnect();

handler.get(getSingleRoom)
handler.put(updateRoom)
handler.delete(deleteRoom)




export default handler;