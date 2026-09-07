import React, { useRef } from "react";
import { CheckCircle2, Upload, Image as ImageIcon, Sparkles, X } from "lucide-react";
import { PRESET_MEDIA } from "../../constants/defaultState";

const ThankYouPageForm = ({ data, onChange }) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type: png, jpg, jpeg, gif, json
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      onChange({
        ...data,
        mediaType: file.type.includes("json") ? "lottie" : "upload",
        mediaUrl: result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handlePresetSelect = (preset) => {
    onChange({
      ...data,
      mediaType: "preset",
      mediaUrl: preset.url,
    });
  };

  const handleRemoveMedia = () => {
    onChange({
      ...data,
      mediaUrl: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
        <CheckCircle2 className="w-4 h-4" />
        <span>Step 3: Thank You & Confirmation Page</span>
      </div>

      {/* Media Upload Section */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Celebration Media / Illustration
        </label>
        <p className="text-[11px] text-slate-400 mb-3">
          Upload media (PNG, JPG, JPEG, GIF, Lottie) or choose from preset graphics.
        </p>

        {/* Current Media Preview or Upload Box */}
        {data.mediaUrl ? (
          <div className="relative group rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/80 p-3 flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center border border-slate-700">
              <img
                src={data.mediaUrl}
                alt="Selected celebration media"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&auto=format&fit=crop&q=80";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-200 truncate">
                Active Media Asset
              </p>
              <p className="text-[11px] text-slate-400">
                Shown at the top of the Thank You confirmation step.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  Change file
                </button>
                <span className="text-slate-600">•</span>
                <button
                  type="button"
                  onClick={handleRemoveMedia}
                  className="text-xs font-medium text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-2xl p-6 text-center cursor-pointer transition-all hover:bg-slate-800/40 group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-indigo-600/20 text-slate-400 group-hover:text-indigo-400 mx-auto flex items-center justify-center mb-2 transition-colors">
              <Upload className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-slate-200">
              Click to upload media file
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Supports PNG, JPG, JPEG, GIF, and Lottie JSON
            </p>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".png,.jpg,.jpeg,.gif,.json,image/png,image/jpeg,image/gif,application/json"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Preset Media Quick Picker */}
        <div className="mt-3">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
            Or select a quick celebration preset:
          </span>
          <div className="grid grid-cols-3 gap-2">
            {PRESET_MEDIA.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetSelect(preset)}
                className={`relative rounded-xl overflow-hidden border p-1 text-left transition-all cursor-pointer ${
                  data.mediaUrl === preset.url
                    ? "border-indigo-500 ring-2 ring-indigo-500/40 bg-indigo-950/20"
                    : "border-slate-800 hover:border-slate-700 bg-slate-900/60"
                }`}
              >
                <div className="h-14 w-full rounded-lg overflow-hidden bg-slate-800 mb-1">
                  <img
                    src={preset.url}
                    alt={preset.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[11px] font-medium text-slate-300 block truncate px-1">
                  {preset.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Title */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Thank You Title <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          placeholder="e.g. Thank you for your feedback!"
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2.5 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
        />
      </div>

      {/* Subtitle */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Thank You Subtitle
        </label>
        <textarea
          rows={2}
          value={data.subtitle}
          onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
          placeholder="e.g. Your input helps us make our product better every day."
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 resize-none"
        />
      </div>

      {/* Button Text */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Dismiss / Done Button Label
        </label>
        <input
          type="text"
          value={data.buttonText}
          onChange={(e) => onChange({ ...data, buttonText: e.target.value })}
          placeholder="e.g. Done or Close"
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2.5 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
        />
      </div>
    </div>
  );
};

export default ThankYouPageForm;
