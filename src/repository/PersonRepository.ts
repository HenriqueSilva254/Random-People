import db from "./../database/db";
import { Persons } from "../protocols/types";


async function GetPersonList(): Promise<Persons[]>{
        const result = await db.query<Persons>(`SELECT * FROM people`)
        return result.rows;
}


export const PersonRepository = {GetPersonList} 