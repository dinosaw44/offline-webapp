<script lang=ts>
    export let title: string
</script>

<style lang=scss>
    button {
        display: contents;
        text-align: inherit;
    }

    article {
        background-color: var(--color-light);
        border: solid 2px transparent;
        border-radius: .25rem;
        color: var(--color-dark);
        padding: .5rem 1rem;

        &:hover {
            background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), transparent);
            border-color: var(--color-accent);
        }
    }

    h1 {
        font-size: inherit;
        font-weight: inherit;
        text-transform: lowercase;

        &::first-letter {
            text-transform: uppercase;
        }
    }
</style>

<button type=button on:click>
    <article style:display=flex>
        <hgroup style:display=contents>
            <h1 style:flex=auto style:margin=auto>{title}</h1>
        </hgroup>
        <slot />
    </article>
</button>