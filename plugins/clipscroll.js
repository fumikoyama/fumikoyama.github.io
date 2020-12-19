import Vue from 'vue'

Vue.directive('clipscroll', {
  inserted(el, binding) {
    // クラス名が指定されている時だけ実施
    if (!('value' in binding && 'className' in binding.value)) {
      return
    }
    // イベント時に実行するコールバック関数
    const f = (evt) => {
      // すでにクラスが設定済みか確認
      if (!el.classList.contains(binding.value.className)) {
        // 要素のy座標をスクロール量を考慮して取得する
        const targetY = el.getBoundingClientRect().top + window.pageYOffset
        // スクロールのy座標が所定位置を超えていたらクラスを適用する
        if (window.scrollY > targetY - window.innerHeight) {
          el.classList.add(binding.value.className)
        }
      }
      // 登録済みの場合はイベントリスナーを削除
      if (el.classList.contains(binding.value.className)) {
        window.removeEventListener('load', f)
        window.removeEventListener('scroll', f)
      }
    }
    // クラス名が指定されている時だけイベントリスナーを登録する
    window.addEventListener('load', f)
    window.addEventListener('scroll', f)
  },
})
