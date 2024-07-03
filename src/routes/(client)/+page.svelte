<script lang=ts context=module>
    const COUNT_KEY = "count"
</script>

<script lang=ts>
    let count = Number(localStorage.getItem(COUNT_KEY)) ?? 0
    $: localStorage.setItem(COUNT_KEY, String(count))
</script>

<button on:click={() => count++}>+</button>
<span>{count}</span>