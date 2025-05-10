import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-primary-green font-medium mb-3">КОНТАКТЫ</h6>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Связаться с нами
          </h2>
          <p className="text-gray-700">
            Если у вас есть вопросы или предложения, не стесняйтесь обращаться к
            нам. Мы всегда рады новым идеям и сотрудничеству.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold font-playfair mb-6">
              Отправить сообщение
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Ваш email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Тема сообщения"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ваше сообщение"
                />
              </div>

              <Button className="btn-primary w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-green/5 rounded-lg p-6">
              <h3 className="text-2xl font-bold font-playfair mb-6">
                Информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-green/10 rounded-full p-3 mr-4">
                    <Icon
                      name="MapPin"
                      className="text-primary-green w-5 h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Адрес</h4>
                    <p className="text-gray-600">
                      Новосибирск, ул. Мира, 54 а, офис 304
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green/10 rounded-full p-3 mr-4">
                    <Icon name="Phone" className="text-primary-green w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Телефон</h4>
                    <p className="text-gray-600">+7 (843) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green/10 rounded-full p-3 mr-4">
                    <Icon name="Mail" className="text-primary-green w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">info@akkalfak.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-green/10 rounded-full p-3 mr-4">
                    <Icon name="Clock" className="text-primary-green w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Часы работы</h4>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-gold/5 rounded-lg p-6">
              <h3 className="text-2xl font-bold font-playfair mb-6">
                Социальные сети
              </h3>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon
                    name="Facebook"
                    className="text-primary-green w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon
                    name="Instagram"
                    className="text-primary-green w-6 h-6"
                  />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon name="Youtube" className="text-primary-green w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon name="Twitter" className="text-primary-green w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon
                    name="Telegram"
                    className="text-primary-green w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
