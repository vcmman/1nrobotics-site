# 技术博客阅读与归档指南

更新日期：2026-11-16

技术分析按主题与阅读顺序组织；发布日期保留原值。以下目录覆盖 17 篇现有技术文章。主题与序号用于导航，不代表模型排名，也不表示旧文在本次重新做过事实核查。周报继续独立归档并按日期倒序排列。

## 编排原则

- 首先按读者的问题选择主题，再在主题内按基础、比较、系统或后续研究的关系排序
- 每篇技术文章在目录中只列一次；跨主题关系通过文末链接补充
- 目录短标题与一句导读用于区分文章职责，文章正式标题、来源和正文结论保持原意
- 综合比较与早期专题共同保留：HumanWAM／GR00T 2 综合比较作为模型路线入口，HumanScale 与 GR00T 单篇负责各自细节
- Ropedia W0 是模型与数据基础，Xperience 2 是后续数据工厂分析；两篇互链，避免读者当成同一介绍
- BEVFormer／UniAD 演进、Compass 系统分析与一年规划分别承担背景、案例和提案；规划不能当作已实现成果

## 主题与推荐顺序

### 空间感知与导航

目录锚点：`blog.html#spatial-navigation`

建立几何证据，连接决策，再规划导航试点

1. [DUSt3R → Pi3X → MapAnything，与 ViewCrafter](posts/dust3r-pi3x-mapanything-viewcrafter-3d-robotics.html) — 几何基础：使用重建世界前，先区分观测几何与生成外观
2. [BEVFormer → UniAD → WorldEngine 与 SimScale](posts/bevformer-uniad-worldengine-simscale-robotics.html) — 技术演进：从空间表征追到规划与交互数据生成
3. [Compass 1：相机、几何标签与记忆](posts/compass1-camera-geometry-memory-navigation.html) — 系统分析：拆解导航系统、真机评测与剩余部署问题
4. [从 Pi3X 几何到持续导航：一年路线](posts/bevformer-uniad-pi3x-compass-one-year-roadmap.html) — 研究路线建议：将前述思路转为分阶段实验与明确决策门槛

### 数据采集与仿真

目录锚点：`blog.html#data-simulation`

从可用示范出发，考察数据工厂与合成训练

1. [Specialist 与 UMI 数据采集路线](posts/umi-specialist-data-collection-device-comparison.html) — 设备比较：从同步、感知、成本与机器人执行比较十三种接口
2. [W0 之后的 Ropedia：Xperience 2 与可复用世界](posts/ropedia-xperience2-data-model-industry.html) — 后续分析：围绕采集、重建、数据复用与产业评测的后续分析
3. [MuJoCo 4：仿真的产业价值](posts/mujoco-4-industrial-value.html) — 工程评估：通过集成、验证及真机试验成本判断仿真价值
4. [Apple HALO：模块化合成数据管线](posts/apple-halo-humanoid-control-analysis.html) — 管线分析：拆解场景生成、渲染、动作训练及其迁移边界

### 世界动作模型

目录锚点：`blog.html#world-action-models`

先读综合比较，再深入单项模型与数据研究

1. [HumanWAM 对比 GR00T 2：架构、数据与部署](posts/humanwam-groot2-wam-comparison.html) — 建议先读：总览 WAM 流派、可比基准与后训练选择
2. [HumanScale 与 HumanWAM：人类数据路线](posts/humanscale-humanwam-analysis.html) — 专题研究：人类视频扩展与机器人对齐
3. [GR00T 2：适配、恢复与运行时](posts/nvidia-gr00t-2-wam-analysis.html) — 模型深析：在跨模型比较后，深入 NVIDIA 系统的工程细节
4. [Ropedia W0：数据与跨本体预测](posts/ropedia-w0-data-model-analysis.html) — 模型与数据研究：理解后续 Xperience 2 分析所需的 W0 基础

### 控制与灵巧操作

目录锚点：`blog.html#control-dexterity`

从全身精度走向接触、抓取与灵巧手学习

1. [Anchor1、SONIC 与 SuperMimic](posts/anchor1-sonic-supermimic-control-analysis.html) — 控制比较：比较跟踪接口、动作数据、精度与训练成本
2. [从 Sharpa 看 CoRL 2026 灵巧操作](posts/corl-2026-dexterous-hands-sharpa.html) — 研究综述：借助共同硬件，比较数据、接触与学习选择

### Agentic 机器人

目录锚点：`blog.html#agentic-robotics`

区分任务智能体、预测策略与改进它们的反馈循环

1. [Agentic 机器人：NVIDIA 与 TinyAstral](posts/agentic-robotics-nvidia-rsi-tinyastral.html) — 系统总览：从系统层面理解导航、操作与策略迭代开发
2. [Agentic WAM、MoT 与灵巧控制](posts/nvidia-agentic-wam-mot-dexterity-analysis.html) — 架构研究：检查技能程序、世界预测与快速控制之间的接口
3. [GPT-6 Astra 与机器人系统分工](posts/gpt6-astra-robotics-new-stack.html) — 早期视角：通用模型、VLA／WAM 策略与控制的分工

## 后续新增文章如何维护

1. 先读本指南和研究记忆，确定已有专题是否已覆盖同一问题
2. 将新技术文章插入对应主题的合适位置，按阅读依赖排序；不要恢复全站“最新置顶＋混合归档”结构
3. 更新主题跳转计数与技术分析总数；每篇在主题列表中唯一出现，周报仍放在 Weekly briefings
4. 更新同主题相邻文章的文末上一篇／下一篇和返回主题链接；从模板复制时替换旧的 `series-navigation`，避免带入无关主题
5. 维护本指南与研究记忆索引、完整双语及资源缓存版本
6. 新发布文章才新增 RSS 条目；单纯目录排序不改旧条目发布日期，不重新发送旧文章
7. 测试主题锚点、相邻链接、双语偏好与手机布局；未来每周自动任务也遵循同一目录结构
