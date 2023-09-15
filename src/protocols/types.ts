import { type } from "os"


export type ConnectiOne = {
    query<T>(arg0: string): unknown
    host: string,
    port: number,
    user: string,
    password: string,
    database: string
}


export type Persons = {    
    id: number,
    firstName: string,
    lastName: string
}
