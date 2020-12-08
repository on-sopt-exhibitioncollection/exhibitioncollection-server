var express = require("express");
var router = express.Router();

const collectionController = require("../controllers/collectionController");
const upload = require("../modules/multer");
/* Create Project. */
router.get(
    "/projects",
    upload.fields([{ name: "img" }, { name: "userImg" }]),
    collectionController.createProject
);

/* Read all Project. */
router.get("/projects/read", collectionController.getProject);

/* Delete Project */
router.delete("/projects/:id", collectionController.deleteProject);

module.exports = router;
