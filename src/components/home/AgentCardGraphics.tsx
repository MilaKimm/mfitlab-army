"use client";

/* Mini UI mockups for each agent card — inspired by ax-menu-v2 graphics */

export function GeoGraphic() {
  return (
    <div className="w-full h-full flex items-end justify-center p-3 overflow-hidden">
      <div className="w-full max-w-[140px] space-y-2">
        <div className="bg-white/80 rounded-lg p-2 shadow-sm border border-cyan-100">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-[7px] text-white font-bold">AI</div>
            <div className="h-1.5 bg-cyan-100 rounded-full flex-1" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 text-white text-[6px] flex items-center justify-center font-bold">1</span>
              <div className="h-1.5 bg-cyan-200 rounded-full flex-1" />
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-300 text-white text-[6px] flex items-center justify-center font-bold">2</span>
              <div className="h-1.5 bg-cyan-100 rounded-full flex-1" />
            </div>
          </div>
        </div>
        <div className="bg-white/60 rounded-lg p-2 border border-cyan-50">
          <div className="h-1.5 bg-cyan-100 rounded-full w-3/4 mb-1" />
          <div className="h-1.5 bg-cyan-50 rounded-full w-1/2" />
        </div>
      </div>
    </div>
  );
}

export function LmfGraphic() {
  return (
    <div className="w-full h-full flex items-end justify-center p-3 overflow-hidden">
      <div className="w-full max-w-[140px] space-y-2">
        <div className="bg-white/80 rounded-lg p-2 shadow-sm border border-pink-100">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-5 h-5 rounded bg-pink-500 flex items-center justify-center text-[7px] text-white font-bold">AD</div>
            <div className="flex-1">
              <div className="h-1.5 bg-pink-200 rounded-full w-full mb-0.5" />
              <div className="h-1 bg-pink-100 rounded-full w-2/3" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-pink-50 rounded p-1 text-center">
              <div className="text-[7px] font-bold text-pink-600">CTR</div>
              <div className="text-[8px] font-bold text-pink-700">+87%</div>
            </div>
            <div className="bg-pink-50 rounded p-1 text-center">
              <div className="text-[7px] font-bold text-pink-600">ROAS</div>
              <div className="text-[8px] font-bold text-pink-700">3x</div>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          {["KO", "EN", "JP"].map((lang) => (
            <span key={lang} className="text-[6px] bg-pink-100 text-pink-600 rounded px-1 py-0.5 font-medium">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CroGraphic() {
  return (
    <div className="w-full h-full flex items-end justify-center p-3 overflow-hidden">
      <div className="w-full max-w-[140px] space-y-2">
        <div className="flex gap-1.5">
          <div className="flex-1 bg-white/60 rounded-lg p-1.5 border border-gray-200">
            <div className="text-[7px] text-gray-400 mb-1">Page A</div>
            <div className="h-8 bg-gray-100 rounded" />
          </div>
          <div className="flex-1 bg-white/80 rounded-lg p-1.5 border-2 border-purple-300 relative">
            <div className="text-[7px] text-purple-500 mb-1">Page B</div>
            <div className="h-8 bg-purple-50 rounded" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-[6px] text-white">✓</span>
            </div>
          </div>
        </div>
        <div className="bg-white/80 rounded-lg p-2 border border-purple-100">
          <div className="flex items-center justify-between">
            <div className="text-[7px] text-gray-500">ICE Score</div>
            <div className="text-[9px] font-bold text-purple-600">9.2</div>
          </div>
          <div className="mt-1 h-1.5 bg-purple-100 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: "92%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeadMagnetGraphic() {
  return (
    <div className="w-full h-full flex items-end justify-center p-3 overflow-hidden">
      <div className="w-full max-w-[140px] space-y-2">
        <div className="bg-white/80 rounded-lg p-2 shadow-sm border border-amber-100">
          <div className="text-[7px] font-semibold text-amber-700 mb-1.5">Product Finder</div>
          <div className="space-y-1">
            {[true, false, false].map((selected, i) => (
              <div key={i} className={`flex items-center gap-1.5 rounded p-1 ${selected ? "bg-amber-50 border border-amber-200" : ""}`}>
                <div className={`w-2.5 h-2.5 rounded-full border ${selected ? "border-amber-500 bg-amber-500" : "border-gray-300"}`}>
                  {selected && <div className="w-full h-full rounded-full bg-white scale-50" />}
                </div>
                <div className={`h-1 rounded-full flex-1 ${selected ? "bg-amber-300" : "bg-gray-200"}`} />
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex items-center gap-1">
            <div className="text-[6px] text-gray-400">3/5</div>
            <div className="h-1 bg-gray-100 rounded-full flex-1 overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VoiceGraphic() {
  return (
    <div className="w-full h-full flex items-end justify-center p-3 overflow-hidden">
      <div className="w-full max-w-[140px] space-y-2">
        <div className="bg-slate-800 rounded-lg p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[7px] text-white font-medium">AI Call</div>
            <div className="text-[7px] text-green-400">● Live</div>
          </div>
          {/* Waveform */}
          <div className="flex items-center justify-center gap-[2px] h-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-[3px] bg-indigo-400 rounded-full animate-pulse"
                style={{
                  height: `${8 + Math.sin(i * 0.8) * 12}px`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.6 + Math.sin(i * 0.5) * 0.4,
                }}
              />
            ))}
          </div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-2 border border-indigo-100">
          <div className="h-1.5 bg-indigo-200 rounded-full w-full mb-1" />
          <div className="h-1 bg-indigo-100 rounded-full w-2/3" />
        </div>
      </div>
    </div>
  );
}
