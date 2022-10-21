<template>
  <button v-on:click="connect()">connect</button>
</template>

<script>
import {DeviceController} from '@espruino-tools/device-controller'

const device = new DeviceController()

export default {
  name: 'App',
  methods: {
    connect(){
      device.connect(function(){
        alert('connected');
      })
    }
  }
}
</script>
