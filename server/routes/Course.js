// Import the required modules
const express = require("express");
const router = express.Router();

// ================= Controllers =================

// Course Controllers
const {
  createCourse,
  showAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course");

// Course Progress Controller
const {
  updateCourseProgress,
} = require("../controllers/courseProgress");

// Category Controllers
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Categories");

// Section Controllers
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

// ✅ FIXED SubSection Controllers (CASE-SENSITIVE)
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection");

// Rating Controllers
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/Rating");

// ================= Middlewares =================
const {
  auth,
  isInstructor,
  isStudent,
  isAdmin,
} = require("../middlewares/auth");

// ================= Course Routes =================

// Course
router.post("/createCourse", auth, isInstructor, createCourse);
router.get("/getAllCourses", showAllCourses);
router.post("/getCourseDetails", getCourseDetails);
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
router.post("/editCourse", auth, isInstructor, editCourse);
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
router.delete("/deleteCourse", deleteCourse);

// Section
router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);

// SubSection
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);

// Course Progress
router.post(
  "/updateCourseProgress",
  auth,
  isStudent,
  updateCourseProgress
);

// ================= Category Routes =================
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

// ================= Rating Routes =================
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

module.exports = router;
