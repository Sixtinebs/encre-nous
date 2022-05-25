<template>
  <display-message :key="key"></display-message>
  <add-message @new-message="updateDiscussion"></add-message>
</template>

<script>
import DisplayMessage from '../components/messaging/DisplayMessage.vue';
import AddMessage from '../components/messaging/AddMessage.vue';

export default {
  components: {
    DisplayMessage,
    AddMessage

  },
  data() {
    return {
      key: 0,
    }
  },
  methods: {
    updateDiscussion() {
      this.key++;
    }
  }


}
</script>

<style>
</style>