import express from "express";

import {
  getAllJobs,
  submitContactForm,
} from "../controllers/publicController.js";

const router = express.Router();

router.get("/allJobs", getAllJobs);
router.post("/submittedContactForm", submitContactForm);

export default router;
