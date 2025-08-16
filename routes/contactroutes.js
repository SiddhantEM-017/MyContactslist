const express = require("express");
const router = express.Router();

// Destructuring controller functions
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact
} = require("../controllers/createcontrollers");

const validateToken = require("../middleware/validatetoken");

router.use(validateToken)

// Routes
router.route("/")
  .get(getContacts)
  .post(createContact);

router.route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
