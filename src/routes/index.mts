import express, { Request, Response } from "express";
const router = express.Router();

import registerRouter from "./registerRouter.mts";

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send(
      "Here's your request body and headers: " +
        JSON.stringify(req.body) +
        " " +
        JSON.stringify(req.headers)
    );
  })
  .post((req: Request, res: Response) => {
    res.send(
      "Here's your request body and headers: " +
        JSON.stringify(req.body) +
        " " +
        JSON.stringify(req.headers)
    );
  })
  .put((req: Request, res: Response) => {
    res.send(
      "Here's your request body and headers: " +
        JSON.stringify(req.body) +
        " " +
        JSON.stringify(req.headers)
    );
  })
  .delete((req: Request, res: Response) => {
    res.send(
      "Here's your request body and headers: " +
        JSON.stringify(req.body) +
        " " +
        JSON.stringify(req.headers)
    );
  });

router.use("/register", registerRouter);

router.route("/secret").all((req: Request, res: Response, next: Function) => {
  // authentication for all methods
  console.log("Authentication for all methods", req.method);
  res.send("Authentication for all methods");
  next(req, res);
});

router
  .route("/validate-orderer")
  .get((req: Request, res: Response) => {
    console.log(req.body);
    res.send("Hello World!");
  })
  .post((req: Request, res: Response) => {
    const { email } = req.body;
    const [username, domain] = email.split("@");

    if (domain === "hedeshy.ca" && username === "iman") {
      res.status(200).json({ validation: "success" });
    } else if (domain === "hedeshy.ca" && username !== "iman") {
      res.status(200).json({
        validation: "partial-success",
        security_question: {
          message: "What is your favourite food?",
          options: [
            {
              label: "Steak",
              value: "steak",
              correct: true,
            },
            {
              label: "Vegan Burger",
              value: "vegan-burger",
              correct: false,
            },
            {
              label: "Soup",
              value: "soup",
              correct: false,
            },
          ],
        },
      });
    } else {
      res.status(400).json({ validation: "failed" });
    }
  });

export default router;
