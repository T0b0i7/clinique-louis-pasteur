"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle, Info, Send, Phone } from "lucide-react";

interface AppointmentFormProps {
  selectedDoctorName: string;
  setSelectedDoctorName: (name: string) => void;
}

interface BookingSuccess {
  name: string;
  doctor: string;
  department: string;
  date: string;
  mailto: string;
}

const departments = [
  { id: "cardiologie", label: "Cardiologie" },
  { id: "gynecologie", label: "Gynécologie obstétrique" },
  { id: "pediatrie", label: "Pédiatrie néonatologie" },
  { id: "chirurgie", label: "Chirurgie générale" },
  { id: "medecine-generale", label: "Médecine générale" },
  { id: "neurochirurgie", label: "Neurochirurgie" },
  { id: "orl", label: "ORL et chirurgie maxillo-faciale" },
  { id: "urologie", label: "Urologie" },
  { id: "radiologie", label: "Radiologie et échographie" },
  { id: "laboratoire", label: "Laboratoire d'analyses" },
  { id: "maternite", label: "Maternité et sage-femme" },
  { id: "hospitalisation", label: "Hospitalisation et soins" },
  { id: "emi-canada", label: "Examens d'immigration Canada" },
];

const doctorToDepartment: Record<string, string> = {
  "Dr Lassissi Moufidathou Laï": "cardiologie",
  "Dr Fatoki Abinu Heny": "gynecologie",
  "Dr Bacharou Salwane": "pediatrie",
  "Dr Goudou Rolland": "chirurgie",
  "Dr Olory-Togbe Régis": "neurochirurgie",
  "Dr Amoussou Léonel": "orl",
  "Dr Gouissi Augustin": "urologie",
  "Dr Dossou-Gbete Véronique": "emi-canada",
};

const doctorOptions = Object.keys(doctorToDepartment);

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

    setTimeout(() => {
      const departmentLabel =
        departments.find((d) => d.id === formData.department)?.label || "Non précisée";
      const doctorLabel = formData.doctor || "Peu importe";

      const body = [
        "Demande de rendez-vous depuis le site de la Clinique Louis Pasteur",
        "",
        `Nom : ${formData.name}`,
        `Téléphone : ${formData.phone}`,
        `Email : ${formData.email}`,
        `Spécialité : ${departmentLabel}`,
        `Médecin : ${doctorLabel}`,
        `Date souhaitée : ${formData.date}`,
        "",
        "Message :",
        formData.message || "Aucun message",
      ].join("\n");

      const mailto = `mailto:contact@cliniquelouispasteur.com?subject=${encodeURIComponent(
        "Demande de rendez-vous"
      )}&body=${encodeURIComponent(body)}`;

      setIsSubmitting(false);
      setSuccessData({
        name: formData.name,
        doctor: doctorLabel,
        department: departmentLabel,
        date: formData.date,
        mailto,
      });

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
    }, 700);
  };

  return (
    <section id="appointment" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -z-10 w-[35%] h-[35%] bg-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[35%] h-[35%] bg-radial from-accent/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Left Column: Information Panel & Illustration */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left select-none">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prise de rendez-vous</span>
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-dark tracking-tight leading-[1.1] mb-6">
                Demandez votre
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-sans font-medium italic">
                  rendez-vous.
                </span>
              </h2>

              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-4">
                Remplissez le formulaire ci-contre. Vous pourrez envoyer votre demande par
                email ou appeler directement la clinique pour une confirmation immédiate.
              </p>
              <p className="text-xs md:text-sm text-navy-light leading-relaxed mb-8">
                L&apos;accueil téléphonique est disponible 24h/24 et 7j/7.
              </p>
            </div>

            {/* Stylized Illustration */}
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
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-dark leading-none">Accueil 24h/24</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                    +229 20 21 22 22 ou +229 95 86 95 25
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-xl text-accent">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-dark leading-none">Sans frais en ligne</h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                    Le règlement se fait à la clinique
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
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
                          Nom complet
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Votre nom et prénom"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+229 ..."
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
                          Adresse email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="vous@exemple.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all"
                        />
                      </div>

                      {/* Preferred Date */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Date souhaitée
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
                          Spécialité ou service
                        </label>
                        <select
                          required
                          value={formData.department}
                          onChange={(e) => handleInputChange("department", e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="">Choisir une spécialité...</option>
                          {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                              {dept.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Doctor Select */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                          Médecin
                        </label>
                        <select
                          value={formData.doctor}
                          onChange={(e) => handleDoctorChange(e.target.value)}
                          className="px-4 py-3 border border-slate-200 focus:border-primary bg-white rounded-xl text-xs font-semibold text-navy-dark focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="">Peu importe</option>
                          {doctorOptions.map((doctor) => (
                            <option key={doctor} value={doctor}>
                              {doctor}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col">
                      <label className="text-[10px] uppercase font-bold tracking-wider text-navy-light mb-2">
                        Message
                      </label>
                      <textarea
                        id="appointment-message"
                        rows={4}
                        placeholder="Précisez votre demande, vos disponibilités ou votre couverture d'assurance..."
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
                          <span>Préparation de la demande...</span>
                        </>
                      ) : (
                        <span>Préparer ma demande de rendez-vous</span>
                      )}
                    </button>

                    <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                      Ce formulaire ne réserve pas automatiquement un créneau. Votre demande
                      est confirmée par téléphone ou par email par la clinique.
                    </p>
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
                        Votre demande est prête
                      </h3>
                      <p className="text-xs text-navy-light mt-1 max-w-sm mx-auto">
                        Envoyez-la par email ou appelez la clinique pour confirmer votre
                        rendez-vous.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm text-left max-w-sm mx-auto space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Récapitulatif
                        </span>
                        <span className="font-mono font-black text-sm text-primary">
                          Demande
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between gap-4 text-xs">
                          <span className="text-slate-400 font-semibold">Patient :</span>
                          <span className="font-bold text-navy-dark text-right">{successData.name}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-xs">
                          <span className="text-slate-400 font-semibold">Médecin :</span>
                          <span className="font-bold text-navy-dark text-right">{successData.doctor}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-xs">
                          <span className="text-slate-400 font-semibold">Spécialité :</span>
                          <span className="font-bold text-navy-dark text-right">{successData.department}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-xs">
                          <span className="text-slate-400 font-semibold">Date :</span>
                          <span className="font-bold text-navy-dark">{successData.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={successData.mailto}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl transition-colors"
                      >
                        <Send className="w-4 h-4" />
                        Envoyer par email
                      </a>
                      <a
                        href="tel:+22920212222"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-200 hover:border-primary hover:text-primary text-navy-dark font-bold text-xs rounded-xl transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Appeler la clinique
                      </a>
                    </div>

                    <button
                      onClick={() => setSuccessData(null)}
                      className="text-[10px] text-slate-400 hover:text-primary font-semibold transition-colors cursor-pointer"
                    >
                      Faire une nouvelle demande
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
