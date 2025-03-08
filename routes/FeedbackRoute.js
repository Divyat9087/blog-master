import express from "express";
import { getContacts,createContact} from "../controllers/FeedbackController.js";
const router = express.Router();

router.get("/page/contact", getFeedback);
router.post("/api/contact", createFeedback);

export default router;