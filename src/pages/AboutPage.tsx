import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Target,
  Code2,
  Award,
  BookOpen,
  Edit3,
  CheckCircle2,
  ShieldCheck,
  Building,
  FileCheck,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  // Editable State for College & Group Details so students can customize effortlessly
  const [projectInfo, setProjectInfo] = useState({
    collegeName: '[Your College / University Name Here]',
    department: 'Department of Agricultural Engineering',
    degree: 'Bachelor of Technology (B.Tech)',
    academicYear: '2025 – 2026',
    groupNumber: 'Group AGRI-AI-04',
    projectGuide: 'Dr. [Faculty Mentor / Guide Name], Associate Professor',
    headOfDept: 'Prof. [HOD Name], Department of Agricultural Engineering',
  });

  const [members, setMembers] = useState([
    {
      id: 'member_1',
      name: '[Student Name 1]',
      rollNumber: 'Roll / Reg No: [e.g. 21AG0101]',
      role: 'AI & Deep Learning Lead',
      responsibilities:
        'Model architecture selection, TensorFlow.js integration, tensor preprocessing pipeline, and PlantVillage dataset calibration.',
    },
    {
      id: 'member_2',
      name: '[Student Name 2]',
      rollNumber: 'Roll / Reg No: [e.g. 21AG0102]',
      role: 'Full-Stack Developer & UI/UX Designer',
      responsibilities:
        'React TypeScript frontend architecture, Tailwind CSS responsive layouts, Recharts analytics, and local storage state persistence.',
    },
    {
      id: 'member_3',
      name: '[Student Name 3]',
      rollNumber: 'Roll / Reg No: [e.g. 21AG0103]',
      role: 'Agronomy Research & Pathology Specialist',
      responsibilities:
        'Symptomatology verification, IPM crop-care recommendations, organic bio-control protocols, and academic presentation documentation.',
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const handleMemberChange = (index: number, field: string, value: string) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const handleInfoChange = (field: string, value: string) => {
    setProjectInfo({ ...projectInfo, [field]: value });
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-100 text-agri-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-agri-600" />
            B.Tech Capstone Project
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About AgriVision AI
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Smart Plant Disease Detection & Crop-Care System engineered as an academic engineering demonstration on real-world Artificial Intelligence in Agriculture.
          </p>
        </div>

        {/* Project Objectives & Agricultural Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-card space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-agri-100 text-agri-700 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Project Motivation & Objectives
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              In Agricultural Engineering, timely diagnosis of crop diseases is essential to food security and farm profitability. Unchecked fungal and bacterial infections destroy between 20% and 40% of global crop yields annually. Smallholder farmers often lack immediate access to certified plant pathologists, causing delays that turn localized blights into field-wide epidemics.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Core Engineering Objectives
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Automated Foliar Vision:</strong>
                    <span className="text-slate-600">Eliminate subjective manual visual inspection with objective deep CNN feature classification.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Edge Browser Execution:</strong>
                    <span className="text-slate-600">Provide instantaneous client-side inference via TensorFlow.js with zero server bandwidth dependency.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Organic-First Care Triage:</strong>
                    <span className="text-slate-600">Prioritize cultural and biological controls before recommending hazardous synthetic pesticides.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Transparent Uncertainty:</strong>
                    <span className="text-slate-600">Surface model probability spreads and clear advisories to consult local Krishi Vigyan Kendras (KVK).</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Institutional Details Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Building className="w-5 h-5 text-agri-600" />
                Institutional Details
              </h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-1 text-xs font-bold text-agri-700 hover:text-agri-800 bg-agri-50 px-2.5 py-1 rounded-lg border border-agri-200"
              >
                <Edit3 className="w-3.5 h-3.5" />
                {isEditing ? 'Finish Editing' : 'Edit Details'}
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 font-bold uppercase block text-[10px]">
                  Institution:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={projectInfo.collegeName}
                    onChange={(e) => handleInfoChange('collegeName', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border rounded text-xs font-semibold"
                  />
                ) : (
                  <p className="font-bold text-slate-800 text-sm">{projectInfo.collegeName}</p>
                )}
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase block text-[10px]">
                  Department & Degree:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={projectInfo.department}
                    onChange={(e) => handleInfoChange('department', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border rounded text-xs"
                  />
                ) : (
                  <p className="font-semibold text-slate-700">{projectInfo.department}</p>
                )}
                <p className="text-[11px] text-slate-500 font-medium">{projectInfo.degree}</p>
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase block text-[10px]">
                  Group Designation:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={projectInfo.groupNumber}
                    onChange={(e) => handleInfoChange('groupNumber', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border rounded text-xs"
                  />
                ) : (
                  <span className="font-mono font-bold text-agri-700 bg-agri-50 px-2 py-0.5 rounded border border-agri-200">
                    {projectInfo.groupNumber}
                  </span>
                )}
              </div>

              <div>
                <span className="text-slate-400 font-bold uppercase block text-[10px]">
                  Faculty Mentor / Project Guide:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={projectInfo.projectGuide}
                    onChange={(e) => handleInfoChange('projectGuide', e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 border rounded text-xs"
                  />
                ) : (
                  <p className="font-medium text-slate-700">{projectInfo.projectGuide}</p>
                )}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500 flex items-start gap-2">
              <FileCheck className="w-4 h-4 text-agri-600 shrink-0 mt-0.5" />
              <span>Prepared for B.Tech Capstone Project Viva, Seminar Presentation, and Technical Review Committee.</span>
            </div>
          </div>
        </div>

        {/* Group Member Profiles */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-earth-100 text-earth-800 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Project Engineering Team
                </h3>
                <p className="text-xs text-slate-500">
                  Editable student profiles with academic roles and contributions
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-colors"
            >
              <Edit3 className="w-4 h-4 text-slate-500" />
              {isEditing ? 'Save Changes' : 'Customize Member Names'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <div
                key={member.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-agri-300 hover:bg-white transition-all shadow-sm"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-agri-600 to-agri-700 text-white font-black text-lg flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>

                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                        placeholder="Student Name"
                        className="w-full p-2 bg-white border rounded text-xs font-bold"
                      />
                      <input
                        type="text"
                        value={member.rollNumber}
                        onChange={(e) => handleMemberChange(index, 'rollNumber', e.target.value)}
                        placeholder="Roll Number"
                        className="w-full p-2 bg-white border rounded text-xs"
                      />
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                        placeholder="Role / Title"
                        className="w-full p-2 bg-white border rounded text-xs"
                      />
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base">{member.name}</h4>
                      <p className="text-xs font-mono text-slate-500">{member.rollNumber}</p>
                      <span className="inline-block mt-1 text-xs font-bold text-agri-800 bg-agri-100 px-2 py-0.5 rounded">
                        {member.role}
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Technical Contribution:
                    </span>
                    {isEditing ? (
                      <textarea
                        value={member.responsibilities}
                        onChange={(e) => handleMemberChange(index, 'responsibilities', e.target.value)}
                        className="w-full p-2 bg-white border rounded text-xs"
                        rows={3}
                      />
                    ) : (
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {member.responsibilities}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Specification */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Engineering Technology Stack
              </h3>
              <p className="text-xs text-slate-500">
                Modern full-stack technologies selected for performance, reliability, and ease of demonstration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'React 18', desc: 'UI Component Architecture', tag: 'Frontend' },
              { name: 'TypeScript', desc: 'Type-Safe Contracts', tag: 'Language' },
              { name: 'Tailwind CSS', desc: 'Agricultural Theme Styling', tag: 'CSS' },
              { name: 'TensorFlow.js', desc: 'Client-Side Neural Inference', tag: 'AI Engine' },
              { name: 'Recharts', desc: 'Classification Logits Charts', tag: 'Data Viz' },
              { name: 'Lucide React', desc: 'Accessible SVG Iconography', tag: 'Icons' },
            ].map((tech) => (
              <div key={tech.name} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{tech.tag}</span>
                <p className="font-extrabold text-slate-900 text-sm">{tech.name}</p>
                <p className="text-[11px] text-slate-500">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
