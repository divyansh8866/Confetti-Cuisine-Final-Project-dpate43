"use strict";

const router = require("express").Router(),
  vacController = require("../controllers/vacController");

router.get("", vacController.index, vacController.indexView);
router.get("/new", vacController.new);
router.post("/create", vacController.create, vacController.redirectView);
router.get("/:id/edit", vacController.edit);
router.put("/:id/update", vacController.update, vacController.redirectView);
router.get("/:id", vacController.show, vacController.showView);
router.delete("/:id/delete", vacController.delete, vacController.redirectView);

module.exports = router;
