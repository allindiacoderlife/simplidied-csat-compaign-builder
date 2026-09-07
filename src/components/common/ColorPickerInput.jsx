import React from "react";

const SWATCHES = [
  "#ffffff",
  "#0f172a",
  "#4f46e5",
  "#059669",
  "#ea580c",
  "#e11d48",
  "#7c3aed",
  "#0284c7",
  "#f59e0b",
  "#64748b",
];

const ColorPickerInput = ({ label, value, onChange, helperText }) => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          {label}
        </label>
        {helperText && (
          <span className="text-[11px] text-slate-400">{helperText}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-slate-700 shadow-inner group cursor-pointer bg-slate-800">
          <input
            type="color"
            value={value || "#ffffff"}
            onChange={(e) => onChange(e.target.value)}
            className="absolute -top-4 -left-4 w-20 h-20 opacity-0 cursor-pointer"
          />
          <div
            className="w-7 h-7 rounded-lg border border-black/20 shadow-sm transition-transform group-hover:scale-110"
            style={{ backgroundColor: value }}
          />
        </div>

        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">
            #
          </span>
          <input
            type="text"
            value={(value || "").replace("#", "")}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9A-Fa-f]/g, "").slice(0, 6);
              onChange(`#${val}`);
            }}
            placeholder="ffffff"
            className="w-full bg-slate-800/90 text-slate-100 text-sm font-mono pl-7 pr-3 py-2 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Quick swatches */}
      <div className="flex items-center gap-1.5 mt-1 overflow-x-auto py-0.5">
        {SWATCHES.map((swatch) => (
          <button
            key={swatch}
            type="button"
            onClick={() => onChange(swatch)}
            className={`w-4 h-4 rounded-full border transition-all ${
              value?.toLowerCase() === swatch.toLowerCase()
                ? "border-white ring-2 ring-indigo-500 scale-110"
                : "border-slate-700 hover:scale-115 opacity-80 hover:opacity-100"
            }`}
            style={{ backgroundColor: swatch }}
            title={swatch}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPickerInput;
