import { NodeConfig, EdgeConfig, DeviceType, LinkSpeed, JsonNode, JsonEdge, TopologyConfig } from '../types';

// Map string types from JSON to internal DeviceType enum
const TYPE_MAP: Record<string, DeviceType> = {
  'INTERNET': DeviceType.INTERNET,
  'FIREWALL': DeviceType.FIREWALL,
  'IPS': DeviceType.IPS,
  'SWITCH_CORE': DeviceType.SWITCH_CORE,
  'SWITCH_TOR': DeviceType.SWITCH_TOR,
  'SERVER': DeviceType.SERVER,
  'SERVER_AI': DeviceType.SERVER_AI,
  'STORAGE': DeviceType.STORAGE,
  'DDOS': DeviceType.DDOS,
  'MANAGEMENT': DeviceType.MANAGEMENT,
};

// Map string speeds from JSON to internal LinkSpeed enum
const SPEED_MAP: Record<string, LinkSpeed> = {
  '400G': LinkSpeed.SPEED_400G,
  '200G': LinkSpeed.SPEED_200G,
  '100G': LinkSpeed.SPEED_100G,
  '25G': LinkSpeed.SPEED_25G,
  '10G': LinkSpeed.SPEED_10G,
  'GE': LinkSpeed.SPEED_GE,
};

export const parseTopology = (config: TopologyConfig): { nodes: NodeConfig[], edges: EdgeConfig[] } => {
  const nodes: NodeConfig[] = config.nodes.map((n: JsonNode) => ({
    id: n.id,
    type: 'custom',
    position: { x: n.x, y: n.y },
    data: {
      label: n.label,
      type: TYPE_MAP[n.type] || DeviceType.SERVER, // Default to SERVER if unknown
      url: n.url || '#',
      ip: n.ip,
    },
  }));

  const edges: EdgeConfig[] = config.edges.map((e: JsonEdge) => ({
    id: `e-${e.source}-${e.target}`,
    source: e.source,
    target: e.target,
    stroke: SPEED_MAP[e.speed] || LinkSpeed.SPEED_GE, // Default to GE if unknown
    animated: e.animated,
  }));

  return { nodes, edges };
};