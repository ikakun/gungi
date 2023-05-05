<!-- 試合 -->
<script>
    import Stand from "./Stand.svelte";
    import Bord from "./Bord.svelte";
</script>

<div class="game">
    <div>
        <Stand/>
    </div>
    <div>
        <Bord/>
    </div>
    <div>
        <Stand/>
    </div>
</div>

<style>
    /* Write your CSS here */
    .game {
        display: flex;
    }
    div:nth-child(1) {
        margin-right: 10px;
    }
    div:nth-child(2) {
    }
    div:nth-child(3) {
        display: flex;
        align-items: flex-end;
        margin-left: 10px;
    }
</style>