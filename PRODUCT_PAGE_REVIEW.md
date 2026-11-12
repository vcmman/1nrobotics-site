# Product 页面审批稿

状态：用户已同意提交；标题按反馈改为 “StarNav: a navigation brain for robots.”，中文为“StarNav：机器人的导航大脑。”。

## 修改方向

- 保留现有 StarNav 名称。LinkedIn 也出现 Turtle Control Box，但目前不把两者擅自等同或改名。
- 以视觉定位建图、无 GPS／无预建地图导航、自主探索和返航为主要产品叙述。
- 将 Fleet Operations、Validation Layer 及相关看板、版本追踪、发布门禁等旧描述替换为有公开依据的导航与集成内容。
- NaVILA、具身推理、周向感知和现场学习明确归入研究方向；不表示这些已成为可交付产品功能。
- “无需预建地图”表示可在运行中建图，不表示完全不使用地图；返航能力按公开演示描述。
- 删除未获公开依据支持的性能、可靠性、交付周期与无条件跨平台承诺。

## 参考来源与对应关系

1. [1N Robotics LinkedIn 公司页](https://www.linkedin.com/company/1nrobotics/)：公司定位、无 GPS／无预建地图、适配方向、Turtle Control Box、周向感知与现场学习目标；其中转发的创始人内容提到相机、IMU 和轻量 LiDAR。用于定位、集成和研发方向。
2. [视觉导航介绍](https://www.linkedin.com/posts/1nrobotics_we-like-flying-and-were-building-the-autonomy-activity-7395937450046447616-xBnO)：视觉定位、建图、导航。用于第一模块。
3. [自主探索与返航演示](https://www.linkedin.com/posts/1nrobotics_sharing-a-quick-demo-of-our-autonomous-exploration-activity-7402550973518561280-ShPr)：FUEL 扩展、增量三维占据建图、可达前沿选择、完成任务或触发后的返航；依赖位姿估计与地图来源。用于第二模块和集成接口。
4. [NaVILA／视觉语言导航方向](https://www.linkedin.com/posts/1nrobotics_weve-been-thinking-a-lot-about-what-it-takes-activity-7420433061802160128-JuSR)：介绍外部框架及合作兴趣，未宣称其已作为自有产品交付。用于研究区的措辞边界。

查阅日期：2026-11-12。公开帖子是公司的能力叙述与演示，不等于独立测试记录。

## 完整页面文案

以下中英文与本地 Product 页面正文对应，顺序一致。导航与页脚沿用原文。

StarNav: a navigation brain for robots.

StarNav：机器人的导航大脑。

---

We build plug-and-play autonomy for robots working in complex environments, including places without GPS or a prebuilt map. StarNav brings vision-based navigation to integration and pilot projects.

我们为复杂环境中的机器人开发即插即用的自主系统，包括没有 GPS 或预建地图的场景。StarNav 以视觉导航为基础，与机器人团队开展集成和试点。

---

See, localize, and navigate.

看清环境，确定位置，自主前行。

---

Cameras help the robot estimate where it is and map its surroundings. The navigation system uses that spatial information to plan paths and respond to obstacles as the robot moves.

机器人通过相机估计自身位置，并建立周围环境的地图。导航系统利用这些空间信息规划路径，在移动过程中应对障碍。

---

Vision-based localization and mapping

视觉定位与建图

---

Path planning and obstacle avoidance

路径规划与避障

---

Navigation in GPS-denied environments

无 GPS 环境导航

---

Explore an area. Find the way back.

自主探索，也能规划返程。

---

Our public demonstrations show autonomous exploration with return-to-home: the robot builds a 3D occupancy map, selects reachable unexplored areas, and plans back to its starting point when the mission ends or a return is requested.

在已公开的演示中，机器人一边探索一边构建三维占据地图，选择可到达的未知区域；任务结束或收到返航指令后，再规划回到起点的路径。

---

Frontier and waypoint exploration

前沿探索与航点探索

---

Incremental 3D mapping

增量式三维建图

---

Return-to-home planning

自主返航规划

---

Build around your robot.

围绕你的机器人做集成。

---

Our work spans drones and legged robots, with humanoids also in scope. Integration starts with your sensors, pose estimate, mapping source, and motion interface. Together, we define a pilot around the environment your robot needs to work in.

我们的工作面向无人机和足式机器人，也将人形机器人纳入适配方向。集成从传感器、位姿估计、地图来源和运动接口开始，再围绕机器人的实际工作环境共同确定试点范围。

---

Camera, IMU, and compact LiDAR options

相机、IMU 与轻量激光雷达方案

---

Pose and mapping interfaces

位姿与地图接口

---

Robot-specific pilot and integration scope

按机器人配置确定试点与集成范围

---

Research direction

研究方向

---

Building toward more adaptable autonomy.

让自主系统逐步具备更强的适应能力。

---

Alongside our navigation work, we are exploring how embodied AI can add spatial reasoning and learning. These are development directions, with capabilities to be evaluated in future integrations.

在导航工作之外，我们也在探索如何用具身智能增强空间推理与学习能力。以下属于研发方向，相关能力仍需在后续集成中验证。

---

Vision-language navigation

视觉语言导航

---

We are interested in NaVILA-style systems that translate language and visual observations into spatial subgoals.

我们关注 NaVILA 这类将语言指令和视觉观测转化为空间子目标的系统。

---

Reasoning and control

推理与控制

---

Our research direction separates slower model reasoning from fast motion control, connected through mapping and planning.

我们探索将较慢的模型推理与快速运动控制分开，通过建图和规划连接两者。

---

Wider perception

更完整的周向感知

---

We are exploring more complete awareness around the robot, guided by what field tests reveal.

我们希望结合现场测试中的发现，逐步补足机器人对周围环境的感知。

---

Learning from deployment

从部署中学习

---

Our longer-term goal is autonomy that improves through field experience and needs less manual tuning.

我们的长期目标是让自主系统从现场经验中改进，逐步减少对人工调参的依赖。

---

Bring us your navigation challenge.

一起解决你的导航难题。

---

Tell us where your robot needs to go, what it can sense, and what a successful pilot would look like.

告诉我们机器人要去哪里、能感知什么，以及怎样的结果才算试点成功。

---

Discuss a pilot

讨论试点

