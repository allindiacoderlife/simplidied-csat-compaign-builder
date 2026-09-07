export const INITIAL_CONTENT = {
  initial: {
    title: "How was your experience?",
    subtitle: "Help us improve by sharing a quick moment of your feedback.",
    buttonText: "Give Feedback",
  },
  feedback: {
    ratingType: "stars", // "stars" | "numbers"
    ratingLabel: "How likely are you to recommend us to a friend or colleague?",
    options: [
      { id: "opt-1", label: "Customer Support" },
      { id: "opt-2", label: "Product Speed" },
      { id: "opt-3", label: "Ease of Use" },
      { id: "opt-4", label: "Pricing & Value" },
    ],
    showComment: true,
    commentPlaceholder: "What made your experience good or bad? (Optional)",
    submitButtonText: "Submit Feedback",
  },
  thankYou: {
    mediaType: "preset", // "preset" | "upload"
    mediaUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&auto=format&fit=crop&q=80",
    title: "Thank you for your feedback!",
    subtitle: "Your input directly shapes what we build next. We truly appreciate your time.",
    buttonText: "Done",
  },
};

export const INITIAL_STYLING = {
  bgColor: "#ffffff",
  titleColor: "#0f172a",
  subtitleColor: "#64748b",
  buttonColor: "#4f46e5",
  buttonTextColor: "#ffffff",
  fontSize: "md", // "sm" | "md" | "lg"
  fontWeight: "600", // "400" | "500" | "600" | "700"
  borderRadius: 20, // in px
  buttonWidth: "full", // "full" | "auto"
  buttonHeight: "md", // "sm" | "md" | "lg"
  ratingSelectedColor: "#f59e0b",
  ratingUnselectedColor: "#e2e8f0",
  fontFamily: "Inter",
  position: "bottom", // "bottom" | "center"
};

export const THEME_PRESETS = [
  {
    name: "Modern Indigo",
    id: "indigo",
    styling: {
      bgColor: "#ffffff",
      titleColor: "#0f172a",
      subtitleColor: "#64748b",
      buttonColor: "#4f46e5",
      buttonTextColor: "#ffffff",
      borderRadius: 20,
      ratingSelectedColor: "#f59e0b",
      ratingUnselectedColor: "#e2e8f0",
      fontFamily: "Inter",
    },
  },
  {
    name: "Emerald Fresh",
    id: "emerald",
    styling: {
      bgColor: "#ffffff",
      titleColor: "#064e3b",
      subtitleColor: "#047857",
      buttonColor: "#059669",
      buttonTextColor: "#ffffff",
      borderRadius: 16,
      ratingSelectedColor: "#10b981",
      ratingUnselectedColor: "#d1fae5",
      fontFamily: "Plus Jakarta Sans",
    },
  },
  {
    name: "Sunset Vibrant",
    id: "sunset",
    styling: {
      bgColor: "#fff7ed",
      titleColor: "#7c2d12",
      subtitleColor: "#9a3412",
      buttonColor: "#ea580c",
      buttonTextColor: "#ffffff",
      borderRadius: 24,
      ratingSelectedColor: "#f97316",
      ratingUnselectedColor: "#ffedd5",
      fontFamily: "Outfit",
    },
  },
  {
    name: "Cyber Dark",
    id: "dark",
    styling: {
      bgColor: "#0f172a",
      titleColor: "#f8fafc",
      subtitleColor: "#94a3b8",
      buttonColor: "#3b82f6",
      buttonTextColor: "#ffffff",
      borderRadius: 16,
      ratingSelectedColor: "#fbbf24",
      ratingUnselectedColor: "#334155",
      fontFamily: "Inter",
    },
  },
  {
    name: "Luxury Rose",
    id: "rose",
    styling: {
      bgColor: "#fff1f2",
      titleColor: "#881337",
      subtitleColor: "#9f1239",
      buttonColor: "#e11d48",
      buttonTextColor: "#ffffff",
      borderRadius: 22,
      ratingSelectedColor: "#f43f5e",
      ratingUnselectedColor: "#fecdd3",
      fontFamily: "Outfit",
    },
  },
];

export const PRESET_MEDIA = [
  {
    id: "party",
    name: "Celebration",
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&auto=format&fit=crop&q=80",
    type: "image",
  },
  {
    id: "stars",
    name: "Gratitude",
    url: "https://images.unsplash.com/photo-1531685250784-7569952593d2?w=400&auto=format&fit=crop&q=80",
    type: "image",
  },
  {
    id: "success",
    name: "Thumbs Up",
    url: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=400&auto=format&fit=crop&q=80",
    type: "image",
  },
];
