import express from "express";
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
  approveTeam,
  addMember,
  updateMember,
  deleteMember,
  getTeamByString,
} from "../controllers/teamController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createTeam).get(protect, admin, getTeams);
router.route("/search").get(getTeamByString);
router
  .route("/:id")
  .get(protect, getTeamById)
  .put(protect, updateTeam)
  .delete(protect, deleteTeam);
router
  .route("/:teamId/member/:memberId")
  .post(protect, addMember)
  .put(protect, updateMember)
  .delete(protect, deleteMember);
router.route("/:id/approve").put(protect, admin, approveTeam);

export default router;
