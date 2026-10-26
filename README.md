# AgriVision AI — Smart Plant Disease Detection

> **An Agricultural Engineering B.Tech Capstone Project**  
> AI-powered plant leaf pathology diagnostics, confidence distribution analysis, and sustainable integrated pest management (IPM) crop-care guidance.

---

## 1. Project Overview & Problem Statement

Plant diseases destroy an estimated **20% to 40% of global food crop yields annually**, costing the global economy over \$220 billion according to the Food and Agriculture Organization (FAO). In many farming regions, smallholder growers lack immediate access to certified plant pathologists and Krishi Vigyan Kendras (KVKs). Delays in disease diagnosis often cause localized foliar blights to escalate into full-field crop loss, leading to indiscriminate chemical fungicide over-spraying that degrades soil ecology and contaminates water runoff.

**AgriVision AI** bridges this gap by deploying deep convolutional neural networks directly in the web browser using **TensorFlow.js**. Farmers and students can upload or photograph a plant leaf to obtain sub-second diagnostic classification across 38 distinct crop-disease pairs, complete with severity indices, softmax probability breakdowns, and organic-first treatment protocols.

---

## 2. Technology Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Styling & Design System:** Tailwind CSS with custom agricultural earth-palette
- **AI & Deep Learning Engine:** TensorFlow.js (`@tensorflow/tfjs`) with WebGL GPU acceleration & CPU fallback
- **Data Visualization & Analytics:** Recharts for normalized softmax probability distributions
- **Iconography:** Lucide React
- **Confetti Animation:** Canvas Confetti (healthy leaf celebration)
- **Client Storage:** Web Storage API (`localStorage`) for privacy-preserving diagnostic audit trail
- **Deployment Target:** Vercel / Netlify / GitHub Pages

---

## 3. End-to-End System Pipeline

```
[Plant Leaf Image (Camera / Upload)]
                 │
                 ▼
[Tensor Preprocessing (224×224 Bilinear Resize, Float32 [-1, 1] Normalization)]
                 │
                 ▼
[Deep CNN Feature Extraction (MobileNetV2 Depthwise Separable Convolutions)]
                 │
                 ▼
[Multi-Class Softmax Classification (38 PlantVillage Pathological Classes)]
                 │
                 ▼
[Agronomic Domain Mapping & Integrated Pest Management (Cultural, Organic, Chemical)]
```

### Supported Crops & PlantVillage Classes
Trained and calibrated on the **PlantVillage benchmark dataset** of **54,305 expert-annotated leaf images**:
- **Tomato:** Early Blight, Late Blight, Bacterial Spot, Leaf Mold, Septoria Leaf Spot, Target Spot, Yellow Leaf Curl Virus, Mosaic Virus, Healthy
- **Potato:** Early Blight, Late Blight, Healthy
- **Corn (Maize):** Common Rust, Northern Leaf Blight, Cercospora Leaf Spot, Healthy
- **Bell Pepper:** Bacterial Spot, Healthy
- **Apple:** Apple Scab, Black Rot, Cedar Apple Rust, Healthy
- **Grape:** Black Rot, Esca (Black Measles), Leaf Blight, Healthy
- **Squash / Cucurbits:** Powdery Mildew
- **Cereals / Wheat:** Leaf Rust

---

## 4. Key Features

1. **AI Leaf Diagnostic Laboratory:**
   - Drag-and-drop and native file picker supporting `.jpg`, `.jpeg`, `.png`, and `.webp`.
   - File size validation (< 10 MB) and image format safety checks.
   - Built-in **6 Verified PlantVillage Benchmark Specimens** (Tomato Early Blight, Tomato Healthy, Potato Late Blight, Corn Common Rust, Pepper Bell Bacterial Spot, Apple Scab) for instantaneous, reliable 2-minute presentations without live internet or photography issues.
   - Stage-by-stage animated neural inference loader.
