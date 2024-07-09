<script lang=ts>
    import { onMount } from 'svelte'
    import { pwaInfo } from 'virtual:pwa-info'

    import favicon from '$lib/common/assets/favicon.png'
    import '$lib/common/style.scss'
    
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
    <link rel=icon href={favicon} />
    {@html webManifest}
</svelte:head>

<slot />