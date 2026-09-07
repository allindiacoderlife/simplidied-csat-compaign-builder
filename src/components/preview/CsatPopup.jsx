import React from "react";
import { Star, Check, X, Sparkles } from "lucide-react";

const CsatPopup = ({
  content,
  styling,
  currentStep,
  setCurrentStep,
  selectedRating,
  setSelectedRating,
  selectedOptions,
  setSelectedOptions,
  comment,
  setComment,
  onSubmitFeedback,
  onResetTest,
}) => {
  // Font size mapping
  const titleSizeClass =
    styling.fontSize === "sm"
      ? "text-base"
      : styling.fontSize === "lg"
      ? "text-xl"
      : "text-lg";

  const bodySizeClass =
    styling.fontSize === "sm"
      ? "text-xs"
      : styling.fontSize === "lg"
      ? "text-sm"
      : "text-xs";

  const buttonHeightClass =
    styling.buttonHeight === "sm"
      ? "py-2 text-xs min-h-[38px]"
      : styling.buttonHeight === "lg"
      ? "py-3.5 text-sm min-h-[52px]"
      : "py-2.5 text-sm min-h-[44px]";

  const buttonWidthClass = styling.buttonWidth === "full" ? "w-full" : "w-auto px-6";

  const handleToggleOption = (optId) => {
    setSelectedOptions((prev) =>
      prev.includes(optId) ? prev.filter((id) => id !== optId) : [...prev, optId]
    );
  };

  return (
    <div
      className={`w-full transition-all duration-300 shadow-2xl relative ${
        styling.position === "bottom"
          ? "rounded-t-[24px] pb-6 pt-3 px-5 border-t border-black/10"
          : "rounded-[24px] p-5 my-auto max-w-[92%] border border-black/10 mx-auto"
      }`}
      style={{
        backgroundColor: styling.bgColor,
        fontFamily: styling.fontFamily,
        borderRadius:
          styling.position === "bottom"
            ? `${styling.borderRadius}px ${styling.borderRadius}px 0 0`
            : `${styling.borderRadius}px`,
      }}
    >
      {/* Top Handle Bar for Bottom Sheet */}
      {styling.position === "bottom" && (
        <div className="w-10 h-1 rounded-full bg-slate-300/60 mx-auto mb-3" />
      )}

      {/* STEP 1: INITIAL FEEDBACK PROMPT */}
      {currentStep === "initial" && (
        <div className="flex flex-col items-center text-center space-y-3 py-1">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-1">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3
            className={`font-bold tracking-tight ${titleSizeClass}`}
            style={{
              color: styling.titleColor,
              fontWeight: styling.fontWeight,
            }}
          >
            {content.initial.title || "How was your experience?"}
          </h3>

          <p
            className={`leading-relaxed max-w-[260px] ${bodySizeClass}`}
            style={{ color: styling.subtitleColor }}
          >
            {content.initial.subtitle || "Help us improve by sharing your thoughts."}
          </p>

          <div className="pt-2 w-full flex justify-center">
            <button
              type="button"
              onClick={() => setCurrentStep("feedback")}
              className={`font-semibold rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${buttonWidthClass} ${buttonHeightClass}`}
              style={{
                backgroundColor: styling.buttonColor,
                color: styling.buttonTextColor,
                borderRadius: `${Math.min(styling.borderRadius, 16)}px`,
              }}
            >
              <span>{content.initial.buttonText || "Give Feedback"}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: FEEDBACK & RATING PAGE */}
      {currentStep === "feedback" && (
        <div className="space-y-3.5">
          {/* Headline & Subtitle */}
          <div className="text-center space-y-1">
            <h3
              className={`font-bold tracking-tight ${titleSizeClass}`}
              style={{
                color: styling.titleColor,
                fontWeight: styling.fontWeight,
              }}
            >
              {content.initial.title || "How was your experience?"}
            </h3>
            {content.feedback.ratingLabel && (
              <p
                className={`leading-snug ${bodySizeClass}`}
                style={{ color: styling.subtitleColor }}
              >
                {content.feedback.ratingLabel}
              </p>
            )}
          </div>

          {/* Rating Scale: Stars vs Numbers */}
          <div className="py-1">
            {content.feedback.ratingType === "stars" ? (
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((starVal) => {
                  const isFilled = (selectedRating || 0) >= starVal;
                  return (
                    <button
                      key={starVal}
                      type="button"
                      onClick={() => setSelectedRating(starVal)}
                      className="p-1 transition-transform hover:scale-120 active:scale-90 cursor-pointer"
                      title={`Rate ${starVal} out of 5`}
                    >
                      <Star
                        className="w-7 h-7 transition-colors"
                        style={{
                          fill: isFilled ? styling.ratingSelectedColor : "none",
                          color: isFilled
                            ? styling.ratingSelectedColor
                            : styling.ratingUnselectedColor,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((numVal) => {
                  const isSelected = selectedRating === numVal;
                  return (
                    <button
                      key={numVal}
                      type="button"
                      onClick={() => setSelectedRating(numVal)}
                      className="w-9 h-9 rounded-xl font-bold text-sm flex items-center justify-center border transition-all active:scale-90 cursor-pointer shadow-sm"
                      style={{
                        backgroundColor: isSelected
                          ? styling.ratingSelectedColor
                          : "transparent",
                        borderColor: isSelected
                          ? styling.ratingSelectedColor
                          : styling.ratingUnselectedColor,
                        color: isSelected ? "#ffffff" : styling.titleColor,
                      }}
                    >
                      {numVal}
                    </button>
                  );
                })}
              </div>
            )}
            <div className="flex justify-between px-2 text-[10px] mt-1 font-medium" style={{ color: styling.subtitleColor }}>
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>

          {/* Dynamic Options List */}
          {content.feedback.options && content.feedback.options.length > 0 && (
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-wider mb-1.5 text-center"
                style={{ color: styling.subtitleColor }}
              >
                What stood out?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {content.feedback.options.map((opt) => {
                  const isSelected = selectedOptions.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleToggleOption(opt.id)}
                      className="px-2.5 py-1 rounded-full text-xs font-medium border transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                      style={{
                        backgroundColor: isSelected
                          ? `${styling.buttonColor}15`
                          : "transparent",
                        borderColor: isSelected
                          ? styling.buttonColor
                          : styling.ratingUnselectedColor,
                        color: isSelected
                          ? styling.buttonColor
                          : styling.subtitleColor,
                      }}
                    >
                      {isSelected && <Check className="w-3 h-3 shrink-0" />}
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Additional Comment Input */}
          {content.feedback.showComment && (
            <div>
              <textarea
                rows={2}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={
                  content.feedback.commentPlaceholder ||
                  "What made your experience good or bad? (Optional)"
                }
                className="w-full text-xs p-2.5 rounded-xl border bg-black/5 focus:bg-white focus:outline-none transition-all resize-none placeholder:text-slate-400"
                style={{
                  borderColor: styling.ratingUnselectedColor,
                  color: styling.titleColor,
                }}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-1 w-full flex justify-center">
            <button
              type="button"
              onClick={onSubmitFeedback}
              className={`font-semibold rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${buttonWidthClass} ${buttonHeightClass}`}
              style={{
                backgroundColor: styling.buttonColor,
                color: styling.buttonTextColor,
                borderRadius: `${Math.min(styling.borderRadius, 16)}px`,
              }}
            >
              <span>
                {content.feedback.submitButtonText || "Submit Feedback"}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: THANK YOU & CONFIRMATION */}
      {currentStep === "thankYou" && (
        <div className="flex flex-col items-center text-center space-y-3 py-2">
          {/* Media Illustration / GIF / Lottie */}
          {content.thankYou.mediaUrl && (
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-black/10 mb-1">
              <img
                src={content.thankYou.mediaUrl}
                alt="Thank you celebration"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=200&auto=format&fit=crop&q=80";
                }}
              />
            </div>
          )}

          <h3
            className={`font-bold tracking-tight ${titleSizeClass}`}
            style={{
              color: styling.titleColor,
              fontWeight: styling.fontWeight,
            }}
          >
            {content.thankYou.title || "Thank you for your feedback!"}
          </h3>

          <p
            className={`leading-relaxed max-w-[260px] ${bodySizeClass}`}
            style={{ color: styling.subtitleColor }}
          >
            {content.thankYou.subtitle ||
              "Your input directly shapes what we build next."}
          </p>

          <div className="pt-2 w-full flex justify-center">
            <button
              type="button"
              onClick={onResetTest}
              className={`font-semibold rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${buttonWidthClass} ${buttonHeightClass}`}
              style={{
                backgroundColor: styling.buttonColor,
                color: styling.buttonTextColor,
                borderRadius: `${Math.min(styling.borderRadius, 16)}px`,
              }}
            >
              <span>{content.thankYou.buttonText || "Close"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CsatPopup;
