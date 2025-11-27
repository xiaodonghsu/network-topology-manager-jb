# 网络拓扑管理系统 (Network Topology Manager)

这是一个基于 React 和 React Flow 构建的现代化网络拓扑可视化与管理平台。该应用旨在以可视化的方式展示数据中心的网络架构，并提供快捷的设备管理入口。

## 🚀 功能特点

*   **配置驱动**：通过 `data/topology.ts` 文件全量控制拓扑结构，无需修改核心代码。
*   **可视化拓扑图**：完整还原数据中心网络架构，支持无损缩放、拖拽和平移。
*   **点击即管理**：点击拓扑图中的任意设备节点，即可自动跳转到该设备的管理页面（Web Console）。
*   **清晰的图例系统**：
    *   **链路速率**：通过不同颜色的连线区分 400G, 200G, 100G, 25G, 10G 等不同速率的链路。
    *   **设备类型**：使用直观的图标区分防火墙、交换机、服务器、存储等设备。

## 🛠 技术栈

*   **核心框架**: [React 19](https://react.dev/)
*   **可视化引擎**: [React Flow 11](https://reactflow.dev/)
*   **样式库**: [Tailwind CSS](https://tailwindcss.com/)
*   **图标库**: [Lucide React](https://lucide.dev/)
*   **开发语言**: TypeScript

## 📂 项目结构

```text
.
├── index.html              # 入口 HTML 文件
├── data/
│   └── topology.ts         # 🔥 核心配置文件 (所有设备和连线都在这里定义)
├── components/             # 组件目录
│   ├── TopologyMap.tsx     # 拓扑图主组件
│   ├── CustomNode.tsx      # 自定义节点样式
│   └── Legend.tsx          # 图例
├── utils/
│   └── topologyParser.ts   # 配置文件解析器
└── README.md               # 说明文档
```

## ⚙️ 配置文件说明 (`data/topology.ts`)

系统启动时会自动加载 `data/topology.ts`。您可以手动编辑此文件中的 `topologyData` 对象来添加设备、修改位置或更新管理链接。

### 1. 节点配置 (Nodes)

`nodes` 数组定义了拓扑图中的所有设备。

```javascript
{
  "id": "fw-01",              // 唯一标识符
  "label": "出口防火墙01",     // 显示名称
  "type": "FIREWALL",         // 设备类型 (见下文)
  "x": 450,                   // X 轴坐标
  "y": 230,                   // Y 轴坐标
  "url": "https://10.0.0.1"   // 点击跳转的管理地址 (如果是 '#' 则不跳转)
}
```

**支持的设备类型 (type):**
`INTERNET`, `FIREWALL`, `IPS`, `SWITCH_CORE` (核心/汇聚), `SWITCH_TOR` (接入), `SERVER`, `SERVER_AI`, `STORAGE`, `DDOS`, `MANAGEMENT`

### 2. 连线配置 (Edges)

`edges` 数组定义了设备之间的连接关系。

```javascript
{
  "source": "internet",       // 源设备 ID
  "target": "fw-01",          // 目标设备 ID
  "speed": "100G",            // 链路速率 (决定颜色)
  "animated": false           // 是否显示流动动画 (true/false)
}
```

**支持的速率 (speed):**
*   `400G` (紫色)
*   `200G` (红色)
*   `100G` (绿色)
*   `25G` (橙色)
*   `10G` (蓝色)
*   `GE` (黑色)

## 📦 本地开发

1.  安装依赖: `npm install`
2.  启动: `npm start`
3.  构建: `npm run build`