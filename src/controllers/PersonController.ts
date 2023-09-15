import { Request, Response } from "express"
import { Persons } from "../protocols/types"
import { PersonService } from "../services/PersonService"
import httpStatus from "http-status";

async function RandomPerson (req: Request, res: Response){
    
try {
    const person = await PersonService.Randomizer()
    res.send(person).status(200)
} catch (err: any) {
    console.log(err.message)
    res.send(err.message).status(httpStatus.INTERNAL_SERVER_ERROR)
}
}

export const PersonController = {RandomPerson}