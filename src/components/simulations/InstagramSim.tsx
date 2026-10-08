import React, { useState } from 'react';
import { ChevronLeft, MoreHorizontal, Send, Image as ImageIcon, Heart, MessageCircle, Clock, ArrowRight } from 'lucide-react';

interface InstagramSimProps {
  onSwitchToWhatsApp?: () => void;
}

export const InstagramSim: React.FC<InstagramSimProps> = ({ onSwitchToWhatsApp }) => {
  const [view, setView] = useState<'profile' | 'dm'>('profile');
  const [messageSent, setMessageSent] = useState(false);
  const [timePassed, setTimePassed] = useState(false);

  const handleSendMessage = () => {
    setMessageSent(true);
    setTimeout(() => {
      setTimePassed(true);
    }, 1500);
  };

  return (
    <div className="bg-black text-white min-h-full font-sans select-none pb-6">
      {view === 'profile' ? (
        <div>
          {/* Instagram Header */}
          <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-md border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">ratiocity.gh</span>
              <span className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[9px] flex items-center justify-center font-bold">✓</span>
            </div>
            <div className="flex items-center gap-3">
              <MoreHorizontal className="w-4 h-4 text-neutral-300" />
            </div>
          </div>

          {/* Profile Header */}
          <div className="p-4 border-b border-neutral-900">
            <div className="flex items-center justify-between gap-4">
              <div className="relative">
                <div className="w-18 h-18 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center font-bold text-lg tracking-wider text-white border-2 border-black">
                    RC
                  </div>
                </div>
              </div>

              <div className="flex-1 flex justify-around text-center text-xs">
                <div>
                  <div className="font-bold text-sm">342</div>
                  <div className="text-neutral-400 text-[11px]">Posts</div>
                </div>
                <div>
                  <div className="font-bold text-sm">48.2K</div>
                  <div className="text-neutral-400 text-[11px]">Followers</div>
                </div>
                <div>
                  <div className="font-bold text-sm">189</div>
                  <div className="text-neutral-400 text-[11px]">Following</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-3 text-xs space-y-1">
              <div className="font-semibold text-white">Ratio City | Kumasi Tech Hub 🇬🇭</div>
              <p className="text-neutral-300 text-[11px] leading-relaxed">
                Premium Brand-New Apple Devices, MacBooks & Pro Audio in Kumasi.<br />
                📍 Ahodwo Roundabout & Adum branches<br />
                📦 Delivery across Ghana · 1-Year Official Warranty
              </p>
              <div
                onClick={onSwitchToWhatsApp}
                className="text-blue-400 font-medium text-[11px] flex items-center gap-1 cursor-pointer hover:underline pt-0.5"
              >
                <span>wa.me/233240000000 (Tap to Chat WhatsApp)</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-semibold">
              <button
                onClick={() => setView('dm')}
                className="bg-neutral-800 hover:bg-neutral-700 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Message (DM)
              </button>
              <button
                onClick={onSwitchToWhatsApp}
                className="bg-emerald-600/90 hover:bg-emerald-600 py-1.5 rounded-lg text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                WhatsApp Direct
              </button>
            </div>
          </div>

          {/* Grid of posts */}
          <div className="p-1">
            <div className="text-[10px] font-mono text-neutral-400 px-3 py-1.5 uppercase">
              Recent Showroom Stock · Ratio City
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="relative aspect-square bg-neutral-900 overflow-hidden group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80"
                  alt="iPhone 17 Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-1 text-[9px] font-semibold text-white">
                  iPhone 17 Pro Max
                </div>
              </div>
              <div className="relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80"
                  alt="MacBook Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-1 text-[9px] font-semibold text-white">
                  MacBook M3 Series
                </div>
              </div>
              <div className="relative aspect-square bg-neutral-900 overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80"
                  alt="Audio Gear"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-1 text-[9px] font-semibold text-white">
                  Wireless Creator Mic
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 px-4">
            <button
              onClick={() => setView('dm')}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Follow Kwame sending Instagram DM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* DM Conversation View */
        <div className="flex flex-col h-[520px]">
          {/* Header */}
          <div className="px-3 py-2.5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950">
            <div className="flex items-center gap-2.5">
              <button onClick={() => setView('profile')} className="text-neutral-400 hover:text-white">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold">
                RC
              </div>
              <div>
                <div className="text-xs font-semibold flex items-center gap-1">
                  ratiocity.gh
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 text-[8px] flex items-center justify-center font-bold">✓</span>
                </div>
                <div className="text-[10px] text-neutral-400">Active now · Ratio City</div>
              </div>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="text-center text-[10px] font-mono text-neutral-400">
              TODAY · 12:42 PM
            </div>

            {/* Kwame's outgoing message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-blue-600 px-3.5 py-2 text-xs text-white">
                Please how much is iPhone 17 Pro Max?
                <div className="text-[9px] text-blue-200 text-right mt-0.5">12:42 PM · Sent</div>
              </div>
            </div>

            {/* Time delay simulation */}
            {timePassed ? (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                  <div className="flex items-center gap-2 text-amber-400 text-[11px] font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>30 Minutes Pass — 1:12 PM</span>
                  </div>
                  <p className="text-neutral-300 text-[11px] mt-1 leading-relaxed">
                    Still no reply in Instagram DMs. The Ratio City showroom in Kumasi is packed with in-person customers checking out phones and laptops.
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-1 italic">
                    (Ratio City is not being neglectful—staff attention is divided across multiple channels.)
                  </p>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={onSwitchToWhatsApp}
                    className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs flex items-center justify-center gap-2 text-white shadow-lg"
                  >
                    <span>Kwame switches to WhatsApp (2:08 PM)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center pt-4">
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 border border-neutral-700"
                >
                  {messageSent ? 'Simulating 30-minute delay...' : 'Fast-forward 30 minutes'}
                </button>
              </div>
            )}
          </div>

          {/* DM Input bar */}
          <div className="p-3 border-t border-neutral-800 bg-black flex items-center gap-2">
            <div className="flex-1 bg-neutral-900 rounded-full px-4 py-2 text-xs text-neutral-400 flex items-center justify-between">
              <span>Message...</span>
              <ImageIcon className="w-4 h-4 text-neutral-400" />
            </div>
            <Heart className="w-5 h-5 text-neutral-400" />
          </div>
        </div>
      )}
    </div>
  );
};
