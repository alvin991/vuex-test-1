<template>
  <div>
    Test Component {{ msg }} {{ computedCount }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TestComponent',
  props: {
    msg: String
  },
  mounted() {
    console.log(this.computedCount)
  },
  computed: {
    ...mapState({
      computedCount: state => state.test2.count
    })
  }
}
</script>