import { Instagram, MessageCircle } from 'lucide-react';
export default function Footer() {
  return <footer className="py-10 bg-agency-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Attention<span className="text-agency-teal">.social</span>
            </h2>
            <p className="text-white/60 text-sm mt-1">
              Data-driven marketing results for businesses in the Middle East.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/yusrattention/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-agency-teal transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/96876990710" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-agency-teal transition-colors">
              
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Attention.social. All rights reserved.
        </div>
      </div>
    </footer>;
}