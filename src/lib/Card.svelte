<script lang="ts">
    interface MaterialItem {
        displayName: String,
        emmision: Number,
        flipped: Boolean,
    }


    let flipped = true;

</script>

<main class:flipped on:click="{() => flipped = !flipped}">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="card-backface-1.png" alt="side A"/>
        </div>
        <div class="flip-card-back">
          <img src="card-backface-2.png" alt="side B" />
        </div>
      </div>
    </div>
  </main>

<style>
  /* Flip card toggle */
  .flip-card {
    background-color: transparent;
    width: 240px;
    height: 360px;
    perspective: 1000px;
    cursor: pointer;
    user-select: none;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flipped .flip-card .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #2980b9;
    transform: rotateY(180deg);
  }
</style>
