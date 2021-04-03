const express = require("express");
const router = express.Router();

const adminRouter = require("./admin/router");
const staffRouter = require("./staffs/staff.routes");
const afoRouter = require("./aforizm/router");
const aboutRouter = require("./about/router");
const vidRouter = require("./videos/video.routes");
const kurRouter = require("./kurslar/kurslar.routes");
const darsRouter = require("./dasturlash_tillari/dasturlash_tillari.routes");

router.use("/admin", adminRouter);

router.use("/staff", staffRouter);
router.use("/aforizm", afoRouter);
router.use("/about", aboutRouter);
router.use("/videos", vidRouter);
router.use("/kurslar", kurRouter);
router.use("/proglang", darsRouter);

module.exports = router;
