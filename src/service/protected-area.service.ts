import { Request, Response } from "express"
import { ProtectedArea } from "../entity/ProtectedArea";

export const getAllProtectedAreas = async(req: Request, res: Response) => {
    const protectedAreas = await ProtectedArea.find();
    return res.send(protectedAreas)
}