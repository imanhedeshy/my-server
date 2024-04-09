import express from "express";
const router = express.Router();

router
  .route("/")
  .get((_req, res) => {
    res.send("Hello from register router");
  })
  .post((_req, res) => {
    res.send("Hello from register router");
  })
  .put((_req, res) => {
    res.send("Hello from register router");
  })
  .delete((_req, res) => {
    res.send("Hello from register router");
  });

export default router;