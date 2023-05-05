<!-- 板 -->
<script>
    import Piece from "./Piece.svelte";
</script>

<div class="bord">
    <table>
        <tbody>
        {#each [...Array(9)] as index}
            <tr>
                <td><span><Piece text={'大'} size="medium" isOwn="false"/></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
                <td><span></span></td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<style>
    /* Write your CSS here */
    .bord {
        height: 720px;
        width: 720px;
        padding: 20px;
        background:
            linear-gradient(
                    90deg,
                    rgba(208, 147, 82, 0.6),
                    rgba(192, 134, 70, 0.6) 60%,
                    rgba(208, 147, 82, 0.6)
            ),
            repeating-radial-gradient(
                    ellipse at 60% 500%,
                    #c08646,
                    #c08646 0.2%,
                    #d09352 0.6%,
                    #d09352 1%
            );
    }
    table {
      border-collapse:collapse;
    }
    table td {
      border: solid 1px #000000;
      box-sizing: border-box;
      width: 80px;
      height: 80px;
      text-align: center;
    }
    table td:hover {
      background-color: rgba(229, 150, 59, 0.61);
    }
    table td span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>