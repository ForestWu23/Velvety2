# VelvetY — Animated Brand Portfolio Homepage

> React + Three.js + Canvas 构建的品牌代理机构首页。纯前端，静态托管，零后端依赖。

---

## 技术栈

| 分类 | 库 / 工具 |
|---|---|
| 框架 | React 18 + TypeScript |
| 构建 | Vite 5 |
| 3D | Three.js 0.185 |
| 动画 | GSAP 3（仅 Hero orb）、CSS transition、requestAnimationFrame |
| 路由 | React Router DOM v7 |
| 样式 | 纯 CSS（index.css）+ 内联 style prop |
| 部署 | GitHub Pages（`gh-pages` 包） |

---

## 目录结构

```
src/
├── components/
│   ├── ColorBends.tsx      # WebGL 光带背景（全局 fixed 层）
│   ├── LetterGlitch.tsx    # Canvas 字符故障效果（ReactBits 风格）
│   ├── Navigation.tsx      # 顶部导航栏
│   ├── WaveDivider.tsx     # Section 之间的弦状波浪分割线
│   └── WavesCanvas.tsx     # Hero 波纹网格背景
├── sections/
│   ├── Hero.tsx            # 第 1 屏：粒子球爆炸 + 钢琴帘入场动画
│   ├── SelectedWorks.tsx   # 第 2 屏：精选案例网格
│   ├── ShowcaseSection.tsx # 第 3 屏：黑色全屏 + 圆角窗口展示视频
│   ├── CylinderSection.tsx # 第 4 屏：Three.js 3D 柱状图片轮播
│   └── VideoSection2.tsx   # 第 5 屏：黑色全屏 + Letter Glitch 视频占位
├── pages/
│   └── HomePage.tsx        # 组装所有 Section，管理全局层级
├── App.tsx
├── main.tsx
└── index.css               # 全局样式 + CSS 自定义属性动画
```

---

## 页面设计详解

### Section 1 — Hero（黑色）

**文件：** `src/sections/Hero.tsx`

- **粒子球（Orb）**：2D canvas 上渲染数百个点组成的球形轮廓，支持鼠标视差和视差旋转。随滚动触发"爆炸"离散动画。
- **波纹网格（WavesCanvas）**：固定在背景的流体波纹，增加空间感。
- **分两阶段滚动**：
  1. 虚拟滚动阶段（页面 `scrollY` 保持在 0）：滚轮驱动 `virtualP` 从 0 → 0.62，触发粒子爆炸。
  2. 解锁后真实滚动：`virtualP >= 0.62` 后页面正常向下滚，钢琴帘（6 条黑色遮罩条）依次收起，白色页面渐现。
- **CSS 变量 `--p`**：`0 → 1` 驱动所有 Hero 内元素的淡出、爆炸、缩放动画（通过 `calc()` 直接在 CSS 中计算）。

---

### WaveDivider — 弦状波浪边界

**文件：** `src/components/WaveDivider.tsx`

- `position: fixed` canvas 跟踪两个 Section 之间的 anchor 元素，始终悬浮在边界处。
- 检测滚动速度，注入振幅（`amp`），每帧 `amp *= 0.91` 纯指数衰减——弦弹起后单次回落，不来回振荡。
- 使用驻波叠加（基频 + 二三次谐波），路径分隔上下两个 Section 的背景色。

---

### Section 2 — Selected Works（白色）

**文件：** `src/sections/SelectedWorks.tsx`

- `margin-top: -100vh` + `z-index: 2`：叠在 Hero 之上，Hero 滚动完毕后接管视口。
- 12 列 CSS Grid，2 行，6 个案例卡片（`large / medium / small` 三种尺寸）。
- 悬停时图片缩放 `scale(1.055)`，毛玻璃标签叠在角落。

---

### Section 3 — ShowcaseSection（黑色）

**文件：** `src/sections/ShowcaseSection.tsx`

