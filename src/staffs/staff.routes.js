const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./staff.validator");
const staffController = require("./staff.controller");

const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", staffController.findAll);
router.get("/:id", staffController.findOne);

router.use(authenticate);
router.use(permit("admin"));

router.post("/", validate(Validator.addNew), staffController.create);

router.put("/:id", validate(Validator.updateOne), staffController.update);

router.delete("/:id", validate(Validator.deleteOne), staffController.delete);

module.exports = router;
