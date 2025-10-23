// /src/pages/Learnerships.tsx - FINALIZED CONTENT & LAYOUT

import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, DollarSign, Users, Briefcase, Zap, Trello, Clock } from 'lucide-react'; 

// Placeholder Learnership Card Component (Based on your home page design)
const LearnershipCard: React.FC<{ title: string; slug: string; seta: string; saqaId: string }> = ({ title, slug, seta, saqaId }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider bg-gray-100 py-1 px-3 rounded-full mb-3 inline-block">
            {seta}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{title}</h3>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-600 mb-6 flex-grow">
            {/* The NQF level and Duration are placeholders here as they vary by qualification */}
            <span className="flex items-center"><Target className="w-4 h-4 mr-2 text-[#3349df]" /> NQF Level TBC</span> 
            <span className="flex items-center"><Award className="w-4 h-4 mr-2 text-[#3349df]" /> SAQA ID: {saqaId}</span>
        </div>

        <Link 
            to={`/learnerships/${slug}`} 
            className="block w-full text-center py-2 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
            View Full Qualification
        </Link>
    </div>
);

// --- MAIN PAGE COMPONENT ---

const LearnershipsPage: React.FC = () => {
    
    // ⚠️ UPDATED list of learnerships based on the exact list provided
    const featuredLearnerships = [
        { title: 'Contact Centre', slug: 'contact-centre', seta: 'Services SETA', saqaId: '99687' },
        { title: 'Supply Chain Practitioner', slug: 'supply-chain-practitioner', seta: 'TETA', saqaId: '110942' },
        { title: 'Freight Handler', slug: 'freight-handler', seta: 'TETA', saqaId: '96396' },
        { title: 'Insurance Agent / Underwriter', slug: 'insurance-agent-underwriter', seta: 'INSETA', saqaId: '91784' },
        { title: 'Project Manager', slug: 'project-manager', seta: 'Services SETA', saqaId: '101869' },
        { title: 'Insurance Claims Administrator / Assessor', slug: 'insurance-claims-assessor', seta: 'INSETA', saqaId: '99668' },
        { title: 'Truck Driver', slug: 'truck-driver', seta: 'TETA', saqaId: '93793' },
        { title: 'Road Transport Manager', slug: 'road-transport-manager', seta: 'TETA', saqaId: '96371' },
        { title: 'Clearing and Forwarding Agent', slug: 'clearing-forwarding-agent', seta: 'TETA', saqaId: '96368' },
    ];

    // Separate the array into groups of three for clean layout if desired
    const featuredCount = featuredLearnerships.length;
    // Note: Since 9 is easily divisible by 3, we can use the full list.

    return (
        <main className="bg-[#f9fafc] min-h-screen">
            
            {/* --- 1. Split Hero Section (Homepage UI Style) --- */}
            <div className="py-24 md:py-32 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Block */}
                    <div>
                        <span className="text-lg font-bold uppercase text-[#2c4ae8] tracking-widest mb-3 inline-block">
                            STRATEGIC TALENT SOLUTIONS
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Build Your Future-Ready Workforce.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Our accredited learnerships are designed not just for compliance, but as a robust engine for **B-BBEE growth, tax efficiency, and sustainable skills development**. Turn mandates into competitive advantages.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/quote" 
                                className="px-8 py-3 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get a Quote Today
                            </Link>
                            <a 
                                href="/brochure-learnerships.pdf" 
                                className="px-8 py-3 bg-white border border-[#3349df] text-[#3349df] rounded-full font-semibold text-lg hover:bg-[#eef1ff] transition-colors"
                                download
                            >
                                Download Catalogue
                            </a>
                        </div>
                    </div>
                    
                    {/* Image Block */}
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img 
                            src="https://d64gsuwffb70l.cloudfront.net/68eca18a5084cb1aee71fbcc_1760338384689_f4ca5fee.webp" 
                            alt="Learnership team collaborating" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </div>
            </div>

            {/* --- 2. Program Delivery Method (How We Deliver - Slide 10 Content) --- */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Guarantee High Completion and Impact</h2>
                
                <div className="grid md:grid-cols-5 gap-8">
                    
                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Zap className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Blended Learning</p>
                        <p className="text-xs text-gray-600">Classroom, digital & workplace</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Trello className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Accredited Experts</p>
                        <p className="text-xs text-gray-600">Industry-leading facilitators</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Users className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Embedded Mentorship</p>
                        <p className="text-xs text-gray-600">Coaching in all programmes</p>
                    </div>

                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Clock className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Custom Reporting</p>
                        <p className="text-xs text-gray-600">For compliance & ROI tracking</p>
                    </div>
                    
                    <div className="p-4 rounded-xl text-center border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
                        <Target className="w-8 h-8 text-[#3349df] mx-auto mb-2" />
                        <p className="text-sm font-semibold text-gray-900">Dedicated Support</p>
                        <p className="text-xs text-gray-600">Higher completion rates assured</p>
                    </div>
                </div>
            </section>


            {/* --- 3. Featured Learnerships Grid --- */}
            <section className="max-w-7xl mx-auto px-6 py-16 pt-0">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Our Full Portfolio of Learnerships ({featuredCount})</h2>
                
                {/* ⚠️ Adjusted grid to maintain clean blocks of 3 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredLearnerships.map((learnership) => (
                        <LearnershipCard key={learnership.slug} {...learnership} />
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-xl text-gray-600 mb-4">Don't see the specific qualification you need? We customize programs across various SETAs.</p>
                    <Link 
                        to="/contact" 
                        className="inline-block px-8 py-3 border border-[#3349df] text-[#3349df] rounded-full font-semibold hover:bg-[#3349df] hover:text-white transition-colors"
                    >
                        Inquire About Custom Solutions
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default LearnershipsPage;