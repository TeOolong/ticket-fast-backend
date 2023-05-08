import { Router } from "express";
import { getAllProtectedAreas } from "../service/protected-area.service";

const router = Router();

router.get('/all' , (req,res) => getAllProtectedAreas(req, res));

export default router;