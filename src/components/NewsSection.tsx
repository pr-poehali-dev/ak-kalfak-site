import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?auto=format&fit=crop&w=600&q=80",
      date: "12 мая 2025",
      title: "Фестиваль татарской культуры «Сабантуй 2025»",
      excerpt:
        "Приглашаем всех на ежегодный праздник плуга — Сабантуй. В программе национальные игры, концерт и ярмарка.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1648830611561-f7e7732f09c7?auto=format&fit=crop&w=600&q=80",
      date: "5 мая 2025",
      title: "Открыт набор на курсы татарского языка",
      excerpt:
        "Начинаем новый сезон курсов татарского языка для взрослых и детей. Занятия проводятся опытными преподавателями.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516681253457-9aee2ef39ee9?auto=format&fit=crop&w=600&q=80",
      date: "28 апреля 2025",
      title: "Выставка татарского национального костюма",
      excerpt:
        "В городском музее открылась выставка исторических и современных татарских национальных костюмов.",
    },
  ];

  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-primary-green font-medium mb-3">
            НОВОСТИ И СОБЫТИЯ
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            Последние новости
          </h2>
          <p className="text-gray-700">
            Будьте в курсе последних новостей и предстоящих событий нашей
            организации. Присоединяйтесь к нам на мероприятиях и станьте частью
            культурной жизни общества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-scale border-none shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="font-bold text-xl mb-3 font-playfair">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="ghost"
                  className="p-0 hover:bg-transparent text-primary-green hover:text-primary-green/80 flex items-center"
                >
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="ornament-divider mt-16">
          <span></span>
        </div>

        <div className="bg-primary-green/5 rounded-lg p-8 md:p-12 mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold font-playfair text-primary-green mb-4">
                Подпишитесь на нашу рассылку
              </h3>
              <p className="text-gray-700">
                Получайте новости о предстоящих мероприятиях, культурных
                событиях и деятельности нашей организации.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[250px]"
                />
                <Button className="btn-primary whitespace-nowrap">
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
