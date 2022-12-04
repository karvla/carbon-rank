<script lang="ts">
  import Card from './lib/Card.svelte'
    import type { MaterialItem } from './lib/material-iteam';


  let itemA : MaterialItem = {
      displayName: "A",
      emmision: 0,
  };

  let itemB : MaterialItem = {
      displayName: "B",
      emmision: 0,
  }
</script>

<main>
  <div>
  </div>
  <h1>Testing Carbon Rank!</h1>

  <div class="cards">
      <Card item={itemA} />
      <Card item={itemB} />
  </div>

</main>

<style>

    main {
        width: 100%;
    }
    .cards {
        display: flex;
        justify-content: space-evenly;
        gap: 1em;
        width: 100%;
    }
</style>
