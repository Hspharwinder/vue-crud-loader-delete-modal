<template>
   
    <div class="container">
        <router-link to="/">
        <button class="mt-2 mb-3 btn btn-success">Home</button>
      </router-link><br>
        <h1>All Loader</h1>
        
        pulse<pulse-loader
                :loading="loading" 
                :color="color" 
                :size="size"
            > 
            </pulse-loader><br>
        grid  <grid-loader :loading="loading" :color="color" :size="size"></grid-loader><br>                
        clip  <clip-loader :loading="loading" :color="color" :size="size"></clip-loader><br>                
        rise  <rise-loader :loading="loading" :color="color" :size="size"></rise-loader><br>
        beat  <beat-loader :loading="loading" :color="color" :size="size"></beat-loader><br>
        sync    <sync-loader :loading="loading" :color="color" :size="size"></sync-loader><br>
        rotate   <rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader><br>
        fade  <fade-loader :loading="loading" :color="color" :height="height" :width="width"></fade-loader><br>
        pacman   <pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader><br>
        square   <square-loader :loading="loading" :color="color" :size="size"></square-loader><br>
        scale    <scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader><br>
        skew    <skew-loader :loading="loading" :color="color" :size="size"></skew-loader><br>
        moon    <moon-loader :loading="loading" :color="color" :size="size"></moon-loader><br>
        ring    <ring-loader :loading="loading" :color="color" :size="size"></ring-loader><br>
        bounce    <bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader><br>       
        dot    <dot-loader :loading="loading" :color="color" :size="size"></dot-loader><br>
    </div>
        
  </template>
  
  <script>
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import GridLoader from 'vue-spinner/src/GridLoader.vue'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
  import RiseLoader from 'vue-spinner/src/RiseLoader.vue'
  import BeatLoader from 'vue-spinner/src/BeatLoader.vue'
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
  import RotateLoader from 'vue-spinner/src/RotateLoader.vue'
  import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
  import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'
  import SquareLoader from 'vue-spinner/src/SquareLoader.vue'
  import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
  import SkewLoader from 'vue-spinner/src/SkewLoader.vue'
  import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
  import RingLoader from 'vue-spinner/src/RingLoader.vue'
  import BounceLoader from 'vue-spinner/src/BounceLoader.vue'
  import DotLoader from 'vue-spinner/src/DotLoader.vue'



  export default {
    name: 'AllLoader',
    components:{
        PulseLoader,
        GridLoader,
        ClipLoader,
        RiseLoader,
        BeatLoader,
        SyncLoader,
        RotateLoader,
        FadeLoader,
        PacmanLoader,
        SquareLoader,
        ScaleLoader,
        SkewLoader,
        MoonLoader,
        RingLoader,
        BounceLoader,
        DotLoader
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  