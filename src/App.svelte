<script lang="ts">
  import Card from './lib/Card.svelte'
    import { Game, GameState } from './lib/game';
    import type { MaterialItem } from './lib/material-item';

    const game = new Game()

    let itemA : MaterialItem, itemB : MaterialItem

  let state : GameState = GameState.NotStarted;
  const next = () => {
    [itemA, itemB, state] = game.getnextPair();
  }

</script>

<main>
  {#if state == GameState.NotStarted }
    <h1>Testing Carbon Rank!</h1>
      <button on:click="{next}">Start</button>
  {:else if state == GameState.Playing}
      <div class="cards">
          <Card on:click="{() => game.submitAnswer(itemA, itemB)}" item={itemA} />
          <Card on:click="{() => game.submitAnswer(itemB, itemA)}" item={itemB} />
      </div>
      <button on:click="{next}">Next</button>
  {:else if state == GameState.Finished}
      <h1>Total score: {game.points}!</h1>
  {/if}
</main>

<style>

    main {
        width: 80vw;
    }
    .cards {
        display: flex;
        justify-content: space-evenly;
        gap: 1em;
        width: 100%;
    }
</style>
