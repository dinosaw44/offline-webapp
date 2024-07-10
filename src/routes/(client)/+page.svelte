<script lang=ts>
    import db from "$lib/database"
    import TaskCard from "$lib/ui/Card/TaskCard.svelte"

    export let data

    let { todo, done } = data

    let form: HTMLFormElement
    let title: string

    const create = async (title: string) => {
        await db.tasks.add({
            title,
            complete: false,
        })

        form.reset()
    }

    const setComplete = async (id: number, complete: boolean) => {
        await db.tasks.update(id, {
            complete,
        })
    }

    const del = async (id: number) => {
        await db.tasks.delete(id)
    }
</script>

<style lang=scss>
    main {
        padding: 2rem;
    }

    .stack {
        display: grid;
        gap: .5rem;
    }

    li:has(input:checked) :global(h1) {
        text-decoration: line-through;
    }

    form > * {
        vertical-align: middle;
    }
</style>

<main class=stack>
    <h1 style:text-align=center>Tasks</h1>

    <form bind:this={form} on:submit|preventDefault={() => create(title)}>
        <h2 style:display=inline-block>todo</h2>
        <input bind:value={title} type=text required autocomplete="off"/>
        <button>+ Add</button>
    </form>

    {#if $todo?.length}
        <ul class=stack>
            {#each ($todo ?? []) as { id, title, complete }}
                <li style:user-select=none>
                    <TaskCard {title} on:click={() => setComplete(id, !complete)}>
                        <input type=checkbox checked={complete} />
                    </TaskCard>
                </li>
            {/each}
        </ul>
    {:else}
        <i style:margin-left=2rem>Empty</i>
    {/if}

    {#if $done?.length}
        <h2>Done</h2>
        <ul class="stack">
            {#each ($done ?? []) as { id, title, complete }}
                <li style:user-select=none 
                    style:display=flex
                    style:gap=.5rem
                >
                    <span style:flex=auto>
                        <TaskCard {title} on:click={() => setComplete(id, !complete)}>
                            <input type=checkbox checked={complete}/>
                        </TaskCard>
                    </span>
                    <button on:click={() => del(id)}
                        style:color=var(--color-warn)
                    >Delete
                    </button>
                </li>
            {/each}
        </ul>
    {/if}
</main>