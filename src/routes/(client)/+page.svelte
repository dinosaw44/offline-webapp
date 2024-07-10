<script lang=ts>
    import TaskCard from "$lib/ui/Card/TaskCard.svelte"

    const data = [
        { title: "this is a test item" },
        { title: "this is a test item" },
        { title: "this is a test item", complete: true },
        { title: "this is a test item" },
    ]
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
</style>

<main class=stack>
    <div>
        <input />
        <button>+ Add</button>
    </div>

    <ul class=stack>
        {#each data as { title, complete }}
            <li style:user-select=none>
                <TaskCard {title} on:click={() => complete = !complete}>
                    <input type=checkbox checked={complete} />
                </TaskCard>
            </li>
        {/each}
    </ul>
</main>