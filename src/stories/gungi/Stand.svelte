<!-- 駒台 -->
<script>
    import Piece from "./Piece.svelte";

    export let size = 'medium';
</script>

<div class={['stand', `stand--${size}`].join(' ')}>
    <table>
        {#each [...Array(5)] as i}
            <tr>
                <td><span><Piece text="侍" size="small"/></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
        {/each}
    </table>
</div>

<style>
    /* Write your CSS here */
    .stand {
        background:
            linear-gradient(
                    90deg,
                    rgba(208, 147, 82, 0.6),
                    rgba(192, 134, 70, 0.6) 60%,
                    rgba(196, 136, 70, 0.6)
            ),
            repeating-radial-gradient(
                    ellipse at 60% 500%,
                    #855c2f,
                    #312110 0.2%,
                    #7e582f 0.6%,
                    #79552a 1%
            );
    }
    .stand--small {
        width: 200px;
        height: 200px;
    }
    .stand--medium {
        width: 250px;
        height: 250px;
    }
    .stand--large {
        width: 300px;
        height: 300px;
    }
    table {
        border-collapse:collapse;
        width: 100%;
        height: 100%;
    }
    table td {
        width: 20%;
        height: 20%;
        text-align: center;
    }
    table td:hover {
        background-color: rgba(208, 147, 82, 0.6);
    }
    table td span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>