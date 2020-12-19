export const state = () => ({
  image: '',
  description: '',
  isActive: false,
})

export const mutations = {
  // 表示する画像の設定
  setImage(state, image) {
    state.image = image
  },
  // 表示する説明文の設定
  setDescription(state, description) {
    state.description = description
  },
  // モーダル表示時の設定
  active(state) {
    state.isActive = true
  },
  // モーダル非表示時の設定
  deactive(state) {
    state.isActive = false
  },
}

export const actions = {
  // モーダルを表示する
  openModal({ commit }, payload) {
    commit('setImage', payload.image)
    commit('setDescription', payload.description)
    commit('active')
  },
  // モーダルを非表示にする
  closeModal({ commit }) {
    commit('deactive')
    commit('setImage', '')
    commit('setDescription', '')
  },
}
