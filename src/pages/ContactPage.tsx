import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  UploadCloud,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Sparkles,
  Calendar,
  AlertCircle,
  FileCheck,
  X,
} from "lucide-react";
import { STUDIO_INFO, ALL_STYLES, ARTISTS, FAQ_LIST } from "../data/studioData";
import {
  BookingFormData,
  validateBookingForm,
  generateBookingReference,
  estimateSessionHours,
} from "../utils/booking";

interface ContactPageProps {
  initialArtist?: string;
  initialStyle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialArtist = "",
  initialStyle = "",
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    email: "",
    phone: "",
    tattooStyle: initialStyle || "Black & Grey",
    preferredArtist: initialArtist || "Marcus Vance",
    tattooSize: "Medium (Palm sized, 3-5 inches)",
    placement: "",
    description: "",
    preferredDate: "",
    referenceFile: null,
  });

  const [referenceFileName, setReferenceFileName] = useState<string | null>(
    null,
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    reference: string;
    deposit: number;
    hours: string;
    artist: string;
    date: string;
  } | null>(null);

  // Accordion state for FAQs
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReferenceFileName(file.name);
      setFormData((prev) => ({ ...prev, referenceFile: file }));
    }
  };

  const removeFile = () => {
    setReferenceFileName(null);
    setFormData((prev) => ({ ...prev, referenceFile: null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      const firstErrorField = Object.keys(validation.errors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsSubmitting(true);

    // Simulate concierge booking processing
    setTimeout(() => {
      const reference = generateBookingReference("ATN");
      const estimation = estimateSessionHours(
        formData.tattooSize,
        formData.tattooStyle,
      );

      setSubmittedBooking({
        reference,
        deposit: estimation.deposit,
        hours: estimation.hours,
        artist: formData.preferredArtist || "Marcus Vance",
        date: formData.preferredDate || "To be scheduled",
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }, 600);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[55vh] flex items-center pt-28 pb-14 px-0 lg:px-8 overflow-hidden bg-[#0B0B0D]">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg"
            alt="Studio consultation bay"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/80" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D42C25] font-semibold block">
              Concierge Booking
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-serif-cinzel tracking-tight text-[#F3F0E9] leading-tight text-balance">
              LET'S CREATE <br />
              <span className="text-[#D42C25]">SOMETHING PERSONAL.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#A5A3A0] leading-relaxed font-light">
              Submit your concept, body placement, and visual references. Our
              concierge responds within 24 business hours to confirm your
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: FORM + STUDIO INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Appointment Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.09)] p-6 sm:p-10 shadow-2xl">
              {submittedBooking ? (
                /* Success State */
                <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1D] border border-[#D42C25]/40 text-[#D42C25] flex items-center justify-center mx-auto shadow-lg shadow-[#D42C25]/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#D42C25] font-semibold">
                      Request Confirmed
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-cinzel text-[#F3F0E9]">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-[#A5A3A0] max-w-md mx-auto">
                      Thank you,{" "}
                      <strong className="text-[#F3F0E9]">
                        {formData.fullName}
                      </strong>
                      . Our concierge has reserved your inquiry and forwarded
                      your brief directly to{" "}
                      <strong className="text-[#F3F0E9]">
                        {submittedBooking.artist}
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] p-6 text-left max-w-md mx-auto space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(255,255,255,0.06)]">
                      <span className="text-[#A5A3A0]">Booking Reference:</span>
                      <span className="font-mono text-sm font-bold text-[#D42C25]">
                        {submittedBooking.reference}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(255,255,255,0.06)]">
                      <span className="text-[#A5A3A0]">Selected Style:</span>
                      <span className="text-[#F3F0E9] font-medium">
                        {formData.tattooStyle}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(255,255,255,0.06)]">
                      <span className="text-[#A5A3A0]">
                        Estimated Duration:
                      </span>
                      <span className="text-[#F3F0E9] font-medium">
                        {submittedBooking.hours}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[rgba(255,255,255,0.06)]">
                      <span className="text-[#A5A3A0]">
                        Deposit (Credited to final price):
                      </span>
                      <span className="text-[#F3F0E9] font-medium">
                        ${submittedBooking.deposit} USD
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#A5A3A0]">Preferred Timing:</span>
                      <span className="text-[#F3F0E9] font-medium">
                        {submittedBooking.date || "Earliest Available"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmittedBooking(null);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          tattooStyle: "Black & Grey",
                          preferredArtist: "Marcus Vance",
                          tattooSize: "Medium (Palm sized, 3-5 inches)",
                          placement: "",
                          description: "",
                          preferredDate: "",
                          referenceFile: null,
                        });
                        setReferenceFileName(null);
                      }}
                      className="cursor-pointer text-xs uppercase tracking-wider font-semibold text-[#A5A3A0] hover:text-[#F3F0E9] py-2 px-4 transition-colors"
                    >
                      Submit Another Inscription
                    </button>
                  </div>
                </div>
              ) : (
                /* The Appointment Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9] mb-1">
                      Consultation Booking
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A5A3A0]">
                      All initial design meetings are private and complimentary.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Julian Sterling"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border ${
                          errors.fullName
                            ? "border-[#D42C25]"
                            : "border-[rgba(255,255,255,0.1)]"
                        } text-sm text-[#F3F0E9] placeholder-[#A5A3A0]/50 focus:outline-none focus:border-[#D42C25] transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-[#D42C25] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. julian@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border ${
                          errors.email
                            ? "border-[#D42C25]"
                            : "border-[rgba(255,255,255,0.1)]"
                        } text-sm text-[#F3F0E9] placeholder-[#A5A3A0]/50 focus:outline-none focus:border-[#D42C25] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[#D42C25] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (212) 555-0198"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border ${
                          errors.phone
                            ? "border-[#D42C25]"
                            : "border-[rgba(255,255,255,0.1)]"
                        } text-sm text-[#F3F0E9] placeholder-[#A5A3A0]/50 focus:outline-none focus:border-[#D42C25] transition-colors`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#D42C25] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Preferred Date / Window
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[rgba(255,255,255,0.1)] text-sm text-[#F3F0E9] focus:outline-none focus:border-[#D42C25] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Style & Artist Selects */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="tattooStyle"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Tattoo Style *
                      </label>
                      <select
                        id="tattooStyle"
                        name="tattooStyle"
                        value={formData.tattooStyle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[rgba(255,255,255,0.1)] text-sm text-[#F3F0E9] focus:outline-none focus:border-[#D42C25] transition-colors"
                      >
                        {ALL_STYLES.map((style) => (
                          <option
                            key={style.id}
                            value={style.name}
                            className="bg-[#141416] text-[#F3F0E9]"
                          >
                            {style.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredArtist"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Preferred Artist *
                      </label>
                      <select
                        id="preferredArtist"
                        name="preferredArtist"
                        value={formData.preferredArtist}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[rgba(255,255,255,0.1)] text-sm text-[#F3F0E9] focus:outline-none focus:border-[#D42C25] transition-colors"
                      >
                        <option
                          value="Any Available Resident"
                          className="bg-[#141416]"
                        >
                          Any Resident Artisan Matching My Style
                        </option>
                        {ARTISTS.map((artist) => (
                          <option
                            key={artist.id}
                            value={artist.name}
                            className="bg-[#141416]"
                          >
                            {artist.name} (
                            {artist.specialization.split("&")[0].trim()})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Approximate Size & Body Placement */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="tattooSize"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Approximate Size *
                      </label>
                      <select
                        id="tattooSize"
                        name="tattooSize"
                        value={formData.tattooSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border border-[rgba(255,255,255,0.1)] text-sm text-[#F3F0E9] focus:outline-none focus:border-[#D42C25] transition-colors"
                      >
                        <option
                          value="Small (Micro / 1-2 inches)"
                          className="bg-[#141416]"
                        >
                          Small (Micro / 1–2 inches)
                        </option>
                        <option
                          value="Medium (Palm sized, 3-5 inches)"
                          className="bg-[#141416]"
                        >
                          Medium (Palm sized, 3–5 inches)
                        </option>
                        <option
                          value="Large (Forearm / Calf, 6-9 inches)"
                          className="bg-[#141416]"
                        >
                          Large (Forearm / Calf, 6–9 inches)
                        </option>
                        <option
                          value="Full Sleeve / Backpiece (Multi-session)"
                          className="bg-[#141416]"
                        >
                          Full Sleeve / Backpiece (Multi-session)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="placement"
                        className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                      >
                        Body Placement *
                      </label>
                      <input
                        type="text"
                        id="placement"
                        name="placement"
                        value={formData.placement}
                        onChange={handleInputChange}
                        placeholder="e.g. Left Inner Forearm, Ribcage"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border ${
                          errors.placement
                            ? "border-[#D42C25]"
                            : "border-[rgba(255,255,255,0.1)]"
                        } text-sm text-[#F3F0E9] placeholder-[#A5A3A0]/50 focus:outline-none focus:border-[#D42C25] transition-colors`}
                      />
                      {errors.placement && (
                        <p className="text-[11px] text-[#D42C25] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.placement}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tattoo Idea / Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-xs font-medium text-[#F3F0E9] mb-1.5"
                    >
                      Tattoo Idea / Concept Narrative *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your subject matter, symbolic motifs, visual references, and any personal meaning..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border ${
                        errors.description
                          ? "border-[#D42C25]"
                          : "border-[rgba(255,255,255,0.1)]"
                      } text-sm text-[#F3F0E9] placeholder-[#A5A3A0]/50 focus:outline-none focus:border-[#D42C25] transition-colors resize-none`}
                    />
                    {errors.description && (
                      <p className="text-[11px] text-[#D42C25] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Reference Image Upload */}
                  <div>
                    <span className="block text-xs font-medium text-[#F3F0E9] mb-1.5">
                      Visual Reference Upload (Optional)
                    </span>
                    {referenceFileName ? (
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#0B0B0D] border border-[rgba(255,255,255,0.15)] text-xs text-[#F3F0E9]">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-[#D42C25]" />
                          <span className="truncate max-w-[200px] sm:max-w-xs">
                            {referenceFileName}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="cursor-pointer p-1 hover:text-[#D42C25] transition-colors"
                          aria-label="Remove reference image"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label
                        htmlFor="referenceUpload"
                        className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[rgba(255,255,255,0.1)] hover:border-[#D42C25]/50 rounded-2xl cursor-pointer bg-[#0B0B0D]/50 hover:bg-[#0B0B0D] transition-colors group"
                      >
                        <UploadCloud className="w-7 h-7 text-[#A5A3A0] group-hover:text-[#D42C25] transition-colors mb-2" />
                        <span className="text-xs text-[#F3F0E9] font-medium">
                          Click or Drag Reference Image
                        </span>
                        <span className="text-[11px] text-[#A5A3A0] mt-0.5">
                          JPG, PNG, or WebP up to 10MB
                        </span>
                        <input
                          type="file"
                          id="referenceUpload"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#D42C25] hover:bg-[#b8231d] disabled:opacity-50 text-white font-semibold py-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#D42C25]/25"
                    >
                      {isSubmitting ? (
                        <span>Processing Inscription...</span>
                      ) : (
                        <>
                          <span>Submit Appointment Request</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Studio Information Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-[#141416] border border-[rgba(255,255,255,0.09)] p-6 sm:p-8 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D42C25] font-semibold block">
                Atelier Headquarters
              </span>
              <h3 className="text-2xl font-bold font-serif-cinzel text-[#F3F0E9]">
                Studio Information
              </h3>

              <div className="space-y-4 text-sm text-[#A5A3A0]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D42C25] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#F3F0E9] font-medium block">
                      Atelier Sanctum
                    </span>
                    <span>{STUDIO_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D42C25] shrink-0" />
                  <div>
                    <span className="text-[#F3F0E9] font-medium block">
                      Telephone Concierge
                    </span>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="hover:text-[#F3F0E9] transition-colors"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D42C25] shrink-0" />
                  <div>
                    <span className="text-[#F3F0E9] font-medium block">
                      Digital Enquiries
                    </span>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="hover:text-[#F3F0E9] transition-colors"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(255,255,255,0.06)] space-y-2">
                  <div className="flex items-center gap-2 text-[#F3F0E9] font-semibold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#D42C25]" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="text-xs space-y-1 pl-6">
                    <div className="flex justify-between">
                      <span>Tue – Fri:</span>
                      <span className="text-[#F3F0E9]">
                        {STUDIO_INFO.hours.tueFri}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat – Sun:</span>
                      <span className="text-[#F3F0E9]">
                        {STUDIO_INFO.hours.satSun}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monday:</span>
                      <span className="text-[#D42C25]">
                        {STUDIO_INFO.hours.mon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1A1A1D] hover:bg-[#232328] border border-[rgba(255,255,255,0.08)] text-xs text-[#F3F0E9] font-medium transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D42C25]" />
                  <span>Follow @ateliernoir.tattoo on Instagram</span>
                </a>
              </div>
            </div>

            {/* SECTION 4: LOCATION & DIRECTIONS */}
            {/* SECTION 4: LOCATION MAP */}
            <div className="rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.09)]">
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=447%20Mercer%20Street%2C%20New%20York%2C%20NY&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS (CLEAN ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.22em] text-[#D42C25] font-semibold">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-cinzel text-[#F3F0E9] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#A5A3A0] mt-2">
            Essential information regarding appointments, pricing, preparation,
            and lifetime healing.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#141416] border border-[rgba(255,255,255,0.08)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="cursor-pointer w-full flex items-center justify-between p-5 sm:p-6 text-left text-sm sm:text-base font-semibold text-[#F3F0E9] hover:text-[#D42C25] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D42C25]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className="p-1.5 rounded-lg bg-[#1A1A1D] border border-[rgba(255,255,255,0.08)] text-[#A5A3A0] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#D42C25]" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#A5A3A0] leading-relaxed border-t border-[rgba(255,255,255,0.04)] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
