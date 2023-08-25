import { NextApiRequest,NextApiResponse } from "next";
import { withIronSession } from "next-iron-session";
import { ironSessionOptions,NextIronApiRequest } from "@/app/utils/ironSession";
import { UserData } from "@/app/utils/types";

async function handler (req:NextIronApiRequest, res: NextApiResponse<UserData>) {
    if(req.method === 'GET') {
        const user = req.session.get("user");

        if(user){
            res.status(200).json({
                id: user.id,
                username:"David",
                profilePictureURL:"https://image.ibb.co/fa2YRF/dounia.jpg",
                createdAt:"August 25th, 2023",
                isConfirmed:true
            })
        }
        else{
            res.status(401).end()
        }
    } else {
        //Handles any other http methods
        res.status(400).end()
    }
}

export default withIronSession(handler,ironSessionOptions)