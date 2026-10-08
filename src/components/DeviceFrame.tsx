import React from 'react';
import { Wifi, Signal, Battery } from 'lucide-react';

interface DeviceFrameProps {
  deviceType?: 'phone' | 'browser' | 'cinematic';
  time?: string;
  url?: string;
  children: React.ReactNode;
  className?: string;
  screenClassName?: string;
  badge?: string;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  deviceType = 'phone',
  time = '12:41 PM',
  url = 'ratiocity.com.gh',
  children,
  className = '',
  screenClassName = '',
  badge = 'SCREEN RECONSTRUCTION',
}) => {
  if (deviceType === 'browser') {
    return (
      <div className={`relative rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden ${className}`}>
        {/* Browser chrome header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-xs text-neutral-400 select-none">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-mono text-[11px] text-neutral-400 hidden sm:inline">Chrome · macOS</span>
          </div>
          <div className="flex-1 max-w-md mx-3 px-3 py-1 rounded-md bg-neutral-950 border border-neutral-800/80 text-[11px] font-mono text-neutral-300 flex items-center justify-center gap-1.5 truncate">
            <span className="text-emerald-400">🔒</span>
            <span className="truncate">{url}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-neutral-400">
            <span>{badge}</span>
          </div>
        </div>
        {/* Screen content */}
        <div className={`relative min-h-[440px] max-h-[640px] overflow-y-auto custom-scrollbar ${screenClassName}`}>
          {children}
        </div>
      </div>
    );
  }

  if (deviceType === 'cinematic') {
    return (
      <div className={`relative rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden ${className}`}>
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-900/80 border-b border-neutral-800 text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>KUMASI RETAIL OBSERVATION</span>
          </div>
          <span className="text-neutral-400">{time} · RECONSTRUCTED TIMELINE</span>
        </div>
        <div className={`relative ${screenClassName}`}>
          {children}
        </div>
      </div>
    );
  }

  // Default: Phone Frame
  return (
    <div className={`relative mx-auto w-full max-w-[340px] sm:max-w-[360px] rounded-[42px] p-2.5 bg-neutral-900 border-[3px] border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ${className}`}>
      {/* Outer titanium edge simulation */}
      <div className="relative rounded-[32px] overflow-hidden bg-black border border-neutral-800/80">
        {/* Top iOS Status Bar */}
        <div className="relative z-30 flex items-center justify-between px-6 pt-2.5 pb-1 text-white text-[12px] font-medium select-none bg-black">
          <span>{time}</span>
          {/* Dynamic Island */}
          <div className="w-20 h-4.5 bg-black rounded-full border border-neutral-800 flex items-center justify-end px-2">
            <div className="w-2 h-2 rounded-full bg-neutral-900 border border-neutral-700" />
          </div>
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Signal className="w-3 h-3 text-neutral-300" />
            <Wifi className="w-3 h-3 text-neutral-300" />
            <Battery className="w-4 h-3 text-neutral-300" />
          </div>
        </div>

        {/* Screen inner content */}
        <div className={`relative h-[560px] sm:h-[600px] overflow-y-auto custom-scrollbar bg-neutral-950 text-neutral-100 ${screenClassName}`}>
          {children}
        </div>

        {/* Home indicator bar at bottom */}
        <div className="relative z-30 h-5 bg-black flex items-center justify-center pointer-events-none">
          <div className="w-28 h-1 rounded-full bg-neutral-600" />
        </div>
      </div>

      {/* Subtle label outside frame */}
      <div className="mt-2 text-center">
        <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
          {badge}
        </span>
      </div>
    </div>
  );
};
