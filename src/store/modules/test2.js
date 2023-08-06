// initial state
const state = () => ({
  count: 1234
})

// const getters = (state) => ({
//   compareCount() {
//     return state.count === 1234
//   }
// })

const getters = {
  compareCount: (state) => state.count === 1234,
  ifCountIsBigger: (state) => (value) => {
    return state.count > value ? true : false
  },
}

export default {
  namespaced: true,
  state,
  getters
}