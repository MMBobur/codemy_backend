const tutorials = require("./controller");
const router = require("express").Router();
const Validator = require("./about.validator");
const validate = require("express-validation");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/:id", tutorials.findOne);
router.get("/", tutorials.findAll);

router.use(authenticate);
router.use(permit("admin"));

router.post("/", validate(Validator.addNew), tutorials.create);

router.put("/:id", validate(Validator.updateOne), tutorials.update);

router.delete("/:id", validate(Validator.deleteOne), tutorials.delete);

module.exports = router;
