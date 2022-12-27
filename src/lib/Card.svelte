<script lang="ts">
    import type { MaterialItem } from "./material-item";

  export let item : MaterialItem = {
       category: undefined,
       productName: undefined,
       production: undefined,
       transportDistanceKm: undefined,
       maintenance: undefined,
       liquidate: undefined,
       lifeCycle10y: undefined,
       lifeCycle70y: undefined
   };

    export let flipped = false;

</script>

<main class:flipped >
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h4>{item.productName}</h4>
            </div>
            <div class="flip-card-back">
                <h4>{item.lifeCycle10y}</h4>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        width: 20em;
    }
    /* Flip card toggle */
    .flip-card {
        aspect-ratio: 1 / 1.61;
        background-color: transparent;
        perspective: 1000px;
        cursor: pointer;
        user-select: none;
    }

    .flip-card-inner {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }

    .flipped .flip-card .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        border-radius: 15px;
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
