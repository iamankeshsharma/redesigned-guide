import { useState } from "react";
import { X, Mail, User, Phone, DollarSign, MessageSquare, CheckCircle } from "lucide-react";

interface DomainOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DomainOfferModal({ isOpen, onClose }: DomainOfferModalProps) {
  const [step, setStep] = useState<"form" | "verify" | "success">("form");
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    offerAmount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);

    // In production, send this code to the user's email
    console.log("Verification code:", code);
    alert(`Verification code sent to ${formData.email}\n\nFor demo: ${code}`);

    setStep("verify");
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode === generatedCode) {
      // In production, send the offer to backend/email
      console.log("Offer submitted:", formData);
      setStep("success");
      setTimeout(() => {
        onClose();
        resetForm();
      }, 3000);
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", offerAmount: "", message: "" });
    setVerificationCode("");
    setGeneratedCode("");
    setStep("form");
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl text-foreground">
            {step === "form" && "Make an Offer"}
            {step === "verify" && "Verify Email"}
            {step === "success" && "Offer Submitted"}
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === "form" && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-foreground">
                  <strong>Domain:</strong> shreekrishnaengineerings.com
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Premium domain available for purchase
                </p>
              </div>

              <div>
                <label htmlFor="name" className="block text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Verification code will be sent to this email
                </p>
              </div>

              <div>
                <label htmlFor="phone" className="block text-foreground mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="offerAmount" className="block text-foreground mb-2">
                  Offer Amount (USD) *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="number"
                    id="offerAmount"
                    name="offerAmount"
                    value={formData.offerAmount}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    placeholder="5000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground resize-none"
                    placeholder="Tell us about your intended use for this domain..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Continue to Verification
              </button>
            </form>
          )}

          {step === "verify" && (
            <form onSubmit={handleVerify} className="space-y-5">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Mail className="text-accent" size={32} />
                </div>
                <p className="text-foreground mb-2">
                  We've sent a 6-digit verification code to:
                </p>
                <p className="text-accent font-semibold">{formData.email}</p>
              </div>

              <div>
                <label htmlFor="code" className="block text-foreground mb-2 text-center">
                  Enter Verification Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground text-center text-2xl tracking-widest"
                  placeholder="000000"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="flex-1 px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  Verify & Submit
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Didn't receive the code? Check your spam folder or try again.
              </p>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                <CheckCircle className="text-accent" size={48} />
              </div>
              <h3 className="text-2xl text-foreground mb-3">Offer Submitted Successfully!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in <strong>shreekrishnaengineerings.com</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                We'll review your offer and get back to you within 24-48 hours at {formData.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