- 全屏黑色 section（`overflow: hidden` 防止 `box-shadow` 溢出）。
- 居中一个圆角矩形，通过 `box-shadow: 0 0 0 9999px #000` 把矩形外部全涂黑，形成"窗口"效果。
- 窗口内目前展示一张 Unsplash 示意图，替换 `<img>` 为 `<video>` 即可接入真实视频。

---

### Section 4 — CylinderSection（白色）

**文件：** `src/sections/CylinderSection.tsx`

- Three.js（`alpha: true` renderer，背景透出白色 div）渲染 10 张照片围成圆柱。
- 每张面板是弯曲的 `PlaneGeometry`（逐顶点按圆弧偏移），形成真实曲面感。
- 交互：水平拖拽驱动 Y 轴旋转（`dx * 0.0068`），惯性通过 `autoVelocity` 衰减；松手后 `dragVelocity → autoVelocity`。
- 深度：正对相机的面板 `opacity = 1.0 + scale 1.1`，背面 `opacity = 0.22 + scale 0.78`，自动形成景深感。
- 左下角：eyebrow 徽章 + 大字标题（"Brands / *Redesign*"）+ 说明文案。
- 右侧画廊区域（58%宽）响应悬停 + 滚动旋转，左侧文案区不拦截页面滚动。

---

### Section 5 — VideoSection2（黑色）

**文件：** `src/sections/VideoSection2.tsx`

- 与 ShowcaseSection 相同的"窗口"布局。
- 当前内容：`LetterGlitch` canvas 效果作为占位背景。
- **替换方式**：删除 `<LetterGlitch />` 组件，替换为：
  ```jsx
  <video
    src="/your-video.mp4"
    autoPlay muted loop playsInline
    style={{ width:'100%', height:'100%', objectFit:'cover' }}
  />
  ```

---

### LetterGlitch 背景

**文件：** `src/components/LetterGlitch.tsx`

- 仿 [ReactBits letter-glitch](https://reactbits.dev/tools/background-studio?bg=letter-glitch) 效果。
- canvas 铺满容器，按 `FONT_SIZE = 16px` 切成字符网格，每格独立随机刷新字符和颜色。
- 外圈径向渐变（`outerVignette`）让边缘自然暗化融入黑色背景。

---

### ColorBends（全局 fixed 层）

**文件：** `src/components/ColorBends.tsx`

- WebGL fragment shader 渲染彩色光带，全局 `position: fixed; z-index: 1; pointer-events: none`。
- 仅在 ShowcaseSection 的矩形"窗口"内透出（其余 section 有实色背景覆盖）。
- 参数：`rotation=285°`，`colors=['#e83d0d', '#1e52bf', '#7cff67']`，`mouseInfluence=0.6`。

---

## 快速开始

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # 生产构建 → dist/
npm run deploy     # 构建 + 推送到 GitHub Pages
```

---

## 插入真实视频

1. 将视频文件放入 `public/` 目录，例如 `public/showreel.mp4`
2. 在 `src/sections/ShowcaseSection.tsx` 或 `VideoSection2.tsx` 中找到 `<img>` / `<LetterGlitch />` 替换为：
   ```jsx
   <video
     src="/showreel.mp4"
     autoPlay muted loop playsInline
     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
   />
   ```

---

## 层级说明（z-index 规划）

| 层 | z-index | 说明 |
|---|---|---|
| ColorBends | 1 | 全局固定彩带背景 |
| Selected Works | 2 | 白色案例网格，叠在 Hero 上 |
| ShowcaseSection / VideoSection2 | 3 | 黑色窗口 section |
| Hero / intro-scroll | 4 | 入场动画容器 |
| WaveDivider | 50 | 边界波浪，浮在所有 section 之上 |
| Navigation | 8 | 固定顶部导航 |
| Orb canvas | 7 | 粒子球（pointer-events: none） |

---

## License

MIT
