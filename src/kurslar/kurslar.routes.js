const kurslarController = require("./kurslar.controller");
const router = require("express").Router();
const Validator = require("./kurslar.validator");
const validate = require("express-validation");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", kurslarController.findAll);

router.get("/:id", kurslarController.findOne);

router.use(authenticate);
router.use(permit("admin"));

router.post("/", validate(Validator.addNew), kurslarController.create);

router.put("/:id", validate(Validator.updateOne), kurslarController.update);

router.delete("/:id", validate(Validator.deleteOne), kurslarController.delete);

module.exports = router;
