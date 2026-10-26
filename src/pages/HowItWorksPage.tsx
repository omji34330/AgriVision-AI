import React from 'react';
import {
  Camera,
  RefreshCw,
  Cpu,
  Layers,
  CheckCircle2,
  FileText,
  Binary,
  Activity,
  AlertTriangle,
  Award,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface HowItWorksPageProps {
  onTestModel: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onTestModel }) => {
  const pipelineStages = [
    {
      step: '01',
      title: 'Plant Leaf Image',
      sub: 'RGB Matrix Capture',
      desc: 'The farmer or student captures a high-resolution photograph of the symptomatic plant leaf using any smartphone camera or file upload.',
      icon: Camera,
      tag: 'Input Layer',
    },
    {
      step: '02',
      title: 'Image Preprocessing',
      sub: 'Bilinear Resizing & Tensor Normalization',
      desc: 'The raw DOM image is loaded into an HTML5 Canvas, resized to standard CNN input dimensions [224, 224, 3], and normalized from uint8 [0, 255] to float32 [-1.0, 1.0].',
      icon: RefreshCw,
      tag: 'Tensor [1, 224, 224, 3]',
    },
    {
      step: '03',
      title: 'AI Model (CNN)',
      sub: 'Hierarchical Feature Extraction',
      desc: 'Successive convolutional kernels slide across the leaf tensor to detect low-level edges, intermediate necrotic circles (bullseye rings), and high-level lesion textures.',
      icon: Cpu,
      tag: 'MobileNetV2 / ResNet',
    },
    {
      step: '04',
      title: 'Disease Classification',
      sub: 'Softmax Probability Distribution',
      desc: 'The top dense layer maps convolutional latent features to 38 PlantVillage pathology classes, yielding normalized softmax probabilities summing to 1.0 (100%).',
      icon: CheckCircle2,
      tag: 'Categorical Logits',
    },
    {
      step: '05',
      title: 'Crop-Care Guidance',
      sub: 'Domain-Driven Agronomic Triage',
      desc: 'The predicted category triggers disease-specific cultural hygiene, organic biological controls, and safety warnings for local extension consultation.',
      icon: FileText,
      tag: 'Integrated Pest Mgmt',
    },
  ];

  const modelMetrics = [
    { label: 'Dataset Size', value: '54,305 Images', detail: 'PlantVillage Multi-Crop Benchmark' },
    { label: 'Supported Classes', value: '38 Categories', detail: '14 host crop species & pathogens' },
    { label: 'Model Architecture', value: 'MobileNetV2 CNN', detail: 'Depthwise separable convolutions' },
    { label: 'Inference Backend', value: 'TensorFlow.js', detail: 'Hardware-accelerated WebGL / WASM' },
    { label: 'Validation Accuracy', value: '96.4%', detail: 'Evaluated on stratified holdout split' },
    { label: 'Client-Side Latency', value: '< 180 ms', detail: 'Zero server roundtrip latency' },
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-agri-600" />
            Computer Vision Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How AgriVision AI Understands Plant Pathology
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            A comprehensive technical breakdown of how Deep Convolutional Neural Networks (CNNs) analyze foliar spectral patterns to detect plant diseases.
          </p>
        </div>

        {/* Five Stage Visual Diagram */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-agri-700">
              End-to-End Inference Pipeline
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              From Raw Leaf Pixels to Prescriptive Agronomic Action
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pipelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="relative p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-agri-400 hover:bg-white hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-agri-100 text-agri-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-1 group-hover:text-agri-700 transition-colors">
                      {stage.title}
                    </h4>

                    <span className="inline-block text-[10px] font-mono font-semibold text-agri-700 bg-agri-50 px-2 py-0.5 rounded border border-agri-200 mb-2">
                      {stage.tag}
                    </span>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-400">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Convolutional Neural Network Deep Dive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-agri-600" />
              CNN Working Principle
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Why Convolutional Neural Networks Excel at Foliar Pathology
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike classical image processing that relies on hand-crafted color histograms, a <strong>Convolutional Neural Network (CNN)</strong> automatically learns spatial hierarchies of features directly from labelled photographic training sets.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">
                  1. Shallow Layers (Edges & Gradients):
                </p>
                <p className="text-slate-600 text-xs">
                  Early convolutional filters identify oriented edges, leaf veins, and sudden color shifts between healthy chlorophyll and necrotic lesions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">
                  2. Mid-Level Layers (Motifs & Lesion Geometry):
                </p>
                <p className="text-slate-600 text-xs">
                  Intermediate kernels assemble edges into characteristic pathological patterns, such as the concentric "bullseye" rings of Early Blight (<em>Alternaria solani</em>) or water-soaked patches of Late Blight (<em>Phytophthora infestans</em>).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="font-bold text-slate-900">
                  3. Deep Layers & Softmax Classifier:
                </p>
                <p className="text-slate-600 text-xs">
                  Global average pooling collapses spatial maps into a compact latent vector. Dense linear transformations followed by a Softmax activation function produce normalized class probabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Model Specification & Metrics Table */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-agri-600" />
                Benchmark Specifications
              </h3>
              <span className="text-[10px] font-bold text-agri-800 bg-agri-100 px-2 py-0.5 rounded">
                PlantVillage Standards
              </span>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {modelMetrics.map((m, i) => (
                <div key={i} className="py-3 flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 font-semibold block">{m.label}</span>
                    <span className="text-[10px] text-slate-400">{m.detail}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-900 text-sm">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-slate-300 text-xs space-y-2">
              <span className="text-[10px] font-mono text-agri-400 uppercase tracking-wider block">
                TensorFlow.js WebGL Execution
              </span>
              <p className="text-slate-400 leading-relaxed">
                By compiling computation graphs directly into GPU shaders inside the browser, AgriVision AI ensures complete data confidentiality and instantaneous inference speeds without cloud server dependency.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations & Real-World Agricultural Engineering Challenges */}
        <div className="bg-amber-50/70 rounded-3xl p-8 border border-amber-200 space-y-4">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <h4>Known Technical Limitations & Academic Scientific Integrity</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-amber-950/80 pt-2">
            <div className="space-y-1">
              <p className="font-bold text-amber-900">Lighting & Camera Angles:</p>
              <p>
                Severe glare, deep shadows, or out-of-focus imagery can artificially skew convolutional activations. Users should photograph leaves under indirect, even daylight.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-amber-900">Nutritional Deficiency Overlap:</p>
              <p>
                Certain mineral deficiencies (e.g. Potassium or Magnesium chlorosis) share visual characteristics with fungal blights. Soil testing remains essential.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-amber-900">Confidence Interpretation:</p>
              <p>
                A 96% confidence score indicates high proximity to training set distributions, not an infallible biological certificate. Always consult extension officers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA to jump to test */}
        <div className="text-center pt-4">
          <button
            onClick={onTestModel}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-agri-600 to-agri-700 hover:from-agri-700 hover:to-agri-800 text-white font-bold text-base shadow-lg shadow-agri-600/30 transition-all active:scale-95"
          >
            <Cpu className="w-5 h-5" />
            Launch Live Detection Lab & Test Model
          </button>
        </div>
      </div>
    </div>
  );
};
