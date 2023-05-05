<!--　駒　-->
<script lang="ts">
    export let isFirstMove = true;
    export let isOwn = true;
    export let text: string = '兵';
    export let isPromote = false;
    export let size = 'medium';
    $: promoteWhite = isPromote ? 'pieceWhite-promote' : 'pieceWhite';
    $: promoteBlack = isPromote ? 'pieceBlack-promote' : 'pieceBlack';
</script>

{#if isFirstMove}
    <div class={[promoteWhite, `piece--${size}`].join(' ')}>
        <div class={["pieceWhite-text", `${isOwn ? '' : 'pieceBlack-text--opposition'}`].join(' ')}>{text}</div>
    </div>
{:else}
    <div class={[promoteBlack, `piece--${size}`].join(' ')}>
        <div class={["pieceBlack-text", `${isOwn ? '' : 'pieceBlack-text--opposition'}`].join(' ')}>{text}</div>
    </div>
{/if}

<style>
    /* Write your CSS here */
    .pieceWhite {
        background: radial-gradient( #ffffff, #e8e8e8);
        border-radius: 100%;
        box-shadow: 0 5px 8px 0 rgb(155, 155, 155);
        border: solid 2px transparent;
    }
    .pieceWhite-promote {
        background: radial-gradient( #ffffff, #e8e8e8);
        border-radius: 100%;
        box-shadow: 0 10px 10px 0 rgb(155, 155, 155);
        border: solid 2px #000000;
    }
    .pieceWhite-text {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 2rem;
    }
    .pieceBlack {
        background: radial-gradient( #5b5b5b, #000000);
        border-radius: 100%;
        box-shadow: 0 5px 8px 0 rgb(155, 155, 155);
        border: solid 2px transparent;
    }
    .pieceBlack-promote {
        background: radial-gradient( #5b5b5b, #000000);
        border-radius: 100%;
        box-shadow: 0 10px 10px 0 rgb(155, 155, 155);
        border: solid 2px #ffffff;
    }
    .pieceBlack-text {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        color: #ffffff;
    }
    .pieceBlack-text--opposition {
        transform: rotate(180deg);
    }
    .piece--small {
        width: 40px;
        height: 40px;
    }
    .piece--medium {
        width: 60px;
        height: 60px;
    }
    .piece--large {
        width: 80px;
        height: 80px;
    }
</style>