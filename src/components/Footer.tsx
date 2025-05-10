import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-primary-green text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="https://images.unsplash.com/photo-1617817653566-1086ed28bd0d?auto=format&fit=crop&h=48"
                alt="Ак Калфак"
                className="h-10 w-auto bg-white rounded-full p-1"
              />
              <span className="text-white text-xl font-playfair font-bold">
                Ак Калфак
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Татарская общественная организация, посвященная сохранению и
              развитию национальной культуры, языка и традиций.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-accent-gold transition-colors"
              >
                <Icon name="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-gold transition-colors"
              >
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-gold transition-colors"
              >
                <Icon name="Youtube" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-gold transition-colors"
              >
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">
              Быстрые ссылки
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />О нас
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <Icon name="ChevronRight" className="w-4 h-4 mr-2" />
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Icon
                  name="MapPin"
                  className="w-5 h-5 mr-3 flex-shrink-0 mt-1"
                />
                <span className="text-white/80">
                  Новосибирск, ул. Мира, 54 а, офис 304
                </span>
              </li>
              <li className="flex">
                <Icon name="Phone" className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-white/80">+7 (843) 123-45-67</span>
              </li>
              <li className="flex">
                <Icon name="Mail" className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-white/80">info@akkalfak.org</span>
              </li>
              <li className="flex">
                <Icon name="Clock" className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="text-white/80">
                  Пн-Пт: 9:00 - 18:00
                  <br />
                  Сб: 10:00 - 14:00
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-6">
              Будьте в курсе
            </h3>
            <p className="text-white/80 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости о событиях и
              мероприятиях.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Ваш email"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-primary-green font-medium rounded-md hover:bg-accent-gold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Ак Калфак. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
