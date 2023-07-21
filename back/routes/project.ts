import { Router } from "express";
import isLoggedIn from "../middlewares/auth";
import ProjectController from "../controllers/project";
import validate, { ValidateMethod } from "../middlewares/validate";

const router = Router();

router.get(
  "/",
  validate(ProjectController.validate(ValidateMethod.PAGINATE)),
  ProjectController.index
);
router.get(
  "/:id",
  validate(ProjectController.validate(ValidateMethod.ID)),
  ProjectController.show
);
router.post(
  "/",
  isLoggedIn(),
  validate(ProjectController.validate(ValidateMethod.CREATE)),
  ProjectController.store
);
router.put(
  "/:id",
  isLoggedIn(),
  validate(ProjectController.validate(ValidateMethod.UPDATE)),
  ProjectController.update
);
router.put(
  "/tag/:id",
  isLoggedIn(),
  validate(ProjectController.validate(ValidateMethod.TAG)),
  ProjectController.tag
);
router.delete(
  "/:id",
  isLoggedIn(),
  validate(ProjectController.validate(ValidateMethod.ID)),
  ProjectController.delete
);

export default router;
