export const NAV_LINKS = ["About", "Skills", "Journey", "Projects", "Contact"];

export const PHRASES = [
  "AI-powered web apps",
  "multilingual video dubbing",
  "intelligent ML systems",
  "business order management",
  "computer vision systems",
  "clean full-stack code",
];

export const SKILLS = [
  { name: "HTML · CSS · JS", pct: 92, icon: "🌐", desc: "ES6+, animations, responsive design & modern CSS." },
  { name: "Python · C++", pct: 87, icon: "🐍", desc: "Data processing, automation, OOP & algorithm design." },
  { name: "APIs & Integrations", pct: 80, icon: "🔌", desc: "REST, AI APIs, third-party services & webhooks." },
  { name: "ML & AI", pct: 76, icon: "🤖", desc: "Model training, object detection, NLP & AI APIs." },
  { name: "MySQL · MongoDB", pct: 74, icon: "🗄️", desc: "Database design, query optimisation & schema modelling." },
  { name: "React · Next.js", pct: 72, icon: "⚛️", desc: "Component UI, hooks, state management & SSR." },
  { name: "Git · DevOps", pct: 71, icon: "⚙️", desc: "Version control, GitHub workflows, CI/CD & Linux." },
  { name: "UI/UX Design", pct: 70, icon: "🎨", desc: "Figma, wireframing, design systems & user research." },
  { name: "Node.js · Express", pct: 68, icon: "🟢", desc: "RESTful APIs, server-side JS & backend architecture." },
];

export const PROJECTS = [
  {
    id: "p1", num: "01", badge: "FEATURED", tag: "AI Platform",
    title: "DubStudio — AI Video Dubbing",
    sub: "Whisper · ElevenLabs · Google Translate · FFmpeg",
    tags: ["Python", "Flask", "Whisper", "ElevenLabs"],
    desc: "End-to-end multilingual video dubbing — FFmpeg extraction, Whisper transcription, Google Translate, ElevenLabs TTS. 50+ languages with speaker diarisation.",
    metrics: [{ v: "50+", l: "Languages" }, { v: "2 GB", l: "Max Upload" }, { v: "5", l: "App Pages" }],
    link: "https://github.com/marsilaseimoon-sys/smart-video-dubbing-system",
  },
  {
    id: "p2", num: "02", tag: "Healthcare",
    title: "MediCare Pro — Hospital Management",
    sub: "Patients · Doctors · Pharmacy · Billing",
    tags: ["Python", "Flask", "SQLite", "Bootstrap"],
    desc: "Full-stack healthcare platform — real-time admin dashboard, patient & doctor records, appointment scheduling, pharmacy inventory and billing engine.",
    metrics: [{ v: "6", l: "Admin Pages" }, { v: "4", l: "Public Pages" }, { v: "<1min", l: "Setup" }],
    link: "https://github.com/marsilaseimoon-sys/mediCare-pro-project",
  },
  {
    id: "p3", num: "03", badge: "NEW", tag: "Business",
    title: "OrderMS — Business Order Management",
    sub: "Flask · Bootstrap 5 · Excel · WhatsApp · AI Reports",
    tags: ["Flask", "Bootstrap 5", "scikit-learn", "Excel"],
    desc: "AI sales forecasting, WhatsApp auto-confirmations, Excel sync, 10-page dashboard with 4 matplotlib charts and session-based authentication.",
    metrics: [{ v: "10", l: "Pages" }, { v: "4", l: "AI Charts" }, { v: "30", l: "Demo Orders" }],
    link: "https://github.com/marsilaseimoon-sys/orderms",
  },
  {
    id: "p4", num: "04", badge: "NEW", tag: "Computer Vision",
    title: "BagDetect AI — YOLOv8 Detection",
    sub: "React · FastAPI · YOLOv8 · Roboflow · OpenCV",
    tags: ["Python", "React", "YOLOv8", "FastAPI", "OpenCV"],
    desc: "Full-stack computer vision platform — custom YOLOv8 model trained on 569 annotated bag images (5 classes), real-time FastAPI inference backend, React dashboard with live detection overlay, confidence sliders & session history.",
    metrics: [{ v: "569", l: "Training Images" }, { v: "5", l: "Bag Classes" }, { v: "Real-time", l: "Inference" }],
    link: "https://github.com/marsellaseimoon/bag-detection",
  },
  {
    id: "p5", num: "05", tag: "Finance & AI",
    title: "Crypto Signal Generator",
    sub: "RSI · MACD · Bollinger Bands · Live Feeds",
    tags: ["Python", "Pandas", "TA-Lib"],
    desc: "Automated trading signal engine computing RSI, MACD, and Bollinger Band indicators from live market feeds with backtesting.",
    link: "https://github.com/marsellaseimoon/crypto-signals",
  },
  {
    id: "p6", num: "06", tag: "Systems · OOP",
    title: "Hotel Management System",
    sub: "Full OOP hotel operations — rooms, bookings, billing",
    tags: ["C++", "OOP", "DSA"],
    desc: "Object-oriented hotel operations system — room allocation, booking lifecycle, billing engine demonstrating strong systems programming.",
    link: "https://github.com/marsellaseimoon/hotel-management",
  },
];

export const STATS = [
  { n: "7+", l: "Projects Shipped" },
  { n: "9",  l: "Tech Skills" },
  { n: "50+", l: "Languages (DubStudio)" },
  { n: "2026", l: "Available Now" },
];

export const JOURNEY = [
  {
    label: "Education",
    items: [
      { year: "2023 — Present", title: "B.S. Computer Science", place: "Pakistan · Undergraduate", desc: "Specialising in software engineering, AI/ML, algorithms & data structures." },
      { year: "2021 — 2023", title: "Pre-Engineering F.Sc.", place: "Pakistan · Intermediate", desc: "Mathematics, Physics, Computer Science. Built first web projects." },
    ],
  },
  {
    label: "Experience",
    items: [
      { year: "2024 — Present", title: "Freelance Developer", place: "Fiverr & Remote", desc: "Delivering full-stack web applications, AI integrations, and automation tools for clients globally." },
      { year: "2023 — 2024", title: "Self-taught AI/ML Engineering", place: "Personal Projects", desc: "Trained YOLOv8 models, built NLP pipelines. Shipped DubStudio supporting 50+ languages." },
    ],
  },
];

export const CONTACTS = [
  ["Email",    "marsilaseimoon@gmail.com", "mailto:marsilaseimoon@gmail.com"],
  ["Phone",    "+92 325 254 1968",          "tel:+923252541968"],
  ["GitHub",   "github.com/marsilaseimoon-sys", "https://github.com/marsilaseimoon-sys/"],
  ["Fiverr",   "fiverr.com/s/kLBPdjb",     "https://www.fiverr.com/s/kLBPdjb"],
  ["Location", "Pakistan 🇵🇰",             null],
  ["Status",   "✦ Available · 2026",        null],
];
