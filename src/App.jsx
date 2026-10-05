import React, { useState } from 'react';
import { 
  Dumbbell, 
  Calendar, 
  Users, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Flame, 
  Zap, 
  Award,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Hypertrophy & Strength',
    tier: 'Pro Performance'
  });
  const [submitted, setSubmitted] = useState(false);

  const primaryDark = "#161719";
  const accentGold = "#C4A48C";

  const scheduleData = [
    { id: 1, time: '06:00 AM', name: 'Metabolic Conditioning', trainer: 'Marcus Vance', category: 'HIIT', duration: '50 min' },
    { id: 2, time: '08:00 AM', name: 'Barbell Hypertrophy', trainer: 'Elena Rostova', category: 'Strength', duration: '60 min' },
    { id: 3, time: '10:30 AM', name: 'Kinetic Flow & Mobility', trainer: 'David Chen', category: 'Recovery', duration: '45 min' },
    { id: 4, time: '05:00 PM', name: 'Olympic Weightlifting', trainer: 'Marcus Vance', category: 'Strength', duration: '75 min' },
    { id: 5, time: '06:30 PM', name: 'Endurance Threshold', trainer: 'Elena Rostova', category: 'HIIT', duration: '45 min' },
  ];

  const trainers = [
    {
      name: 'Marcus Vance',
      role: 'Head of Strength & Conditioning',
      specialty: 'Olympic Lifting & Bioenergetics',
      experience: '11+ Years Experience',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Functional Performance Lead',
      specialty: 'Mobility & Neuromuscular Training',
      experience: '8+ Years Experience',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: 'David Chen',
      role: 'Longevity & Biomechanics',
      specialty: 'Corrective Exercise & Flexibility',
      experience: '9+ Years Experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80'
    }
  ];

  const pricingTiers = [
    {
      name: 'Core Athlete',
      price: '$95',
      period: '/month',
      desc: 'Focused entry point for disciplined lifters seeking modern training facilities.',
      features: ['Access to high-spec gym floor', 'Standard locker room & dry sauna', 'Kinetic mobile app & tracking', '1 Monthly body composition scan']
    },
    {
      name: 'Pro Performance',
      price: '$165',
      period: '/month',
      popular: true,
      desc: 'Our signature protocol with unlimited studio classes and personalized recovery suite access.',
      features: ['Full 24/7 studio & facility access', 'Unlimited coached group sessions', 'Infrared sauna & cold plunge circuit', 'Bi-weekly 1-on-1 coach check-ins', 'Custom nutritional blueprint']
    },
    {
      name: 'Elite Private',
      price: '$280',
      period: '/month',
      desc: 'Bespoke athletic preparation with designated private locker, dedicated master coach.',
      features: ['All Pro Performance privileges', '4 Private personal coaching hours', 'Priority recovery suite bookings', 'Quarterly comprehensive bloodwork audit', 'Complimentary guest passes (4/mo)']
    }
  ];

  const testimonials = [
    {
      quote: "KINETIC restructured my entire concept of high-performance training. The coaches treat preparation with scientific precision.",
      author: "Julian Reynolds",
      title: "Competitive Triathlete"
    },
    {
      quote: "The contrast therapy facilities and deliberate programming kept me injury-free through two full marathon cycles.",
      author: "Sophia Alvarez",
      title: "Creative Director & Runner"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredSchedule = activeTab === 'All' 
    ? scheduleData 
    : scheduleData.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#161719] text-[#EDECE8] font-sans antialiased selection:bg-[#C4A48C] selection:text-[#161719]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#161719]/90 backdrop-blur-md z-50 border-b border-[#28292C]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-sm bg-[#C4A48C] flex items-center justify-center font-black text-[#161719] tracking-tighter text-xl">
              K
            </div>
            <span className="text-2xl font-bold tracking-widest text-[#EDECE8]">KINETIC</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-[#9E9E9E]">
            <a href="#schedule" className="hover:text-[#C4A48C] transition-colors">SCHEDULE</a>
            <a href="#trainers" className="hover:text-[#C4A48C] transition-colors">COACHES</a>
            <a href="#pricing" className="hover:text-[#C4A48C] transition-colors">MEMBERSHIPS</a>
            <a href="#reviews" className="hover:text-[#C4A48C] transition-colors">TESTIMONIALS</a>
            <a href="#contact" className="hover:text-[#C4A48C] transition-colors">CONTACT</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/?text=Hi%20KINETIC%2C%20I%20would%20like%20to%20learn%20more%20about%20membership%20options" 
              target="_blank" 
              rel="noreferrer"
              className="border border-[#383A3F] hover:border-[#C4A48C] text-[#C4A48C] px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <a 
              href="#contact" 
              className="bg-[#C4A48C] hover:bg-[#b09079] text-[#161719] px-5 py-2 rounded text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
            >
              Start Trial
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#EDECE8] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1E2023] border-b border-[#28292C] px-6 py-6 flex flex-col space-y-4">
            <a href="#schedule" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wider">SCHEDULE</a>
            <a href="#trainers" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wider">COACHES</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wider">MEMBERSHIPS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium tracking-wider">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 md:pt-48 md:pb-36 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#202226] border border-[#2F3137] text-xs font-semibold uppercase tracking-widest text-[#C4A48C]">
              <span className="w-2 h-2 rounded-full bg-[#C4A48C] animate-pulse"></span>
              Human Performance Redefined
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#FFFFFF]">
              PRECISION IN <br />
              <span className="text-[#C4A48C]">EVERY REPETITION.</span>
            </h1>
            <p className="text-[#A4A7AE] text-base md:text-lg max-w-xl font-normal leading-relaxed">
              An architectural training environment combining biomechanical assessment, deliberate progressive overload, and contrast recovery circuits.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#pricing"
                className="bg-[#C4A48C] hover:bg-[#b09079] text-[#161719] px-7 py-3.5 rounded font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
              >
                Explore Memberships <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#schedule" 
                className="border border-[#383A3F] hover:border-[#52565E] text-[#EDECE8] px-7 py-3.5 rounded font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Class Schedule
              </a>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[#2F3137] shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80" 
                alt="Gym Architecture"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161719] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-[#1B1D21]/90 backdrop-blur border border-[#2F3137] flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#C4A48C] font-bold">Studio Standard</div>
                  <div className="text-sm font-semibold text-white">Eleiko & Keiser Custom Rigs</div>
                </div>
                <Award className="w-6 h-6 text-[#C4A48C]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 border-t border-[#23252A] bg-[#181A1D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4A48C]">Weekly Roster</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">TRAINING SCHEDULE</h2>
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-[#141517] rounded-lg border border-[#292B30]">
              {['All', 'Strength', 'HIIT', 'Recovery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-all ${
                    activeTab === tab 
                      ? 'bg-[#C4A48C] text-[#161719]' 
                      : 'text-[#8C8F96] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredSchedule.map((item) => (
              <div 
                key={item.id}
                className="bg-[#1D1F23] hover:bg-[#23252B] p-6 rounded-lg border border-[#2B2D33] flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="text-lg font-bold text-[#C4A48C] tracking-wide w-24">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-[#8E929A] mt-0.5">Lead: {item.trainer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="px-3 py-1 rounded bg-[#131416] border border-[#2D2F35] text-[#A4A7AE]">
                    {item.duration}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#C4A48C]/15 text-[#C4A48C] border border-[#C4A48C]/30 uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C4A48C]">Mentorship</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">MASTER COACHES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((coach, index) => (
            <div key={index} className="bg-[#1C1E22] rounded-xl overflow-hidden border border-[#2A2C33] group">
              <div className="aspect-[4/4] overflow-hidden relative">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4A48C]">{coach.experience}</span>
                <h3 className="text-xl font-bold text-white">{coach.name}</h3>
                <p className="text-xs text-[#9FA3AC]">{coach.role}</p>
                <div className="pt-2 border-t border-[#292B31] text-xs text-[#7F838D]">
                  Focus: <span className="text-[#EDECE8]">{coach.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Memberships */}
      <section id="pricing" className="py-24 bg-[#141517] border-t border-[#23252A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C4A48C]">Transparent Commitment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">MEMBERSHIP TIERS</h2>
            <p className="text-xs text-[#8E929A]">All memberships include baseline structural movement audits and towel service.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-xl border flex flex-col justify-between transition-all ${
                  tier.popular 
                    ? 'bg-[#1C1E22] border-[#C4A48C] shadow-2xl relative md:-translate-y-2' 
                    : 'bg-[#181A1D] border-[#292B31]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C4A48C] text-[#161719] text-[10px] font-extrabold uppercase tracking-widest">
                    Most Prescribed
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-xs text-[#8C909A] leading-relaxed mb-6">{tier.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-xs text-[#757881]">{tier.period}</span>
                  </div>
                  <ul className="space-y-3.5 text-xs text-[#B2B6BE]">
                    {tier.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C4A48C] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="#contact" 
                  className={`mt-8 w-full py-3 rounded text-center text-xs font-bold uppercase tracking-wider transition-all block ${
                    tier.popular
                      ? 'bg-[#C4A48C] text-[#161719] hover:bg-[#b09079]'
                      : 'border border-[#34373F] text-white hover:border-[#C4A48C]'
                  }`}
                >
                  Join Protocol
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C4A48C]">Proof of Work</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">ATHLETE TESTIMONIALS</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="p-8 rounded-xl bg-[#1A1C20] border border-[#2B2D33] space-y-4">
              <p className="text-[#C8CBD3] italic text-sm leading-relaxed">"{t.quote}"</p>
              <div>
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-[#8E929A]">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Intake Form */}
      <section id="contact" className="py-24 bg-[#141517] border-t border-[#23252A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C4A48C]">Enrollment</span>
              <h2 className="text-3xl font-extrabold text-white">RESERVE AN INTAKE CONSULTATION</h2>
              <p className="text-xs text-[#8C909A] leading-relaxed">
                Connect with our head trainers to assess baseline strength metrics and align your schedule with studio programming.
              </p>
              <div className="space-y-4 pt-4 text-xs text-[#B2B6BE]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C4A48C]" />
                  <span>45 Industrial Parkway, District 4</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C4A48C]" />
                  <span>+1 (800) 492-8819</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C4A48C]" />
                  <span>admissions@kineticfitness.com</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-[#1A1C20] p-8 rounded-xl border border-[#2C2E34]">
              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#C4A48C] mx-auto" />
                  <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-[#8E929A]">Our concierge team will reach out via WhatsApp or phone within 4 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#A4A7AF] uppercase tracking-wider mb-2 font-semibold">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Jordan Hayes"
                      className="w-full bg-[#131416] border border-[#2F3137] rounded px-4 py-3 text-white focus:outline-none focus:border-[#C4A48C]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#A4A7AF] uppercase tracking-wider mb-2 font-semibold">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jordan@example.com"
                      className="w-full bg-[#131416] border border-[#2F3137] rounded px-4 py-3 text-white focus:outline-none focus:border-[#C4A48C]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#A4A7AF] uppercase tracking-wider mb-2 font-semibold">Primary Goal</label>
                      <select 
                        value={formData.goal}
                        onChange={(e) => setFormData({...formData, goal: e.target.value})}
                        className="w-full bg-[#131416] border border-[#2F3137] rounded px-3 py-3 text-white focus:outline-none focus:border-[#C4A48C]"
                      >
                        <option>Hypertrophy & Strength</option>
                        <option>Conditioning & Fat Loss</option>
                        <option>Mobility & Longevity</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#A4A7AF] uppercase tracking-wider mb-2 font-semibold">Preferred Tier</label>
                      <select 
                        value={formData.tier}
                        onChange={(e) => setFormData({...formData, tier: e.target.value})}
                        className="w-full bg-[#131416] border border-[#2F3137] rounded px-3 py-3 text-white focus:outline-none focus:border-[#C4A48C]"
                      >
                        <option>Core Athlete</option>
                        <option>Pro Performance</option>
                        <option>Elite Private</option>
                      </select>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#C4A48C] hover:bg-[#b09079] text-[#161719] font-bold py-3.5 rounded uppercase tracking-wider transition-all mt-4"
                  >
                    Submit Intake Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#222429] text-center text-xs text-[#6B6E76]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[#EDECE8]">KINETIC PERFORMANCE STUDIO</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          </div>
          <div className="flex space-x-6 text-[#9E9E9E]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Studio Conduct</a>
          </div>
        </div>
      </footer>
    </div>
  );
}