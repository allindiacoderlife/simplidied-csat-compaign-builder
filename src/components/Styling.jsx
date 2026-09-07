import React from "react";
import ColorPickerInput from "./common/ColorPickerInput";
import { Palette, Type, Square, MoveVertical, Sparkles } from "lucide-react";

const Styling = ({ styling, setStyling }) => {
  const updateStyle = (key, value) => {
    setStyling((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Theme Colors Section */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-lg backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
          <Palette className="w-4 h-4" />
          <span>Core Colors</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ColorPickerInput
            label="Background Color"
            value={styling.bgColor}
            onChange={(val) => updateStyle("bgColor", val)}
            helperText="Modal card background"
          />

          <ColorPickerInput
            label="Title Color"
            value={styling.titleColor}
            onChange={(val) => updateStyle("titleColor", val)}
            helperText="Headlines"
          />

          <ColorPickerInput
            label="Subtitle Color"
            value={styling.subtitleColor}
            onChange={(val) => updateStyle("subtitleColor", val)}
            helperText="Body & descriptions"
          />

          <ColorPickerInput
            label="Button Color"
            value={styling.buttonColor}
            onChange={(val) => updateStyle("buttonColor", val)}
            helperText="Primary CTA fill"
          />

          <ColorPickerInput
            label="Button Text Color"
            value={styling.buttonTextColor}
            onChange={(val) => updateStyle("buttonTextColor", val)}
            helperText="CTA button label"
          />
        </div>
      </div>

      {/* 2. Rating Element Colors */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-lg backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
          <Sparkles className="w-4 h-4" />
          <span>Rating Component Colors</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ColorPickerInput
            label="Selected Rating Color"
            value={styling.ratingSelectedColor}
            onChange={(val) => updateStyle("ratingSelectedColor", val)}
            helperText="Active star / number fill"
          />

          <ColorPickerInput
            label="Unselected Rating Color"
            value={styling.ratingUnselectedColor}
            onChange={(val) => updateStyle("ratingUnselectedColor", val)}
            helperText="Inactive star / border"
          />
        </div>
      </div>

      {/* 3. Typography Customization */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-lg backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
          <Type className="w-4 h-4" />
          <span>Typography & Text Hierarchy</span>
        </div>

        <div className="space-y-4">
          {/* Font Family */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Font Family
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: "Inter", value: "Inter" },
                { label: "Jakarta Sans", value: "Plus Jakarta Sans" },
                { label: "Outfit", value: "Outfit" },
                { label: "System UI", value: "sans-serif" },
              ].map((font) => (
                <button
                  key={font.value}
                  type="button"
                  onClick={() => updateStyle("fontFamily", font.value)}
                  className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                    styling.fontFamily === font.value
                      ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 ring-1 ring-indigo-500/50"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800"
                  }`}
                  style={{ fontFamily: font.value }}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Scale */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Font Size Scale
              </label>
              <span className="text-[11px] text-slate-400 font-mono">
                {styling.fontSize.toUpperCase()}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "sm", label: "Compact (Small)" },
                { id: "md", label: "Standard (Medium)" },
                { id: "lg", label: "Spacious (Large)" },
              ].map((size) => (
                <button
                  key={size.id}
                  type="button"
                  onClick={() => updateStyle("fontSize", size.id)}
                  className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                    styling.fontSize === size.id
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Weight */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Title Font Weight
              </label>
              <span className="text-[11px] text-slate-400 font-mono">
                Weight {styling.fontWeight}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: "400", label: "Regular" },
                { id: "500", label: "Medium" },
                { id: "600", label: "SemiBold" },
                { id: "700", label: "Bold" },
              ].map((weight) => (
                <button
                  key={weight.id}
                  type="button"
                  onClick={() => updateStyle("fontWeight", weight.id)}
                  className={`py-2 px-2 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                    styling.fontWeight === weight.id
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                      : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
                  }`}
                >
                  {weight.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Geometry & Button Dimensions */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-lg backdrop-blur-sm space-y-4">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
          <Square className="w-4 h-4" />
          <span>Card & Button Geometry</span>
        </div>

        {/* Border Radius */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Border Radius
            </label>
            <span className="text-xs font-mono text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded-lg border border-indigo-800/50">
              {styling.borderRadius}px
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="32"
            step="2"
            value={styling.borderRadius}
            onChange={(e) => updateStyle("borderRadius", Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>Sharp (0px)</span>
            <span>Soft (16px)</span>
            <span>Extra Round (32px)</span>
          </div>
        </div>

        {/* Button Width */}
        <div className="pt-2 border-t border-slate-800">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Button Width
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => updateStyle("buttonWidth", "full")}
              className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                styling.buttonWidth === "full"
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                  : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
              }`}
            >
              Full Width (100%)
            </button>
            <button
              type="button"
              onClick={() => updateStyle("buttonWidth", "auto")}
              className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                styling.buttonWidth === "auto"
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                  : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
              }`}
            >
              Compact / Auto Width
            </button>
          </div>
        </div>

        {/* Button Height */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Button Height
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "sm", label: "Compact (38px)" },
              { id: "md", label: "Standard (46px)" },
              { id: "lg", label: "Large (54px)" },
            ].map((ht) => (
              <button
                key={ht.id}
                type="button"
                onClick={() => updateStyle("buttonHeight", ht.id)}
                className={`py-2 px-2 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                  styling.buttonHeight === ht.id
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                    : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
                }`}
              >
                {ht.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Placement */}
        <div className="pt-2 border-t border-slate-800">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Popup Placement Style
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => updateStyle("position", "bottom")}
              className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                styling.position === "bottom"
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                  : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
              }`}
            >
              Mobile Bottom Sheet
            </button>
            <button
              type="button"
              onClick={() => updateStyle("position", "center")}
              className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                styling.position === "center"
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-sm"
                  : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800"
              }`}
            >
              Centered Modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Styling;
