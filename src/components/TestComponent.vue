<template>
  <div>
    Test Component {{ msg }} {{ computedCount }}
    <button @click="addOne">Add 1</button>
    <button @click="minus(2)">Minus 2</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TestComponent',
  props: {
    msg: String
  },
  mounted() {
    console.log(this.computedCount)
    console.log(`getters ${this.computedCompareCount}`)
    console.log(`getters with parameter ${this.computedIfCountIsBigger}`)
  },
  computed: {
    ...mapState({
      computedCount: state => state.test2.count
    }),
    ...mapGetters('test2', {
      computedCompareCount: 'compareCount'
    }),
    computedIfCountIsBigger() {
      return this.$store.getters['test2/ifCountIsBigger'](1000)
    }
  },
  methods: {
    ...mapMutations('test2', {
      add: 'countAddOne',
      minusCount: 'countMinus'
    }),
    addOne() {
      // this.add()
      this.$store.dispatch('test2/addOneAction')
    },
    minus(deduct) {
      console.log(`minus ${deduct}`)
      // this.minusCount(deduct)
      this.$store.dispatch('test2/minusAction', {deduct:3})
    }
  }
}
</script>