<script lang=ts>
    import { onMount } from 'svelte'
    import { pwaInfo } from 'virtual:pwa-info'

    onMount(async () => {
        if (pwaInfo) {
            const { registerSW } = await import('virtual:pwa-register')

            registerSW({
                immediate: true,
            })
        }
    })

    $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

<slot />