# 博客内容与研究分析记忆

更新日期：2026-11-15

这份文档保存已经写过什么、分析了哪些工作、哪些结论必须连同条件保留，以及后续值得继续追的问题。它是选题与论证索引，不是重新验证过的最新事实库。以下概括来自仓库现有文章；模型名称、发布状态、数字、许可和代码开放情况在再次引用或更新时，都要回到原始来源重新核验。

写新文章前先阅读 [博客编辑原则](BLOG_EDITORIAL_GUIDELINES.md)，并检索本文件避免重复选题。页面与发布约定见 [网页修改记忆](WEBSITE_EDITING_GUIDELINES.md)。

## 已有文章索引

| 日期 | 文章 | 主要对象 | 分析切入点 |
| --- | --- | --- | --- |
| 2026-11-15 | [BEVFormer／UniAD 到 Pi3X／Compass 一年路线](posts/bevformer-uniad-pi3x-compass-one-year-roadmap.html) | BEVFormer、UniAD、Pi3X、Compass 1、MapAnything | 规划导向接口、离线几何教师、因果消融、五阶段门槛与有限试点 |
| 2026-11-14 | [Compass 1 相机、几何与导航](posts/compass1-camera-geometry-memory-navigation.html) | Archon Compass 1、Pi3、MoGe-2、Cosmos3-Edge-4B | 离线几何与在线历史地图、问答监督、真机分母、异步吞吐与部署依赖 |
| 2026-11-14 | [BEVFormer 到 WorldEngine／SimScale](posts/bevformer-uniad-worldengine-simscale-robotics.html) | BEVFormer、UniAD、WorldEngine、自动驾驶 SimScale | 空间表征、规划查询、交互经验、后训练、反事实数据与机器人迁移 |
| 2026-11-14 | [Anchor1／SONIC／SuperMimic](posts/anchor1-sonic-supermimic-control-analysis.html) | Anchor1 v1、SONIC v4、SuperMimic v2 | 稀疏目标、解码器误差反馈、精细真机跟踪、训练集覆盖与算力成本 |
| 2026-11-14 | [Ropedia 最新数据与模型路线](posts/ropedia-xperience2-data-model-industry.html) | Xperience 2、EgoX、Holi-World、W0、DONIC、A0／ETM | 真实开放范围、配准质量、模型分工、仿真轨迹验收与产业成本 |
| 2026-11-13 | [第 46 周具身智能周报](posts/embodied-ai-weekly-2026-11-13.html) | AMP1、RoboScript／WICL、MR0 v3、NVIDIA CoRL 平台 | 纠错数据、演练记忆、恢复权限、实际耗时与复现成本 |
| 2026-11-13 | [Ropedia W0 数据与模型分析](posts/ropedia-w0-data-model-analysis.html) | Xp-Data、Xp-Teleop、Ropedia W0 5B/A14B、FastWAM 初始化 | 采集与人工标注、同步字段、跨本体预测、控制迁移和复现成本 |
| 2026-11-12 | [HumanWAM 到 GR00T 2 深度对比](posts/humanwam-groot2-wam-comparison.html) | HumanWAM 两个配置、GR00T 2、Zero-WAM、DreamZero、两项 OpenWAM、EgoWAM、GEN-1.5 | 架构、视角与动作对齐、可比评测、后训练与部署 |
| 2026-11-12 | [Agentic 机器人与 TinyAstral RSI](posts/agentic-robotics-nvidia-rsi-tinyastral.html) | COMPASS、Vesta、ASPIRE、ENPIRE、AW-0、GR00T 2、TinyAstral | 运行与开发智能体、框架改进、策略更新、蒸馏与全成本 |
| 2026-11-06 | [触觉反应、现场可靠性与协作学习周报](posts/embodied-ai-weekly-2026-11-06.html) | T-Rex、Stretch Gen 2、Sidekick、灵巧手综述 | 分层智能与现场反馈 |
| 2026-11-07 | [HumanScale 与 HumanWAM](posts/humanscale-humanwam-analysis.html) | DA Group 的人类视频到机器人路线 | 数据配方、本体对齐、零样本与后训练 |
| 2026-11-07 | [Agentic WAM、MoT 与灵巧手](posts/nvidia-agentic-wam-mot-dexterity-analysis.html) | AW-0、EgoScale、T-Rex、DexTacWAM、Dexplore | 多模态专家、技能组合与接触闭环 |
| 2026-11-07 | [GPT-6 Astra 与机器人路线更新](posts/gpt6-astra-robotics-new-stack.html) | 直接控制、RoboICL、ASPIRE、ENPIRE、RoboHarm 等 | 通用模型进入控制回路后的系统分工 |
| 2026-11-12 | [GR00T 2](posts/nvidia-gr00t-2-wam-analysis.html) | WAM、X-Adapt、Agentic GR00T、Turbo | 数据规模、适配成本、恢复与端侧延迟 |
| 2026-11-12 | [MuJoCo 4 的产业价值](posts/mujoco-4-industrial-value.html) | 仿真、Studio、训练与数字资产 | 可靠性相同时能否降低试验与集成成本 |
| 2026-11-12 | [Apple HALO 人形控制](posts/apple-halo-humanoid-control-analysis.html) | 数据生成、场景与渲染、动作生成器、跟踪器 | 模块化数据工厂与生成式渲染边界 |
| 2026-11-12 | [CoRL 2026 灵巧手与 Sharpa](posts/corl-2026-dexterous-hands-sharpa.html) | Play2Perfect、OpenDexGrasp、DEX-X、WM-Craftnet、Touch2Trace | 同一硬件下的数据、触觉、控制与泛化差异 |

`posts/my-first-post.html` 是历史占位文章，不计入研究分析，也不作为技术结论来源。

## 1. 触觉反应、现场可靠性与协作学习周报

内容简介：从四项进展说明机器人能力依赖高层模型、反应控制、硬件与运营之间的接口。

