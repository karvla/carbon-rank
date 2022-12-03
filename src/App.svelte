<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Card from './lib/Card.svelte'
</script>

<main>
  <div>
  </div>
  <h1>Testing Carbon Rank!</h1>

  <div class="card">
    <Card />
    <Card />
  </div>

</main>

<style>
    .card {
        display: flex;
        gap: 2em;
    }
</style>
