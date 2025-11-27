import React from 'react';
import { LinkSpeed } from '../types';

const Legend: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-200 z-50 w-64 pointer-events-none">
      <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider border-b pb-2">Topology Legend</h3>
      
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-gray-500 mb-1">Link Speeds</h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: LinkSpeed.SPEED_400G }}></div>
            <span className="text-xs text-gray-600">400G</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: LinkSpeed.SPEED_200G }}></div>
            <span className="text-xs text-gray-600">200G</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: LinkSpeed.SPEED_100G }}></div>
            <span className="text-xs text-gray-600">100G</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: LinkSpeed.SPEED_25G }}></div>
            <span className="text-xs text-gray-600">25G</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: LinkSpeed.SPEED_10G }}></div>
            <span className="text-xs text-gray-600">10G</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-1 rounded" style={{ backgroundColor: LinkSpeed.SPEED_GE }}></div>
            <span className="text-xs text-gray-600">GE</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-2 border-t text-[10px] text-gray-400 italic">
        * Drag canvas to pan<br/>
        * Scroll to zoom<br/>
        * Click device to manage
      </div>
    </div>
  );
};

export default Legend;