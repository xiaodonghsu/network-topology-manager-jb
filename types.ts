export interface DeviceData {
  label: string;
  type: DeviceType;
  url: string;
  ip?: string;
}

export enum DeviceType {
  INTERNET = 'INTERNET',
  FIREWALL = 'FIREWALL',
  IPS = 'IPS',
  SWITCH_CORE = 'SWITCH_CORE',
  SWITCH_TOR = 'SWITCH_TOR',
  SERVER = 'SERVER',
  SERVER_AI = 'SERVER_AI',
  STORAGE = 'STORAGE',
  DDOS = 'DDOS',
  MANAGEMENT = 'MANAGEMENT'
}

export enum LinkSpeed {
  SPEED_400G = '#8b5cf6', // Violet
  SPEED_200G = '#ef4444', // Red
  SPEED_100G = '#22c55e', // Green
  SPEED_25G = '#f59e0b',  // Amber/Orange
  SPEED_10G = '#0ea5e9',  // Sky Blue
  SPEED_GE = '#000000',   // Black
}

export interface NodeConfig {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: DeviceData;
}

export interface EdgeConfig {
  id: string;
  source: string;
  target: string;
  stroke: string;
  label?: string;
  animated?: boolean;
}

// --- JSON Configuration Types ---

export interface JsonNode {
  id: string;
  label: string;
  type: string; // "FIREWALL", "SERVER", etc.
  x: number;
  y: number;
  url?: string;
  ip?: string;
}

export interface JsonEdge {
  source: string;
  target: string;
  speed: string; // "400G", "100G", etc.
  animated?: boolean;
}

export interface TopologyConfig {
  nodes: JsonNode[];
  edges: JsonEdge[];
}