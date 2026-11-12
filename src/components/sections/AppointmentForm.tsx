"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, CheckCircle, Info } from "lucide-react";

interface AppointmentFormProps {
  selectedDoctorName: string;
  setSelectedDoctorName: (name: string) => void;
}

interface BookingSuccess {
  referenceId: string;
  name: string;
  doctor: string;
  department: string;
  date: string;
}

const doctorToDepartment: Record<string, string> = {
  "Dr. Sarah Jenkins": "cardiology",
  "Dr. Michael Chen": "neurology",
  "Dr. Aria Rodriguez": "pediatrics",
  "Dr. David Vance": "orthopedics",
};

export default function AppointmentForm({ selectedDoctorName, setSelectedDoctorName }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    doctor: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<BookingSuccess | null>(null);


  // Sync passed doctor selection with form state
  useEffect(() => {
    if (selectedDoctorName) {
      const dept = doctorToDepartment[selectedDoctorName] || "";
      setFormData((prev) => ({
        ...prev,
        doctor: selectedDoctorName,
        ...(dept ? { department: dept } : {}),
      }));
    }
  }, [selectedDoctorName]);

  // Sync department changes when doctor is selected inside the form
  const handleDoctorChange = (docName: string) => {
    const dept = doctorToDepartment[docName] || "";
    setFormData((prev) => ({
      ...prev,
      doctor: docName,
      ...(dept ? { department: dept } : {}),
    }));
    setSelectedDoctorName(docName);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessData({
        referenceId: `MC-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        doctor: formData.doctor || "Assigned Specialist",
        department: formData.department ? formData.department.charAt(0).toUpperCase() + formData.department.slice(1) : "General Practice",
        date: formData.date,
      });

      // Clear form
      setFormData({
        name: "",
        phone: "",
        email: "",
        department: "",
        doctor: "",
        date: "",
        message: "",
      });
      setSelectedDoctorName("");
    }, 1500);
  };

  return (
    <section id="appointment" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -z-10 w-[35%] h-[35%] bg-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[35%] h-[35%] bg-radial from-accent/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Information Panel & SVG Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left select-none">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Scheduling Desk</span>
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
                Book Your Private
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                  Clinical Session.
                </span>
              </h2>

              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
                Confirm your slot instantly with our automated coordination system. Once booked, an onboarding specialist will call you to finalize clinical files and records.
              </p>
            </div>

            {/* Premium Stylized Illustration */}
            <div className="relative flex-grow flex items-center justify-center my-8 aspect-[4/3] max-w-[380px] mx-auto lg:mx-0">
              <svg viewBox="0 0 200 200" className="w-full h-full text-primary/10" fill="currentColor">
                <circle cx="100" cy="100" r="80" className="text-slate-50" />
                <path d="M70,80 L130,80 A6,6 0 0,1 136,86 L136,134 A6,6 0 0,1 130,140 L70,140 A6,6 0 0,1 64,134 L64,86 A6,6 0 0,1 70,80 Z" fill="white" stroke="#CBD5E1" strokeWidth="2" />
                <rect x="76" y="68" width="12" height="16" rx="2" fill="#0EA5E9" />
                <rect x="112" y="68" width="12" height="16" rx="2" fill="#0EA5E9" />
                <line x1="82" y1="64" x2="82" y2="72" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="118" y1="64" x2="118" y2="72" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="100" cy="115" r="16" fill="#14B8A6" className="opacity-80" />
                <path d="M96,115 L104,115 M100,111 L100,119" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="140" cy="130" r="12" fill="#2563EB" />
                <path d="M136,131.5 L139,134 L145,127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Quick Indicators */}
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-dark leading-none">Instant E-Receipt</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">Booking ID sent directly to your inbox</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-xl text-accent">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-dark leading-none">No Fees Upfront</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">Verify coverage and pay on check-in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[20px] shadow-sm select-none relative min-h-[550px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!successData ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +1 (555) 019-9000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all"
                        />
                      </div>

                      {/* Preferred Date */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Department Select */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Department Division
                        </label>
                        <select
                          required
                          value={formData.department}
                          onChange={(e) => handleInputChange("department", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="">Choose department...</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="neurology">Neurology</option>
                          <option value="orthopedics">Orthopedics</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="dermatology">Dermatology</option>
                          <option value="radiology">Radiology</option>
                          <option value="emergency">Emergency Care</option>
                          <option value="general-medicine">General Medicine</option>
                        </select>
                      </div>

                      {/* Doctor Select */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Specialist Doctor
                        </label>
                        <select
                          value={formData.doctor}
                          onChange={(e) => handleDoctorChange(e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="">Choose doctor (optional)...</option>
                          <option value="Dr. Sarah Jenkins">Dr. Sarah Jenkins (Cardiology)</option>
                          <option value="Dr. Michael Chen">Dr. Michael Chen (Neurology)</option>
                          <option value="Dr. Aria Rodriguez">Dr. Aria Rodriguez (Pediatrics)</option>
                          <option value="Dr. David Vance">Dr. David Vance (Orthopedics)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                        Message / Clinical Notes
                      </label>
                      <textarea
                        id="appointment-message"
                        rows={4}
                        placeholder="Write details of package, conditions, or doctor requests..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary hover:bg-secondary disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Generating Reservation...</span>
                        </>
                      ) : (
                        <span>Confirm Appointment Slots</span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-10 h-10" />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold text-navy-dark">
                        Booking Successful!
                      </h3>
                      <p className="text-xs text-navy-light mt-1">
                        Your slot has been reserved. Please keep the reference code below.
                      </p>
                    </div>

                    {/* Reference Card */}
                    <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-left max-w-sm mx-auto space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Reference ID</span>
                        <span className="font-mono font-black text-sm text-primary">{successData.referenceId}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400 font-semibold">Patient:</span>
                          <span className="font-bold text-navy-dark">{successData.name}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400 font-semibold">Specialist:</span>
                          <span className="font-bold text-navy-dark">{successData.doctor}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400 font-semibold">Department:</span>
                          <span className="font-bold text-navy-dark">{successData.department}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400 font-semibold">Scheduled Date:</span>
                          <span className="font-bold text-navy-dark">{successData.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-400 font-medium max-w-xs mx-auto">
                      An email confirmation has been dispatched. Our desk will contact you via phone shortly.
                    </p>

                    <button
                      onClick={() => setSuccessData(null)}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-navy-dark font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                    >
                      Book Another Slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
