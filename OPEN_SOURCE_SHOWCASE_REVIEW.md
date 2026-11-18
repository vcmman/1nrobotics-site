# Star Nav 开源展示评审

准备日期：2026-11-18

本次用户要求：建立独立分支、提交 PR 展示效果，评审通过后再合并发布。本分支不包含部署流程修改。

## 页面变化

- 首页保留原 YouTube 视频，在其下方增加开源展示卡片：项目介绍、真实 MuJoCo／RViz 截图、演示和 GitHub 按钮，以及 Product 页开源板块入口
- Product 页增加开源板块：架构、仿真指南、Quick start、交互场景、许可说明入口
- 全站页脚增加 Star Nav 仓库链接；不增加挤占手机空间的顶栏导航项
- 完整英文与中文使用现有语言切换；共享资源版本更新为 CSS v14、i18n v18

## 文案与事实范围

项目名称按仓库使用 Star Nav；现有产品品牌 StarNav 保留。开源内容聚焦无人机探索和仿真工作空间，不把产品面向其他本体的能力描述为已在本仓库开放。

浏览器交互场景运行物理仿真，并使用已记录的规划指令；不是在网页里运行 EGO-Planner。避免把项目页演示解释为浏览器中完整的在线导航系统。

不使用未经复现的“五分钟上手”、泛化成功率或任意硬件即插即用承诺。公开主分支与传感器专用硬件分支分开描述。许可入口保留上游项目与混合许可说明。

## 来源与素材

- [根 README](https://github.com/1nrobotics/star-nav#readme)
- [项目页与演示](https://1nrobotics.github.io/star-nav/)
- [硬件范围](https://github.com/1nrobotics/star-nav/blob/main/docs/HARDWARE.md)
- [仿真指南](https://github.com/1nrobotics/star-nav/blob/main/docs/SIMULATION.md)
- [许可与上游说明](https://github.com/1nrobotics/star-nav/blob/main/docs/LICENSES.md)
- 图片 `other-images/star-nav/exploration-demo.jpg` 原样取自 [仓库截图](https://github.com/1nrobotics/star-nav/blob/main/site/assets/exploration-demo.jpg)，1692 × 540；非生成图像

## 本地查看

在仓库根目录运行 `python3 -m http.server 8765 --bind 127.0.0.1`，访问：

- `http://127.0.0.1:8765/index.html#open-source`
- `http://127.0.0.1:8765/product.html#open-source`

已检查桌面、390px 和 320px 的双语布局、图片加载及跨页面语言偏好。截图随当前聊天交付。正式网站保持现状，发布由后续评审决定。
