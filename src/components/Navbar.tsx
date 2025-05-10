
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://images.unsplash.com/photo-1617817653566-1086ed28bd0d?auto=format&fit=crop&h=48" 
            alt="Ак Калфак" 
            className="h-10 w-auto"
          />
          <span className="text-primary-green text-xl md:text-2xl font-playfair font-bold">
            Ак Калфак
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-primary-green transition-colors">Главная</a>
          <a href="#about" className="text-gray-700 hover:text-primary-green transition-colors">О нас</a>
          <a href="#news" className="text-gray-700 hover:text-primary-green transition-colors">Новости</a>
          <a href="#gallery" className="text-gray-700 hover:text-primary-green transition-colors">Галерея</a>
          <a href="#contacts" className="text-gray-700 hover:text-primary-green transition-colors">Контакты</a>
        </div>

        <Button 
          className="hidden md:flex btn-primary"
          onClick={() => window.location.href='#contacts'}
        >
          Присоединиться
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="flex md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-6 px-4">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-primary-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#news" 
              className="text-gray-700 hover:text-primary-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Новости
            </a>
            <a 
              href="#gallery" 
              className="text-gray-700 hover:text-primary-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Галерея
            </a>
            <a 
              href="#contacts" 
              className="text-gray-700 hover:text-primary-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button 
              className="btn-primary w-full"
              onClick={() => {
                window.location.href='#contacts';
                setIsMobileMenuOpen(false);
              }}
            >
              Присоединиться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
