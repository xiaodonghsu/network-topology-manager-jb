import React, { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { 
  Cloud, 
  ShieldCheck, 
  ScanSearch, 
  Network, 
  Server, 
  HardDrive, 
  MonitorSmartphone, 
  Activity,
  Layers
} from 'lucide-react';
import { DeviceType, DeviceData } from '../types';

const getIcon = (type: DeviceType) => {
  const props = { size: 24, className: "text-white" };
  switch (type) {
    case DeviceType.INTERNET: return <Cloud {...props} />;
    case DeviceType.FIREWALL: return <ShieldCheck {...props} />;
    case DeviceType.IPS: return <ScanSearch {...props} />;
    case DeviceType.SWITCH_CORE: return <Layers {...props} />;
    case DeviceType.SWITCH_TOR: return <Network {...props} />;
    case DeviceType.SERVER: return <Server {...props} />;
    case DeviceType.SERVER_AI: return <Activity {...props} />; // Represents high compute
    case DeviceType.STORAGE: return <HardDrive {...props} />;
    case DeviceType.DDOS: return <ShieldCheck {...props} className="text-yellow-200" />;
    case DeviceType.MANAGEMENT: return <MonitorSmartphone {...props} />;
    default: return <Server {...props} />;
  }
};

const getBgColor = (type: DeviceType) => {
  switch (type) {
    case DeviceType.INTERNET: return 'bg-blue-400 border-blue-600';
    case DeviceType.FIREWALL: return 'bg-orange-500 border-orange-700';
    case DeviceType.IPS: return 'bg-indigo-500 border-indigo-700';
    case DeviceType.SWITCH_CORE: return 'bg-sky-600 border-sky-800';
    case DeviceType.SWITCH_TOR: return 'bg-sky-500 border-sky-700';
    case DeviceType.SERVER_AI: return 'bg-slate-800 border-slate-900';
    case DeviceType.SERVER: return 'bg-slate-600 border-slate-800';
    case DeviceType.STORAGE: return 'bg-teal-600 border-teal-800';
    case DeviceType.DDOS: return 'bg-red-600 border-red-800';
    case DeviceType.MANAGEMENT: return 'bg-violet-600 border-violet-800';
    default: return 'bg-gray-500 border-gray-700';
  }
};

const CustomNode: React.FC<NodeProps<DeviceData>> = ({ data, isConnectable }) => {
  const { label, type, ip } = data;

  return (
    <div className={`shadow-lg rounded-lg border-2 w-48 overflow-hidden bg-white transition-transform hover:scale-105 ${isConnectable ? '' : 'opacity-50'}`}>
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-gray-400" />
      
      <div className={`h-12 flex items-center justify-center ${getBgColor(type)}`}>
        {getIcon(type)}
      </div>
      
      <div className="p-3 text-center bg-white">
        <div className="font-bold text-xs text-gray-800 break-words leading-tight mb-1">{label}</div>
        {ip && <div className="text-[10px] text-gray-500 font-mono">{ip}</div>}
      </div>

      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-3 h-3 bg-gray-400" />
    </div>
  );
};

export default memo(CustomNode);