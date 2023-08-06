<template>
  <div>
    Test Component {{ msg }} {{ computedCount }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TestComponent',
  props: {
    msg: String
  },
  mounted() {
    console.log(this.computedCount)
    console.log(`getters ${this.computedCompareCount}`)
  },
  computed: {
    ...mapState({
      computedCount: state => state.test2.count
    }),
    ...mapGetters('test2', {
      computedCompareCount: 'compareCount',
    }),
  }
}
</script>