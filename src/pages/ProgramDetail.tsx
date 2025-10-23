// /src/pages/ProgramDetail.tsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Target, Award, CheckCircle, Mail, Phone } from 'lucide-react';

// NOTE: In a real app, you would fetch data here based on the 'slug' parameter.
// Since we don't have a backend, we use the slug for display purposes.

const ProgramDetail: React.FC = () => {
    // ⚠️ Pull the dynamic parameters from the URL
    const { slug } = useParams<{ slug: string }>(); 

    // Helper to format the title based on the slug (e.g., 'contact-centre' -> 'Contact Centre')
    const formattedTitle = slug
        ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : 'Unknown Program';
        
    // Infer the category from the route structure for the badge (Optional)
    // You could also pull category from the URL using match object if needed.
    const category = window.location.pathname.includes('/learnerships') ? 'Learnership' :
                     window.location.pathname.includes('/slps') ? 'SLP' :
                     window.location.pathname.includes('/masterclasses') ? 'Masterclass' : 'Program';

    return (
        <main className="bg-[#f9fafc] min-h-screen">
            
            {/* --- Header Section --- */}
            <div className="bg-white py-16 md:py-24 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-sm font-semibold uppercase text-[#3349df] tracking-widest bg-[#eef1ff] py-1 px-4 rounded-full mb-4 inline-block">
                        {category} Qualification
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        {formattedTitle}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        SAQA ID TBC | NQF Level TBC
                    </p>

                    <div className="flex justify-center space-x-8 text-lg font-medium text-gray-700">
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-[#3349df]" />
                            <span>Duration: Varies</span>
                        </div>
                        <div className="flex items-center">
                            <Target className="w-5 h-5 mr-2 text-[#3349df]" />
                            <span>Format: Blended</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* --- Main Content and Sidebar --- */}
            <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
                
                {/* Main Content Column (Col 1 & 2) */}
                <div className="lg:col-span-2 space-y-12">
                    
                    {/* Qualification Overview */}
                    <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Overview</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            This program is designed to deliver industry-leading competence in the {formattedTitle} field. It blends theoretical knowledge with practical application, ensuring learners can immediately contribute value in the workplace. The content is regularly updated to align with the latest industry standards and regulatory changes.
                        </p>
                    </div>

                    {/* Key Outcomes */}
                    <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Key Learning Outcomes</h3>
                        <ul className="space-y-4">
                            {[
                                'Master core competencies and best practices in the field.',
                                'Develop critical thinking and problem-solving skills relevant to operational challenges.',
                                'Gain accredited status or recognized certification for career advancement.',
                                'Understand the ethical and compliance requirements of the industry.'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-lg text-gray-700">
                                    <CheckCircle className="w-5 h-5 mr-3 text-[#2c4ae8] flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Sidebar (Col 3) */}
                <aside className="lg:col-span-1 space-y-8">
                    
                    {/* CTA: Enroll Now */}
                    <Link 
                      to="/quote" 
                      className="w-full block text-center py-4 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      Inquire / Enroll Now
                    </Link>

                    {/* Contact Panel */}
                    <div className="p-6 bg-[#eef1ff] rounded-xl border border-[#3349df]">
                        <h3 className="text-xl font-bold text-[#3349df] mb-4">Need More Information?</h3>
                        <p className="text-gray-700 mb-4">Our team is ready to discuss customization and enrollment options.</p>
                        <div className="text-sm text-gray-600 space-y-2">
                            <p className="flex items-center font-medium"><Mail className="w-4 h-4 mr-2" /> info@empodera.co.za</p>
                            <p className="flex items-center font-medium"><Phone className="w-4 h-4 mr-2" /> +27 76 181 5155</p>
                        </div>
                    </div>
                    
                </aside>
            </div>
        </main>
    );
};

export default ProgramDetail;