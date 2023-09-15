import { PersonController } from "../controllers/PersonController";
import { Router } from "express";

const index: Router = Router()

index.get("/person", PersonController.RandomPerson)

export default index