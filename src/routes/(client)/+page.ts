import db, { liveQuery } from "$lib/database"

export async function load() {
    const todo = db.tasks.filter(({ complete }) => complete === false)
    const done = db.tasks.filter(({ complete }) => complete === true)
    
    return {
        todo: liveQuery(() => todo.toArray()),
        done: liveQuery(() => done.toArray())
    }
}