<script lang="ts">
    import Card from './lib/Card.svelte'
    import { Game, GameState } from './lib/game';
    import { loadFromCsv, type MaterialItem } from './lib/material-item';

    const game = new Game()
    loadFromCsv().then((items) => {game.items = items}); 
    loadFromCsv().then(console.log);

    let itemA : MaterialItem, itemB : MaterialItem

  let state : GameState = GameState.NotStarted;
  let [flippedA, flippedB] = [false, false];

  const next = () => {
    [flippedA, flippedB] = [false, false];
    setTimeout(() => [itemA, itemB, state] = game.getnextPair(), 200);
  }

  const pickedA = () => {
    flippedA = true;
    setTimeout(() => flippedB = true, 300);
    game.submitAnswer(itemA, itemB)
  };

  const pickedB = () => {
    flippedB = true;
    setTimeout(() => flippedA = true, 300);
    game.submitAnswer(itemB, itemA)
  };


</script>

<main>
  {#if state == GameState.NotStarted }
    <h1>Carbon quiz</h1>
      <button class=big-button on:click="{next}">Start</button>
  {:else if state == GameState.Playing}
      <h2 class="question">Which of the following materials have the lowest CO2 emmisions?</h2>
      <div class="cards">
          <button class="transparent" on:click={pickedA}>
            <Card flipped={flippedA} item={itemA} />
          </button>
          <button class="transparent" on:click={pickedB}>
            <Card flipped={flippedB} item={itemB} />
          </button>
      </div>
      {#if flippedA && flippedB && state == GameState.Playing }
        <button class="big-button" on:click="{next}">Next question</button>
      {/if}
  {:else if state == GameState.Finished}
      <h1>Total score: {game.points}</h1>
  {/if}
</main>

<style>

    main {
        position:absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .big-button {
        font-size: 2em;
    }

    .transparent {
        background-color: transparent;
    }

    .cards {
        display: flex;
        justify-content: center;
        gap: 1em;
        width: 100%;
    }
</style>
