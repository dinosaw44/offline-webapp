import { Entity } from "dexie"
import { type Database } from "./index"

export default class Task extends Entity<Database> {
    id!: number
    title!: string
    complete!: boolean
}