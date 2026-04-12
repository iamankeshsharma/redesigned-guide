import { ShoppingCart, Mail } from "lucide-react";
import { useState } from "react";
import { DomainOfferModal } from "./DomainOfferModal";

export function DomainForSaleBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-accent via-accent to-accent/90 text-accent-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
                <ShoppingCart size={20} />
              </div>
              <div>
                <div className="font-semibold text-lg">
                  Domain For Sale: shreekrishnaengineerings.com
                </div>
                <div className="text-sm text-accent-foreground/90">
                  Premium domain name available for purchase
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-accent rounded-lg hover:bg-white/90 transition-colors font-semibold whitespace-nowrap shadow-md"
            >
              <Mail size={18} />
              Make an Offer
            </button>
          </div>
        </div>
      </div>

      <DomainOfferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
