import React, { useCallback, useMemo } from 'react';
import ReactFlow, { 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  Node,
  BackgroundVariant
} from 'reactflow';

import { topologyData } from '../data/topology';
import { parseTopology } from '../utils/topologyParser';
import CustomNode from './CustomNode';
import { DeviceData, EdgeConfig } from '../types';

// Parse the JSON configuration once at startup
const { nodes: initialNodes, edges: initialEdges } = parseTopology(topologyData);

// Define custom node types
const nodeTypes = {
  custom: CustomNode,
};

const TopologyMap: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // Map custom edges properties to React Flow edge objects
  const rfEdges = useMemo(() => edges.map((e) => {
    // Cast to EdgeConfig to access the custom 'stroke' property
    const edgeConfig = e as unknown as EdgeConfig;
    return {
      ...e,
      type: 'smoothstep', // Use smoothstep for circuit-like appearance
      style: { stroke: edgeConfig.stroke, strokeWidth: 2 },
      animated: e.animated,
    };
  }), [edges]);

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node<DeviceData>) => {
    // Only open if URL exists and is not just a placeholder hash
    if (node.data.url && node.data.url !== '#') {
      window.open(node.data.url, '_blank');
    } else {
      // For demo purposes, we alert if there is no real URL
      alert(`Simulating opening management page for: ${node.data.label}\nURL: ${node.data.url}`);
    }
  }, []);

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={rfEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.1}
        maxZoom={2}
        defaultEdgeOptions={{ type: 'smoothstep' }}
      >
        <Background 
          color="#e2e8f0" 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1} 
        />
        <Controls className="bg-white shadow-lg border border-gray-100 rounded-md overflow-hidden" />
      </ReactFlow>
    </div>
  );
};

export default TopologyMap;