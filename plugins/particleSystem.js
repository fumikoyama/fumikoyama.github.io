import Vue from 'vue'

/**
 * パーティクルを生成する関数
 * @param {string} id 親要素のID
 * @param {number} count パーティクル数
 * @param {number} maxCount 最大パーティクル数（未指定の場合はパーティクル数の2倍）
 * @param {string} colors パーティクルに適用するカラーの配列
 * @param {number} particleMinSize パーティクルの最小サイズ
 * @param {number} particleMaxSize パーティクルの最大サイズ
 * @param {number} particleBaseSpeed パーティクルが移動する時のベースとなるスピード
 */
const particleSystem = (
  id,
  count,
  maxCount = count * 2,
  colors,
  particleMinSize,
  particleMaxSize,
  particleBaseSpeed
) => {
  // ランダムなサイズを取得する関数
  const randomSize = () =>
    Math.floor(Math.random() * (particleMaxSize - particleMinSize)) +
    particleMinSize
  // ランダムな移動方向を取得する関数
  const randomVector = (size) => {
    // 角度
    const rot = Math.random() * 360
    const angle = (rot * Math.PI) / 180
    // サイズで移動スピードを変更
    const speed = particleBaseSpeed * (particleMinSize / size)
    return new Vector(Math.cos(angle) * speed, Math.sin(angle) * speed)
  }
  // 画面サイズが変更された時の処理
  const resize = () => {
    const canvasWrap = el.parentElement
    // canvasにコンテンツサイズをセット
    canvas.setAttribute('width', canvasWrap.offsetWidth)
    canvas.setAttribute('height', canvasWrap.offsetHeight)
  }
  // 描画ループ処理
  const loop = () => {
    requestAnimationFrame(loop)
    // 描画をクリアー
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    particles.forEach((p) => {
      // パーティクルを移動
      p.move()
      // 画面外に出たら座標位置を調整する
      p.adjust(ctx)
      // 描画する
      p.draw(ctx)
    })
  }
  // イベント登録処理
  const registration = () => {
    const onClick = (e) => {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.x
      const y = e.clientY - rect.y
      // 追加されたパーティクル数が指定数未満の場合はパーティクルを追加
      if (particles.length < maxCount) {
        const size = randomSize()
        particles.push(
          new Particle(
            x - size / 2,
            y - size / 2,
            size,
            size,
            colors[~~(Math.random() * colors.length)],
            randomVector(size)
          )
        )
      }
      // マウス座標を元にパーティクルの状態を更新
      particles.forEach((p) => {
        p.isTouched = p.contains(x, y)
      })
    }
    const onMouseOver = (e) => {
      canvas.addEventListener('mousemove', onMouseMove, false)
    }
    const onMouseOut = (e) => {
      canvas.removeEventListener('mousemove', onMouseMove, false)
      // パーティクルの状態をクリア
      particles
        .filter((p) => p.isTouched)
        .forEach((p) => {
          p.isTouched = false
        })
    }
    const onMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.x
      const y = e.clientY - rect.y
      // マウス座標を元にパーティクルの状態を更新
      particles.forEach((p) => {
        p.isTouched = p.contains(x, y)
      })
    }
    window.addEventListener('resize', resize)
    canvas.addEventListener('click', onClick, false)
    canvas.addEventListener('mouseover', onMouseOver, false)
    canvas.addEventListener('mouseout', onMouseOut, false)
  }
  // 初期設定
  window.requestAnimationFrame = (() => {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
  // キャンバスを追加する対象の要素
  const el = document.getElementById(id)
  // キャンバスの作成
  const canvas = document.createElement('canvas')
  // コンテキストの取得
  const ctx = canvas.getContext('2d')
  // キャンバスサイズを親要素に合わせて変更
  resize()
  // パーティクル配列の作成
  const particles = [...Array(count)].map((_) => {
    const size = randomSize()
    return new Particle(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      size,
      size,
      colors[~~(Math.random() * colors.length)],
      randomVector(size)
    )
  })
  // ループ処理
  loop()
  // イベントの登録
  registration()
  // 要素に作成したキャンバスを追加
  el.appendChild(canvas)
}

/**
 * 四角形クラス
 */
class Rect {
  /**
   * コンストラクタ
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {number} w 幅
   * @param {number} h 高さ
   */
  constructor(x, y, w, h) {
    // 座標
    this.x = x
    this.y = y
    // サイズ
    this.w = w
    this.h = h
  }
  /**
   * 四角形の左辺のx座標
   */
  get left() {
    return this.x
  }
  /**
   * 四角形の右辺のx座標
   */
  get right() {
    return this.x + this.w
  }
  /**
   * 四角形の上辺のy座標
   */
  get top() {
    return this.y
  }
  /**
   * 四角形の底辺のy座標
   */
  get bottom() {
    return this.y + this.h
  }
  /**
   * 四角形の位置
   */
  get location() {
    return new Vector(this.x, this.y)
  }
  /**
   * 指定された点が四角形に含まれるか
   * @param {number} x x座標
   * @param {number} y y座標
   * @returns {boolean} 指定された点が四角形に含まれるかどうかの値
   */
  contains(x, y) {
    return x > this.left && x < this.right && y < this.bottom && y > this.top
  }
}

/**
 * 移動方向のクラス
 */
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

/**
 * パーティクルクラス
 */
class Particle {
  constructor(x, y, w, h, color, vector) {
    this.rect = new Rect(x, y, w, h)
    // 色
    this.color = color
    // 塗りつぶすか
    this.isTouched = false
    // 移動方向
    this.vector = vector
  }
  /**
   * パーティクルを描画する
   * @param {CanvasRenderingContext2D} ctx コンテキスト
   */
  draw(ctx) {
    // パスをリセット
    ctx.beginPath()
    if (this.isTouched) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h)
    } else {
      ctx.strokeStyle = this.color
      ctx.strokeRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h)
    }
  }
  /**
   * 指定された点がパーティクルに含まれるか
   * @param {number} x x座標
   * @param {number} y y座標
   * @returns {boolean} 指定された点がパーティクルに含まれるかどうかの値
   */
  contains(x, y) {
    return this.rect.contains(x, y)
  }
  /**
   * パーティクルを移動する
   * @param {Vector} location パーティクルを表示する位置（省略時は内部で保持している座標位置）
   * @param {Vector} vector パーティクルの移動方向（省略時は内部で保持している移動方向）
   */
  move(location = this.rect.location, vector = this.vector) {
    this.rect.x = location.x + vector.x
    this.rect.y = location.y + vector.y
  }
  /**
   * パーティクルの座標を調整する
   * @param {CanvasRenderingContext2D} ctx コンテキスト
   */
  adjust(ctx) {
    const screenOffset = 10
    const offset = 5
    if (this.rect.right < -screenOffset) {
      this.rect.x = ctx.canvas.width + offset
    }
    if (this.rect.left > ctx.canvas.width + screenOffset) {
      this.rect.x = -(this.rect.w + offset)
    }
    if (this.rect.bottom < -screenOffset) {
      this.rect.y = ctx.canvas.height + offset
    }
    if (this.rect.top > ctx.canvas.height + screenOffset) {
      this.rect.y = -(this.rect.h + offset)
    }
  }
}

// Vue インスタンスに注入
Vue.prototype.$particleSystem = particleSystem
