// initial state
const state = () => ({
  count: 1234
})

const getters = {
  compareCount: (state) => state.count === 1234,
  ifCountIsBigger: (state) => (value) => {
    return state.count > value ? true : false
  },
}

const mutations = {
  countAddOne: (state) => {
    state.count++
  }
}

const actions = {
  addOneAction: ( {commit, state}) => { 
    console.log(`b4 state ${JSON.stringify(state)}`)
    commit('countAddOne')
    console.log(`after state ${JSON.stringify(state)}`)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}