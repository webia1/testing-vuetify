<template>
  <div>
    <HelloWorld msg="Testing Vuetify Components"/>
    <Inputs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Inputs from '@/components/inputs/index.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Inputs,
  },
})
export default class Dashboard extends Vue {}
</script>
