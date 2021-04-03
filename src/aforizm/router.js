const router = require("express").Router();
const validate = require("express-validation");
const Validator = require("./validator");
const afoCont = require("./controller");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", afoCont.findAll);

router.get("/:id", afoCont.findOne);

router.use(authenticate);
router.use(permit("admin"));

router.post("/", validate(Validator.addNew), afoCont.create);

router.put("/:id", validate(Validator.updateOne), afoCont.update);

router.delete("/:id", validate(Validator.deleteOne), afoCont.delete);

module.exports = router;
