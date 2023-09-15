import { Persons } from "../protocols/types";
import { PersonRepository } from "../repository/PersonRepository";


async function Randomizer(): Promise<Persons> {
    const result = await PersonRepository.GetPersonList()
    const maximo: number = result.length - 1
    
    const person = Math.floor(Math.random() * (maximo - 0 + 1)) + 0;
    console.log(person)
    return result[person]
}

export const PersonService = {Randomizer}