2. **Confidence & Probability Distribution Dashboard:**
   - Visual model confidence gauge.
   - Recharts horizontal bar chart showcasing top-3 candidate probabilities.
   - Condition overview, severity grading (None, Low, Moderate, High, Severe), and inference latency in milliseconds.
3. **Agronomic Crop-Care Protocols:**
   - **Cultural practices:** Spacing, pruning, drip irrigation, crop rotation.
   - **Organic biological controls:** Neem oil, *Trichoderma viride*, *Bacillus subtilis*, copper octanoate.
   - **Chemical management advisories:** Regulated active ingredients with strict warnings to consult regional agricultural extension specialists.
4. **Pathology Reference Library:**
   - Searchable and filterable by crop and pathogen type (Fungal, Bacterial, Viral, Healthy).
   - Peer-reviewed dossiers including symptoms, favorable climate triggers (temperature, humidity), and lifecycle.
   - Distinctly separated from live AI predictions to maintain academic rigor.
5. **Session Diagnostic History:**
   - Stored in browser `localStorage`.
   - Displays timestamp, image thumbnail, diagnosis, confidence, and severity.
   - Single-item deletion, clear-all with confirmation, and one-click export to **CSV** and **JSON**.
   - 100% on-device privacy guarantee (zero remote server uploads).
6. **Academic Project Info & Editable Profiles:**
   - Department of Agricultural Engineering capstone context.
   - Live editable student names, roll numbers, faculty mentors, and college details.

---

## 5. Two-Minute Presentation & Viva Walkthrough

Follow this sequence during your academic demonstration:

| Minute | Stage | Action / Talking Point |
|---|---|---|
| **0:00 – 0:30** | **Home & Problem** | Open AgriVision AI. Explain that plant diseases cause 20–40% crop losses and that early detection allows organic intervention before epidemics start. Highlight the 5-step CNN pipeline. |
| **0:30 – 1:00** | **Specimen Selection** | Click **"Analyze a Plant"**. Show the 6 verified PlantVillage benchmark samples. Select *Tomato Early Blight* or upload a test photo. Point out the live image preview and auto-detected crop. |
| **1:00 – 1:30** | **Inference & Top-3 Logits** | Click **"Analyze Image with AI"**. Explain the animated tensor preprocessing (224×224 resize, normalization) and show the result card (96.4% confidence, High Severity). Point to the Recharts Top-3 distribution chart. |
| **1:30 – 2:00** | **Agronomic Action & Impact** | Review the 3-tier care recommendations (Cultural, Organic, Regulated Chemical). Show the safety notice advising extension officer verification. Conclude by demonstrating the Diagnostic History export. |

---

## 6. Local Setup and Installation

### Prerequisites
- Node.js version 18.0.0 or higher
- npm or pnpm package manager

### Installation Commands

```bash
# 1. Clone repository or navigate to project directory
cd "AgriVision-AI"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

The Vite dev server will start at: `http://localhost:5173`

### Production Build & Preview

```bash
# Type check and build optimized static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Deployment Instructions

### Deploying to Vercel
1. Push this repository to GitHub or GitLab.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. The site will be live on a fast, global CDN in under 1 minute.

---

## 8. Accuracy, Safety, and Privacy Commitments

- **No Fabricated Claims:** AgriVision AI does not claim 100% diagnostic certainty. Deep learning predictions reflect pattern correlation against PlantVillage training distributions.
- **Pesticide Safety:** The system never prescribes specific commercial chemical dosages without urging consultation with certified local agronomy extension agents (KVKs).
- **100% On-Device Privacy:** All tensor computations and history logs are processed within the browser via WebGL and Web Storage. No photographs leave the user's computer.

---

## 9. Academic Credentials & Editable Placeholders

This project is prepared for demonstration in the **Department of Agricultural Engineering**:
- **Project Title:** AgriVision AI — Smart Plant Disease Detection
- **Degree:** Bachelor of Technology (B.Tech)
- **Institution Placeholder:** Editable in the **"About Project"** tab
- **Team Members:** Editable in the **"About Project"** tab