- T-Rex：文章记录约 5Hz 的视觉语言动作生成与约 20Hz 的触觉修正。关注点是较快的触觉反馈能否处理滑移、压力与形变，不将高层策略频率写成触觉回路频率
- Stretch Gen 2：以现场运行经验如何反过来改变产品设计为主线，区别长期使用反馈与实验室演示
- Sidekick：协作学习与适配工具属于团队工作流，不能直接当作机器人泛化能力的证据
- 灵巧手综述：从执行器、传感器、数据到评测共同分析，避免只比较策略架构

保留判断：分层智能是文章的综合解释，不代表这些工作已被集成为同一个系统。

后续跟踪：触觉回路的端到端延迟、接触失败恢复，以及现场维护和人工干预数据。

来源入口：[T-Rex](https://www.dexmate.com/research/t-rex)、[Stretch Gen 2](https://bostondynamics.com/news/boston-dynamics-launches-next-generation-stretch-robot)、[Sidekick](https://www.sidekickrobotics.ai/news)、[灵巧手综述](https://arxiv.org/abs/2611.06724)。

## 2. DA Group：HumanScale → Open-HumanScale／HumanWAM

内容简介：先解释人类第一视角视频为何值得用于预训练，再分析统一动作表示、人机联合训练及目标图像条件如何把经验落到机器人上。

- HumanScale 的重点是受控比较人类视频与真机数据的预训练价值，不只是数据更多
- Open-HumanScale／HumanWAM 文章记录 50,000 小时开放配方；后续比较须核对视频来源、动作标注、筛选流程与开放范围
- HumanWAM-Vanilla 与 HumanWAM-Goal 分别用于讨论预训练迁移和视觉目标条件，不能混为同一评测设置
- 已有文章明确区分：92.70% 与 84.60% 属于后训练结果；13.94% 是其记录的真正不使用目标任务演示的零样本平均结果。引用必须保留任务集合与训练条件

保留判断：人类数据提供广泛先验，机器人数据仍承担本体对齐、接触校准与安全验证。视觉上合理的预测不能证明摩擦、力和柔性接触可执行；局部 scaling law 不能外推为任意场景的通用性。

后续跟踪：跨本体对齐成本、零样本失败类型、目标图像获取方式，以及新增真机数据的边际收益。

来源入口：[官方项目](https://dagroup-pku.github.io/open-humanscale/)、[HumanScale](https://arxiv.org/abs/2606.20521)、[Open-HumanScale](https://arxiv.org/abs/2611.06817)、[代码](https://github.com/DAGroup-PKU/HumanNet/tree/open-humanscale)。

## 3. NVIDIA 参与的 Agentic WAM／MoT 与灵巧手路线

内容简介：从未来视频与动作联合生成，推进到可复用技能程序，解释代码、视频和动作专家如何协作。

- AW-0：分析 Agentic WAM 的技能程序与控制逻辑；MoT 是不同模态 Transformer 专家之间的结构分工，不能笼统等同于通用 MoE 路由
- EgoScale：作为人类视频扩展数据的相关路线，不把它与 AW-0 当作同一个训练系统
- T-Rex 与 DexTacWAM：用于比较触觉反应和视觉触觉预测，关注触觉是否真正进入部署闭环
- Dexplore：提供仿真、动作参考与强化学习优先的对照，不生成未来视频也可以获得有用技能

保留判断：视频质量不能替代控制成功率。文章提出慢速任务智能体、中速动作／世界模型、高速触觉与稳定控制的组合，这是系统设计判断，不是各论文已经共同验证的产品架构。

后续跟踪：MoT 跨模态一致性、技能调用和验证失败、训练与推理预算，以及触觉消融是否真正改变接触任务表现。

来源入口：[AW-0 项目](https://agentic-wam.github.io/)、[AW-0 论文](https://arxiv.org/abs/2610.30136)、[EgoScale](https://research.nvidia.com/labs/gear/egoscale/)、[DexTacWAM](https://arxiv.org/abs/2609.24976)、[Dexplore](https://research.nvidia.com/labs/srl/projects/dexplore/)。

## 4. GPT-6 Astra 之后的机器人路线更新

内容简介：现有文章讨论通用模型直接输出部分低频机器人动作、上下文学习，以及生成／修复技能的 Agentic 路线，并重新安排 VLA、WAM 和经典控制的职责。

- 直接控制相关工作：关注开放语义与场景变化，同时记录精密接触、快速反应和复杂双臂任务的边界
- RoboICL：关注上下文示例带来的临时适配，区分上下文学习、参数微调和目标任务数据依赖
- ASPIRE、ENPIRE、LAW 与 AW-0：分别用于技能、策略更新和预测路线比较，不能用“会规划”代替执行闭环
- RoboHarm：用于讨论模型文字安全与物理动作安全之间的差距，强调独立动作限制、监控和急停

保留判断：文章主张通用模型改变系统分工，并未认定其取代所有机器人基础模型；高频控制、接触与独立安全层仍有必要。

再引用前必须核验：模型准确名称和发布记录、论文版本、各实验实际使用的模型与动作接口。这里记录的是已有文章内容，不能把旧文叙述当作产品或 API 的最新状态。

后续跟踪：同预算对比、低频动作与高速控制交接、上下文数据成本、长任务恢复和危险动作评测。

来源入口：[文章所列模型文档](https://developers.openai.com/api/docs/models/gpt-6-astra)、[直接控制评估](https://arxiv.org/abs/2609.24170)、[RoboICL](https://arxiv.org/abs/2609.34261)、[ASPIRE](https://research.nvidia.com/labs/gear/aspire/)、[RoboHarm](https://robocurve.org/roboharm/)。

## 5. GR00T 2：WAM 与部署现实

内容简介：沿着 GR00T N1／N2 到 GR00T 2 的变化，分析联合未来视频与动作生成、混合数据、本体适配、少样本更新、智能体恢复和 Turbo 端侧运行。

- 数据与模型：文章记录约 436,000 小时异构预训练数据与 2B 参数模型；小时数不能直接当作真机有效操作数据量
- 泛化：Dexter-50 上的 40% 零样本到 95% 五样本结果带有筛选条件，不可写成所有新任务的统一成功率
- X-Adapt：没有遥操作不等于没有机器人数据；新增本体还需对齐相机、状态和动作空间
- 长程可靠性：文章记录的 292/300 杂乱装配包含智能体与恢复程序的贡献，不能归为裸策略成功率
- Turbo：记录的 124ms 是模型预测延迟中位数，不是完整基础模型在 50Hz 下闭环执行；高速稳定控制是另一层

保留判断：这是更完整的基础模型系统，但不能凭这些实验直接认定为可长期部署的通用机器人。安全事件、持续干预率、任务能耗、完整适配成本和独立复现仍需单独评价。

后续跟踪：Turbo 的速度／能力取舍、触觉是否进入策略、跨本体真实适配费用，以及选定对象之外的泛化。

来源入口：[官方项目](https://research.nvidia.com/labs/gear/gr00t-2/)、[技术白皮书](https://research.nvidia.com/labs/gear/gr00t-2/assets/gr00t2_whitepaper.pdf)、[GR00T N1 报告](https://arxiv.org/abs/2503.14734)。

## 6. MuJoCo 4：产业价值

内容简介：以工厂中的失败、重置、工装和测试成本为起点，讨论仿真能否减少昂贵的真机试验。

- 版本归属：区分 4.0.0 本次新增功能与自 3.0 以来跨 39 次发布的累计演进，不把 Studio、GPU 或可变形工作流全部写成首次在 4.0 出现
- 训练吞吐：衡量每单位成本产生的有效经验，不能只比较仿真步数或 GPU 利用率
- 工程协作：Studio 与可复用数字资产的价值体现在调试、问题定位、集成和模型复用
- 仿真到真机：必须标定接触、摩擦、传感器和对象参数，再用留出的真实试验判断迁移效果
- 升级边界：迁移要核对版本差异和第三方依赖；仿真通过不能代替物理系统安全验证

保留判断：产业价值是相同可靠性下减少成本，或相同预算下提高真机可靠性。版本发布和精选演示并不证明柔性操作已经可以规模化部署。

后续跟踪：为一个反复发生的高成本工位故障建立等预算试点，记录真实节拍、干预、校准与维护成本。

来源入口：[发布说明](https://github.com/google-deepmind/mujoco/discussions/3773)、[4.0.0 变更记录](https://mujoco.readthedocs.io/en/4.0.0/changelog.html)、[Studio](https://mujoco.readthedocs.io/en/4.0.0/studio/index.html)、[Playground](https://playground.mujoco.org/)。

## 7. Apple HALO：模块化人形控制与渲染

内容简介：以 Unitree G1 的室内运动为对象，拆解数据生成、仿真渲染、动作生成器训练和低层跟踪器训练，讨论生成式渲染能替代哪些模块。

- 数据工厂：场景、动作、摆放／渲染分阶段。Infinigen、Kimodo 和导出管线承担不同职责，模块之间应保留可追溯接口
- 数据质量：参考动作、约束、重试、接受标记和摆放回退仍有人工设计；“合成”不等于无需人类投入，也不等于所有回合都通过同等验证
- 渲染：区分场景光照烘焙、轨迹回放、相机标定和视觉观测导出
- 训练：动作生成器与身体跟踪器的任务和输入不同；不要把参考动作生成当作直接输出电机控制
- 生成式渲染：可以研究替代 RGB 外观生成，但不能据此移除动力学、碰撞、状态真值和控制监督。需检查时序一致性、几何、接触、延迟及视觉与动作对齐
- 复现成本：文章记录数据合成使用 250 张 H100 约 48 小时，生成器使用 64 张 B200，跟踪器使用 4 张 H100；缺少全部时长时不能推算完整训练账单。代码公开范围与权重／数据开放范围分别核验

保留判断：受控实验演示，具有真机迁移证据；长期安全、干预率、全成本尚不能从现有结果确定。

后续实验建议：固定动作、场景和策略预算，只替换 RGB 渲染；在留出真实房间测量完整技能成功率与失败类型，再决定生成式外观是否值得采用。

来源入口：[论文](https://arxiv.org/html/2611.06908v1)、[项目](https://apple-aiml-research.github.io/ml-halo/)、[数据管线](https://github.com/apple-aiml-research/ml-halo/blob/main/datagen/docs/data_pipeline.md)、[LucidSim](https://lucidsim.github.io/)、[RoboRender](https://robo-render.github.io/)。

## 8. CoRL 2026：从 Sharpa 看灵巧手研究

内容简介：以多项工作共同使用的 22 主动自由度 Sharpa Wave 为入口，比较接触选择、精密装配、人类视频迁移、状态记忆与触觉时延，再用 Tesollo 上的 Touch2Trace 提供不同硬件对照。

关键边界：未找到完整、可独立核验的全会硬件统计，不能将 Sharpa 写成已经证实的“大会使用最多”。主会论文、Workshop 和同期数据集发布必须分开。

| 工作 | 文章记录的路线与结果 | 必须保留的解释边界 |
| --- | --- | --- |
| Play2Perfect／主会 | Play RL 预训练后做任务仿真微调；论文报告特定协议下 33 倍样本效率；真机 0.5mm 间隙插入 6/10 | 不是全开发费用减少 33 倍；每个任务仍需适配；无真机策略微调不等于未做任务训练；分阶段装配不能当完整链成功率 |
| OpenDexGrasp／主会 | 语言与几何条件的 flow matching 功能抓取；124 万合成抓取加 2.742 万对齐位姿；真机平均 72% 对比基线 59% | 开环执行，触觉纠正为后续方向；功能抓取成功不等于完成完整工具任务 |
| DEX-X／主会 | 人类单目视频 → 仿真特权教师 → 点云／本体／触觉学生；立方体抓取 28/30，无触觉 11/30 | 未见薄立方体 23/30，但另两种物体各 8/30，泛化不均匀；零样本真机迁移不等于无仿真训练 |
| WM-Craftnet／主会 | 循环世界模型估计手物状态，结合 PPO；深度、本体、触觉和动作历史共同输入 | 是状态估计辅助控制，不是搜索未来视频；真机成功定义为 20 秒内转过半圈；模拟回报消融不能直接当硬件成功率 |
| Touch2Trace／主会 | Tesollo DG-5F 加自定义压力阵列；12 条任务示范共 10.1 分钟；轻量策略 60Hz、推理约 3.4ms | 任务示范不含独立编码器预训练；同一条件达到 10cm 为 93%，20cm 为 57%；少于 5 秒的起始中止被排除；不能泛化否定所有 diffusion |
| SharpaDex／数据集 | 300 小时、28,993 回合、59 项遥操作任务 | v3.0 与 v2.1 是同一批示范的不同导出，不能重复累计；65 维结构含 7 个为零的躯干维度；记录的 CC BY-NC 4.0 需按数据卡重新核验 |
| DexAgent／Workshop spotlight | 智能体、技能与验证器生成仿真数据；11 项真机任务学习策略平均 63.6%，最强基线 18.2% | 回放的 11/11 是每项至少 10 次中成功一次，不是 100% 运行可靠性；生成验证器也需被验证 |

保留判断：同一只手不意味着同样使用触觉；Play2Perfect、OpenDexGrasp 的相关部署输入与 DEX-X、WM-Craftnet 不同。任务、感知、重置和算力不一致，不能横排成功率形成排行榜。文章将证据判断为有意义的受控真机实验，而不是长期工业运行验证。

后续跟踪：完整任务与恢复成功率、换对象的固定适配预算、传感到执行全链延迟、指尖维护、持续运行和总成本。模块组合是未来实验建议，不是论文已证明的现成系统。

来源入口：[Play2Perfect](https://play2perfect.github.io/)、[OpenDexGrasp](https://opendexgrasp.github.io/)、[DEX-X](https://dexx-code.github.io/dexx-code/)、[WM-Craftnet](https://wmcraftnet.github.io/)、[Touch2Trace](https://grmmtt.github.io/corl26-touch2trace/)、[SharpaDex](https://huggingface.co/datasets/Sharpa-Robotics/SharpaDex-v1.0)、[Workshop](https://dex-manipulation.github.io/corl2026/)、[DexAgent](https://dexagent1.github.io/)。详细论文、配置和评测链接见原文章来源列表。

## 9. HumanWAM 到 GR00T 2：配置、数据与工程对照

内容简介：将 HumanWAM-Vanilla、HumanWAM-Goal 和 GR00T 2 分开，比较共享 DiT、动作专家、串行／联合生成、视觉目标与人类视频上下文；附架构图、部署流程图、数据和评测表。

- 版本依据：Open-HumanWAM arXiv v2 与 GR00T 2 白皮书，核对日期为 2026-11-12。旧文使用的 Open-HumanScale 名称不要直接覆盖新版 Open-HumanWAM 的具体配置
- Vanilla 使用 Wan2.2-TI2V-5B 加动作专家，最终配方采用 IDM 串行推理；Goal 改用 Cosmos3-Nano-16B 主干及 49 维混合动作。不能把 Goal 改善全部归因于视觉目标，也不能把主干参数量当整个系统参数量
- 区分 Human-1M 原始约百万小时、进入 GR00T 2 inventory 的 402,730 小时与 100K 公开子集；UMI-10K 为 10,184 小时、94.2 万合格回合。EgoPro 是同步头腕视角过渡数据，不能重复加到已有语料小时数中
- Head + Wrist 增加不一定改善泛化：引用 HumanWAM 视角消融时保留注意力和动作配置。Vanilla RoboTwin 后训练为 92.08／68.88，Goal 为 92.70／84.60，Goal 零样本均值 13.94，不能混用
- RoboDojo 不同报告采用六组或五维汇总；GR00T 2 Agent／RL 表仅布局库 0，不能与官方三布局库分数直接混排
- 明确区分两项同名 OpenWAM：OpenWAM-α 模块化预训练项目与 Stanford 可组合框架；后者的 VTA／Joint LIBERO 数字不能移到 α 名下
- Generalist 官方材料没有建立独占 Wrist-only 配置或匹配的多视角消融；文中的 Wrist-first 属工程解读，不应变成已确认事实，也不能认定 GEN-1.5 已公开 WAM 目标
- GR00T 2 RL 表保留每任务／方法 50 次试验、重置与时限匹配，以及统计显著性的限定；UMI→YAM 可免同任务 YAM 示范，但仍用本体数据、对齐与标定
- 运行时延以计时范围和硬件为准：Dexter 优化计时不含预取 VAE；G1 Turbo 计时包含 VAE。两者 2B 配置不意味着相同 token 与运行成本

后续跟踪：匹配数据／时延预算的强 VLA 对照、接触与恢复数据的边际收益、相机配置的全成本、低延迟世界预测的动作消融。

## 10. Agentic 机器人与 RSI：从失败到验证过的修正

内容简介：解释 2026 年多条 Agentic 路线为什么同时推进，按部署期推理、技能程序改进、策略实验、学习式代码接口和运行框架 RSI 分类，而不只堆叠论文。

- COMPASS 的编码智能体用于导航开发；部署时仍由 RGB／里程计／目标到速度的策略执行，不能把它误写成每个控制周期都有 LLM
- Vesta 展示运行时具身推理；R2R-CE val-unseen 的 SR 55.5、SPL 50.8，与专用模型 SR 55.4、SPL 52.1 对照，不能仅凭 SR 写成全面超过
- ASPIRE 累积程序与验证过的技能修正；ENPIRE 自动化重置、验证、策略改进和物理实验，两者改进对象不同
- ENPIRE 的 99% 为 pass@8，子任务最多八次基于失败的上下文重试，不是首试 99%。并行机器人研究不是已经验证的多机器人生产任务协同
- AW-0 真机 71.1 为平均进度 rubric，不是完整任务成功率。其混合执行改善随机场景，也降低干净场景成功率，应保留权衡
- 用户所指 tinyastra 的正式对应工作为 TinyAstral，方向是 RSI，而不是 ETH RSL。教师权重冻结，先通过配对检验改进工具、反馈、记忆和恢复，再冻结框架并蒸馏学生
- TinyAstral 在相同 500 个 RoboTwin 回合，教师 33.4→63.6，4B 学生为 62.8；学生在各框架快照分别训练，不能称学生全程参数冻结
- TinyAstral 的约五分之一成本指特定部署子集的加速器时间，不是整机节拍或总训练成本。离线 next-call 准确率也不能改写成真机完整任务成功率

后续跟踪：独立验证器误报、选择／评测分离、多轮候选搜索过拟合、工具依赖与回退、跨本体技能迁移、计入感知和执行服务后的总成本。

## 跨文章延续的分析主线

- 数据规模之后要追问有效覆盖、接触监督、失败／恢复数据与新增任务成本
- 区分未来视频预测、潜在状态估计、动作生成、技能程序和高频反馈，不能全部统称为“世界模型更强”
- 判断泛化时写清零样本、少样本、微调、仿真专项训练、筛选条件和真机环境
- 任务理解、预测控制、触觉／稳定控制可以协作，但每层延迟、接口和失败接管都需要实际测量
- 产业判断同时看完整成功率、节拍、干预、恢复、安全、维护与总成本；单个漂亮视频不提供这些证据
- 同一技术在不同文章中再次出现时，解释本次新增证据，避免重复铺陈旧介绍

## 新文章后如何更新本文件

每篇新增或实质更新的研究博客，都补充：日期与站内链接、内容简介、对应工作、数据与模型路线、关键结果及评测条件、我们的判断、尚未解决的问题、原始来源和后续跟踪点。

若新证据推翻旧判断，记录修正原因并同步检查旧文章；不要只覆盖记忆中的数字而留下旧文错误。不要根据本索引自动转引历史数字，正式发表前仍按编辑原则重新核验。

## 11. Ropedia W0：数据工厂与模型效果

- 文章：[Ropedia W0 数据与模型分析](posts/ropedia-w0-data-model-analysis.html)，2026-11-13，技术分析栏目，完整中英文
- 核对来源：[论文 v1](https://arxiv.org/html/2610.26855v1)、[项目](https://ropedia.github.io/ropedia-w0/)、[代码库](https://github.com/Ropedia/ropedia-w0)、[Xp-Teleop 数据卡](https://huggingface.co/datasets/ropedia-ai/Xp-Teleop)、[模型卡](https://huggingface.co/ropedia-ai/Ropedia-W0)，再次引用需重新核查发布状态
- Xp-Data 约 10k 人类小时（14 个公开数据集＋超过 6k 小时四鱼眼自采）与约 3k 机器人小时（13 个公开数据集）。自采多视角不等于每个模型输入都是四路 RGB；Xp-Teleop 是独立小型评测集，不应当成新增大规模训练数据
- 关键数据工作：几何估计、人手重建、机器人 FK 投影人工修正、分层语言描述、质量核验与逐帧同步。数据采集费和标注费应分开，完整人工工时与每有效小时成本尚未建立
- Xp-Teleop：27 回合、543 段、96,064 帧、30 fps、1280×720；双人分别控制操作与移动，保留失败与恢复。公开卡列出 51 关键点、35 维 q、IMU 和触觉。原始深度文件未发布；pour_and_wash_the_plate c026–c032 的骨架叠加版本过旧，以干净 RGB 与 frames.npz 为准。不要把数据里有触觉写成模型已使用触觉
- W0 是给定首帧、文本、未来相机与骨架条件的视频世界模型，不是直接执行语言指令的纯策略。5B 稠密；A14B 约 27B 总参数、14B 每步激活。人类预训练后混合中训练；零样本预测不等于机器人零样本完成任务
- 表 4 零样本 PSNR：ω-HOME 5B mid 17.82、A14B mid 19.55、Cosmos3-Nano 16.24；Xp-Teleop 分别 14.98、16.42、13.69。像素指标不能等同物理正确或成功率
- 表 6 FastWAM 初始化：完整约 43 示范／任务，LIBERO-Plus 50.06%→56.82%（+6.76pp）；10 示范相机扰动 18.32%→10.94%，不能写成所有扰动提升。真实 G1 33.3%→56.7% 为任务进度分
- 复现：两个 5B 权重、18 示例，公开推理至少 40GB 显存、31GB 峰值、验证 H200；A14B、后训练和评测相关发布仍应查清单。论文 4 步学生 21.3 fps、首块约 1.4 秒；公开默认 50 步推理不等同流式模型。权重 CC BY-NC 4.0、代码 Apache-2.0、数据 CC BY 4.0，基础模型另有条款
- 独立判断：值得借鉴统一数据模式、几何对齐与离线策略筛选；属于受控研究演示。下一步看标定误差容忍、接触后果准确度、完整真机成功率，以及扣除标注与错误建议后的真实试验节省


## 12. 第 46 周周报：预训练之后如何继续学习

- 文章：[第 46 周具身智能周报](posts/embodied-ai-weekly-2026-11-13.html)，完整中英文，周报栏目。覆盖新加坡时间 2026-11-06 18:00 至 2026-11-13 18:00，已核对远程主分支避免同周重复
- 日期依据：AMP1 v1 为 UTC 11 月 6 日 18:59（新加坡 11 月 7 日）；WICL 为 UTC 11 月 9 日 18:59（新加坡 11 月 10 日）；NVIDIA 公告 11 月 9 日。MR0 v1 为 UTC 11 月 5 日，明确作为 v2／v3 的修订回顾，不能把所有结果称为本周新实验
- [AMP1](https://arxiv.org/html/2611.09892v1)：真实 Franka 三实例、12 任务、各 9 次，Opus 5.5 完成 104/108；成功试验均值 280 秒，推理 211 秒。五分钟执行预算不含推理；主表 AMP1 可恢复控制器错误，基线遇错误终止，必须保留这一公平性限定。$1.39 是论文按当时表价核算的 RoboLab 仿真 API 回合费用，不是机器人总成本
- [RoboScript](https://archeone-ai.github.io/RoboScript/)／[代码](https://github.com/ArcheOne-AI/RoboScript)：一条任务示范＋仿真演练＋冻结记忆，不等于零经验。50 RoboTwin 2.0 任务 clean 83.6%、random 83.2%、平均 83.4%，是 Agent 系统，不直接与纯 Policy 混排；仿真 ALOHA 到真 PiPER 需要坐标、运动学、夹爪适配。项目 API 费用 $308／$1,911 含全部 50 任务与 1,000 评测回合，非真机运营成本
- [MR0 v3](https://arxiv.org/html/2611.08577v3)：15,060 小时清洗数据池＝3,235 开源真实＋7,530 授权真实＋4,295 仿真，12 本体；数据池小时数不等于训练曝光，排除底盘运动。Rollback 保留被替换策略片段与人工修正；网线插入同数据、每方法 30 次自主评测，CFG-DAgger SR70%／PS0.90，RECAP60%／0.67，是后训练结果。Agent 记忆部署为定性展示。公开模型与 RoboDesk 不代表授权数据全部可再分发
- [NVIDIA CoRL 公告](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/)：GR00T 2 40/50 任务至少成功一次不等于每试验 80% 成功。AlphaNIST >98% 是训练成功率，约39倍是相对 GPU 时间，不等于工厂部署指标。Lab-Arena0.4 为开发者预览；DexBench 公告15任务4场景。每次引用检查发布资产与版本
- 独立判断：纠错数据、回合内恢复和可审查任务记忆在改变模块分工。仍属于受控实验演示；团队应统一恢复权限，核算完整成功、实际耗时、人工、重置及安全事件，先做匹配条件的小试点


## 13. Ropedia 最新进展：从人类视频到可复用机器人世界

- 文章：[Ropedia 最新数据与模型路线](posts/ropedia-xperience2-data-model-industry.html)，2026-11-14，技术分析栏目，完整中英文；与 11 月 13 日 W0 专题互补，不重复宣称 W0 是最新发布
- 最新依据：[Xperience 2 v1](https://arxiv.org/html/2611.17060v1)，UTC 11 月 12 日提交；其他模型线作为较早背景。各组件衔接属于我们的路线综合，尚不是已验证联合部署系统
- 规模：论文发布扫描集合 1,589；更广采集清单为 596 地点、4,230 记录、74 任务、131 小时。场景按扫描计数，不等于独立物理地点。不能把 Xperience-10M／EgoX-Data-6M／Xp-Data／Xperience2 的规模相加
- 核查 [当前 HF 数据卡](https://huggingface.co/datasets/ropedia-ai/Ropedia-Xperience-2)：首批126场景、约1.07TB；首批文件尚未附记录到扫描配准变换。网页 still-coming-soon 标记不能代替实际文件与数据卡状态。每次再引用须重查批次
- HOMIE四全局快门鱼眼＋IMU＋四声道音频，配手持LiDAR扫描；传感器观测／几何与运动估计／模型生成描述要区分。下肢为推断，遮挡手可能缺失；不是全部动作捕捉真值
- [配准工具](https://github.com/Ropedia/Ropedia-Xperience-2/blob/main/docs/scene_registration.md)：CPU单对配准，要求已处理导出数据，不是完整传感器流水线；PASS留出平移中位数≤5cm、p90≤12cm，缺深度不能PASS；VERIFIED仅视觉配对，输出文件存在不保证PASS。全局变换不能纠正局部SLAM漂移
- QC：保留1589中507为Reuse；91无显式QC记录按规则赋Usable，33冲突按最佳等级；不能称每个保留场景都均匀验证或可直接仿真。20场景评测子集只含Perfect/Usable
- 模型：EgoX1.2B为联合重建，50h/5.4M为数据子集而完整训练混合约280h；Holi-World约80K QA训练4B空间模型；W0为条件预测；DONIC为参考条件跟踪，BiHOI1575序列/229物体/14.77h，仿真未见轨迹86.79→88.68%、未见物体57.32→59.76%；A0链接现为ETM／COAP，42任务3种子×50布局自评70.24%，不等于无需离线任务开发
- 关键评测：20场景Boxer AP25 24.69/AP50 6.09；500空间题Gemini2.5Pro74.2/GPT6AstraHigh71.8/HoliWorld4B67.8为问答准确率。深度按场景中位数尺度对齐，不能证明米制恢复
- 生成：一个仿真住宅八子任务，30/30留出初始状态完成，轨迹约2.2min、单worker计算10–16min，非新任务／真机泛化。重定向四段同场景记录先减速2倍，指尖中位数0.40–0.55cm为仿真跟踪；饮水机演示水量是规则不是流体仿真
- 商业和产业：数据CCBYNC、配准代码Apache2.0、W0权重NC；研究可下载不等于可直接商用。潜力是减少场景重建、重置与数据迭代，仍要补分割关节化、接触参数、配准、验收、隐私与授权成本
- 独立判断：部分开放基础设施的受控实验演示。先在已知现场按相同真机验收标准对照现有流程，计每工程师日的合格结果；未来重点看完整配准占比、接触标定、新任务与新现场留出真机成功率、人工修复和完整成本。尚未证明物理智能缩放定律


## 14. Anchor1、SONIC 与 SuperMimic：精度、规模与控制成本

内容简介：比较三者优化的不同瓶颈，解释五位姿参考、FSQ token、解码器显式误差反馈、世界模型可微训练，并分开真机精度表与仿真覆盖率表。

- Anchor1 无运行时重定向不等于无离线重定向；训练仍使用机器人参考与质量筛选。1,081.37 小时含 688.37 原始与 392.99 镜像小时，不能当独立采集
- Anchor1 真机表为 G1、51 条站立伸手与 72 条内部序列；全局手腕误差 44.58／75.69 mm，SONIC-G1 98.15／234.37，SONIC-SMPL 166.70／314.00。不是完整操作成功率；不同接口及 60／900／180 ms 前视不等于网络延迟
- Anchor1 真机使用 re-locate，不输入全局定位；光学骨盆跟踪仅用于评分。Global 与 re-locate 模式必须区分；局部好不能代替全局好
- SONIC 以 v4 为准：611 小时训练、最大 42M 参数、约 21k GPU 小时；Orin 推理 1–2 ms、策略 50 Hz、电机发送 500 Hz，不混成同一频率
- SuperMimic v2 的 129,514 条为两方法训练动作，确定性仿真无噪声／域随机化，179→25→0 是覆盖率，不是新任务泛化或真机零失败。2 H100×9.8 小时为 19.6 GPU 小时
- SuperMimic 受控 LAFAN1 比较比跨系统倍率更有算法解释力。未有 Anchor1 与 SuperMimic 的同协议精细控制排名
- Anchor1 两项采集任务有效示范数／小时：43、62；SONIC v1.1 SMPL：9、41。不是自主策略成功率，也不能推广全部操作者成本
- 截至核对，Anchor1 权重／部署工具为年底计划；SONIC 有运行代码和权重；SuperMimic 核实论文及浏览器演示，不据此认定完整训练部署包公开

保留判断：三条路线可能互补，但联合可微训练与精确 token 反馈是建议实验，不是现成验证系统。单一本体、物体接触、重建误差、持续安全仍是边界。

来源：[Anchor1](https://arxiv.org/html/2611.00193v1)、[SONIC v4](https://arxiv.org/html/2511.07820v4)、[SuperMimic v2](https://arxiv.org/pdf/2610.28480v2)。

## 15. BEVFormer、UniAD 到 WorldEngine 与 SimScale

内容简介：分析从共享空间记忆、规划导向查询接口，走向交互式数据生成和失败驱动后训练，对移动导航与操作行业的启示。

- 时间与谱系：BEVFormer 首稿 2022-03，UniAD 2022-12，SimScale 2025-11，World Engine 论文 2026-06。后两者为互补工具，不是四个连续模型版本；WorldEngine 基准为 VADv2 风格规划器，不将所有提升归为 UniAD
- BEVFormer NDS 56.9 对应 V2-99 加额外深度预训练，不是导航成功；UniAD 原始开环表平均 L2 2.11→1.03 m、碰撞指标 0.71%→0.31%，不是实路事故率
- WorldEngine 将 3DGS 外观渲染与扩散行为世界模型分开，失败挖掘→重建→交互→带 KL 先验约束的后训练。公共仓库截至核对仍标记 BWM 集成未完成，不能把论文完整系统当完整公开复现
- WorldEngine 稀有 4 秒仿真回合 SR 73.66→88.89，PDMS* 60.98→70.12；必须同时看进度，合成回放 SR 高但 EP 仅 32.49。量产实验超过 10,000 仿真场景最多相对降碰撞 45.5%；约 200km 三次路测零接管、基础一次干预，不推导长期事故率
- 14 倍数据等效是对 12k–103k 场景扩展曲线外推，不是与 14 倍采集模型实测
- SimScale 指 OpenDriveLab 自动驾驶工作，区别同名云仿真及 2026-11 智能体操作项目。147k 恢复式／237k 规划式派生场景；不等于独立地点。NAVSIM v2 EPDMS 为复合基准分数，不能与 WorldEngine PDMS* 或真机 SR 横排
- ResNet34 下 navhard：LTF 24.4→30.2，DiffusionDrive 27.5→32.6，GTRS-Dense 38.3→46.9；navtest 分别 81.5→84.4、84.2→85.9、82.3→84.6。按同一模型有无仿真配对
- 仿真比例增加不必然持续改善：LTF 在测试范围 1:1 后饱和退化，扩散多模态与探索型专家更适配多解监督；不能外推无限 scaling
- SimScale 数据卡头部 Apache 与正文 nuPlan 数据 CC BY-NC-SA 有差异，分别核查代码与数据许可

保留判断：机器人应建设失败到学习闭环，先小规模验证仿真与真机排序。3DGS 不提供接触物理；操作需关节物体、力／触觉、动力学校准和独立验收。行业价值以匹配吞吐和总成本后的干预／失败降低衡量。

来源：[World Engine](https://arxiv.org/pdf/2606.19836)、[SimScale v3](https://arxiv.org/html/2511.23369v3)、[UniAD](https://arxiv.org/pdf/2212.10156v2)、[BEVFormer](https://arxiv.org/pdf/2203.17270v2)。

## 16. Compass 1：相机、离线几何与可用历史

内容简介：专门拆解 Archon Compass 1，区别其他同名 COMPASS；重点回答相机、重建、模型独特贡献和端到端导航完成度。

- 自采与地面部署用 DJI Action 4；训练主要约 1m，Go2 0.5m、AgileX 0.35m、K1 0.85m。无人机 1.5m 使用原生工业相机，未给型号，不能根据合作 logo 猜测品牌。4 FPS 是标注示例，不是相机录制帧率
- Pi3 跨视图恢复位姿／点图，MoGe-2 提供估计米制尺度，用于离线 [Δx,Δy,Δyaw] 动作标注；HRM 为在线历史位置／编号／朝向二维画布，不是稠密三维占据、3DGS 渲染器或碰撞认证
- 所有真机方法用里程计闭环执行，PRO 6000 远端推理；单目视觉输入不等于整机只需相机，也不等于端侧部署已验证
- Cosmos3-Edge-4B 共享多模态注意力：结构化 QA + 视频动作扩散，12 帧／12 动作；语言头与动作头异步，不将当前全部 QA 串行输入动作头。监督训练 32 H200×60k steps、batch256，loss3:1:1；未知墙钟时长不能算总 GPU 小时
- 500+h 自采 + 2000+h YouTube，训练采样85:15，人工检查只自采；几何尺度误差、淘汰率、人时、成本仍未充分报告
- 主基准 Go2：8类×4景×10次=320，254成功79.4%，最强17.8%；基线选原始／适配权重较好者，但推理监督与动作接口不同。额外本体 HBN：9/10、7/10、7/10，不与主基准混分母
- 消融160次Office+Street参照78.8%，无HRM53.1、无检索56.3、无阶段55、无探索61.3、无视频46.9、无YouTube65；参照须用同子集78.8，不能用四景79.4，也不能相加贡献
- 0.43／0.71秒生成12动作为28／17有效动作吞吐Hz，非每36ms闭环重新观察决策，批次约2.3／1.4Hz，未含完整网络到电机延迟
- R2R-CE70.1/63.2与LightNav68.5/62.8为SR/SPL；IndoorUAV全方法微调且排除上下动作，18.09SR不能称解决零样本飞行
- 截至2026-11-14仓库计划12月发布数据／部署代码／真机权重。摘要开放措辞不代表当前已下载；仓库Apache不自动覆盖未发布数据及视频版权

保留判断：有力受控真机演示，记忆表征+检索监督+执行调度共同带来提升；多阶段50%、持久回溯58%、主基准66次失败，尚未解决持续自主。重点追踪长期漂移、遮挡恢复、通信失效、本地低延迟与独立复现。

来源：[论文](https://arxiv.org/pdf/2611.12087v1)、[项目](https://www.yuance.ai/research/compass1)、[发布计划](https://github.com/OpenDriveLab/Compass/)。


## 17. 从 BEVFormer／UniAD 到 Pi3X／Compass：一年技术路线

内容简介：不重复已有单项介绍，提炼 BEVFormer 的时空对齐、UniAD 的规划导向查询与分阶段联合训练，提出几何监督→可用历史→导航执行的一年研究至试点规划。周期 2026-11-15 至 2027-11-14，完整中英文。

- 事实与建议分开：Pi3X 没有被验证为 Compass Pi3＋MoGe-2 的等效替换；Pi3X→Compass 不是真实发表谱系；查询头／几何缓存／回执循环是本文建议，不是官方已实现架构
- Pi3X 初期只做离线几何教师与标注，用独立参考测量验证尺度与分段运动；不做自由尺度对齐掩盖误差。比较 Pi3＋MoGe-2、MapAnything，相同采样和标签预算；相机到机体外参、时间同步、防抖必须记录
- 在线区分局部时效几何与长期视觉拓扑历史；未知空间不能当可通行，历史目标位置不能当当前真值。优先 HRM 基线，再逐个检验目标／阶段／走廊查询；不会自动继承预训练权重能力
- 五项顺序消融：标签来源、记忆、规划辅助接口、未来预测、失败后训练；阶段选择只用开发集，物理现场／路线／会话／实例提前拆分；恢复权限、算力和数据曝光匹配
- 论文数字保留原协议：BEVFormer56.9NDS感知，UniAD2.11→1.03m和0.71→0.31%开环，Compass254/320真机79.4%；匹配消融160次参照78.8、无HRM53.1、无视频46.9，不等于去除离线重建
- 五阶段：M1–2几何与数据；M3–4记忆；M5–6查询联合训练；M7–9视频／恢复／可选有限RL；M10–12冻结模型、未用现场与试点决策。未达门槛推迟或采用简单方案
- 20小时语料、约200段独立核验为建议试点上限，不是样本效率结果；分段尺度中位5%/p9515%、返回任务+10pp、完整任务+5pp、最终200次首试90%全部为建议项目门槛，非实测或通用安全标准。M1定义段长／最小位移及参考不确定性后固定
- 最终分层200任务、人工接管计首试失败、报告最弱组与聚类不确定性；跨日两小时耐久为初查，不是安全认证。第二本体权重不变还需披露标定／控制适配
- 不从零训练基础模型，先测预训练和学生；Compass32H20060k并非最低预算，LoRA等参数高效适配只是候选非已证实配方；核算全部失败运行、有效数据/工程师日和重置成本
- Compass0.43–0.71秒/12动作为动作吞吐，不等于同频率感知；实测p50/p95/p99全链路时龄，本地限制与急停独立，速度由制动/间距/延迟预算决定
- 核对当日Pi3X非商业权重与宽松代码分开，Compass12月发布计划仍待兑现；不可将未来下载或默认可商用作为路线依赖

独立判断：首年合理终点是有限试点候选或有证据地选择简单基线，不是承诺持续通用自主。只有减少新现场完整任务失败、干预及总成本，才值得继续增加几何或模型复杂度。

来源：[BEVFormer](https://arxiv.org/pdf/2203.17270v2)、[UniAD](https://arxiv.org/pdf/2212.10156v2)、[Pi3X](https://github.com/yyfz/Pi3)、[Compass论文](https://arxiv.org/pdf/2611.12087v1)、[发布计划](https://github.com/OpenDriveLab/Compass/)。
