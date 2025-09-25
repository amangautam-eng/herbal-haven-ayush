import { Separator } from "@/components/ui/separator";
import { Leaf, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-forest-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-earth p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold">
                AYUSH Virtual Garden
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Bridging ancient wisdom with modern science to promote natural healing and wellness through traditional medicinal plants.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Explore</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-golden transition-colors">Home</a></li>
              <li><a href="#garden" className="hover:text-golden transition-colors">Virtual Garden</a></li>
              <li><a href="#systems" className="hover:text-golden transition-colors">AYUSH Systems</a></li>
              <li><a href="#search" className="hover:text-golden transition-colors">Plant Search</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Traditional Systems</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                🕉️ <span>Ayurveda</span>
              </li>
              <li className="flex items-center gap-2">
                ☪️ <span>Unani</span>
              </li>
              <li className="flex items-center gap-2">
                🔱 <span>Siddha</span>
              </li>
              <li className="flex items-center gap-2">
                💧 <span>Homeopathy</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Medical Disclaimer */}
        <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-6 mb-8">
          <h4 className="font-semibold text-amber-200 mb-2">⚠️ Important Medical Disclaimer</h4>
          <p className="text-amber-100/90 text-sm leading-relaxed">
            The information on this website is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for natural healing and wellness</span>
          </div>
          <div>
            © 2024 AYUSH Virtual Herbal Garden. Educational content for wellness promotion.
          </div>
        </div>
      </div>
    </footer>
  );
};