import { Dexie, liveQuery, type EntityTable } from "dexie"
import Task from "./Task"

export class Database extends Dexie {

    tasks!: EntityTable<Task, "id">

    constructor() {
        super("pwa-demo")
        this.version(1).stores({
            tasks: "++id, title",
        })

        this.tasks.mapToClass(Task)
    }
}

export {
    liveQuery,
}

export default new Database()