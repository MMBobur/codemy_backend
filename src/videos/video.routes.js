const router = require("express").Router();
const validate = require("express-validation");
const Validation = require("./video.Validation");
const tutorials = require("../videos/video.controller");
const authenticate = require("./../util/authenticate");
const permit = require("./../util/permission");

router.get("/", tutorials.findAll);
router.get("/:id", tutorials.findOne);

router.use(authenticate);
router.use(permit("admin"));

router.post("/", validate(Validation.addNew), tutorials.create);

router.put("/:id", validate(Validation.updateOne), tutorials.update);

router.delete("/:id", validate(Validation.deleteOne), tutorials.delete);

module.exports = router;
