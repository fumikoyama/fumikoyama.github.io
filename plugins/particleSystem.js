import Vue from 'vue'

Vue.prototype.$particleSystem = (
  id,
  count,
  maxCount = count * 2,
  colors,
  particleMinSize,
  particleMaxSize,
  particleBaseSpeed
) => {
  {
    class Particle {
      constructor(x, y, w, h, color, speed) {
        // 座標
        this.x = x
        this.y = y
        // サイズ
        this.w = w
        this.h = h
        // 色
        this.color = color
        // 塗りつぶすか
        this.isTouched = false
        // ランダムな角度
        const rot = Math.random() * 360
        const angle = (rot * Math.PI) / 180
        // 移動方向
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
      }
      draw(ctx) {
        // パスをリセット
        ctx.beginPath()
        if (this.isTouched) {
          ctx.fillStyle = this.color
          ctx.fillRect(this.x, this.y, this.w, this.h)
        } else {
          ctx.strokeStyle = this.color
          ctx.strokeRect(this.x, this.y, this.w, this.h)
        }
      }
      contains(x, y) {
        const a = x > this.x
        const b = x < this.x + this.w
        const c = y < this.y + this.h
        const d = y > this.y
        return a && b && c && d
      }
    }
    // 画面サイズが変更された時の処理
    const resize = () => {
      const canvasWrap = document.getElementById(id).parentElement
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
        p.x += p.vx
        p.y += p.vy
        // // 画面外に出たら座標位置を調整する
        if (p.x < -10) {
          p.x = ctx.canvas.width + 5
        }
        if (p.x > ctx.canvas.width + 10) {
          p.x = 5
        }
        if (p.y < -10) {
          p.y = ctx.canvas.height + 5
        }
        if (p.y > ctx.canvas.height + 10) {
          p.y = 5
        }
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
          const size =
            Math.floor(Math.random() * (particleMaxSize - particleMinSize)) +
            particleMinSize
          particles.push(
            new Particle(
              x - size / 2,
              y - size / 2,
              size,
              size,
              colors[~~(Math.random() * colors.length)],
              particleBaseSpeed
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
    // キャンバスの作成
    const canvas = document.createElement('canvas')
    // コンテキストの取得
    const ctx = canvas.getContext('2d')
    // キャンバスサイズを親要素に合わせて変更
    resize()
    // パーティクル配列の作成
    const particles = [...Array(count)].map((_) => {
      const size =
        Math.floor(Math.random() * (particleMaxSize - particleMinSize)) +
        particleMinSize
      return new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        size,
        size,
        colors[~~(Math.random() * colors.length)],
        particleBaseSpeed * (particleMinSize / size)
      )
    })
    // ループ処理
    loop()
    // イベントの登録
    registration()
    // 要素に作成したキャンバスを追加
    document.getElementById(id).appendChild(canvas)
  }
}