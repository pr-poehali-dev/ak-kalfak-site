
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const features = [
    {
      icon: 'Heart',
      title: 'Сохранение традиций',
      description: 'Мы работаем над сохранением и распространением культурного наследия татарского народа'
    },
    {
      icon: 'Landmark',
      title: 'Образовательные программы',
      description: 'Организуем курсы татарского языка, истории и культуры для всех возрастов'
    },
    {
      icon: 'Calendar',
      title: 'Культурные мероприятия',
      description: 'Проводим фестивали, выставки и концерты, знакомящие с татарской культурой'
    },
    {
      icon: 'Building2',
      title: 'Общественная деятельность',
      description: 'Участвуем в социальных проектах и межкультурном диалоге'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-primary-green font-medium mb-3">О НАС</h6>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Что такое «Ак Калфак»</h2>
          <p className="text-gray-700">
            «Ак Калфак» — это общественная организация, названная в честь традиционного татарского женского головного убора, 
            символизирующего чистоту, мудрость и культурную идентичность. Наша миссия — сохранение, развитие и продвижение 
            татарской культуры, языка и традиций.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-primary-green/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name={feature.icon} className="text-primary-green w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-slideUp opacity-0" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1538379484799-c68c02ebff8d?auto=format&fit=crop&h=600" 
                alt="Татарские традиции" 
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-accent-gold font-playfair font-bold text-xl">Основано в 1992 году</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slideUp opacity-0" style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-primary-green">
              Наша история и достижения
            </h3>
            <p className="text-gray-700">
              «Ак Калфак» была основана группой энтузиастов, стремящихся сохранить культурную идентичность 
              татарского народа в современном мире. За годы работы мы:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-primary-green mt-1 mr-2 flex-shrink-0" />
                <span>Организовали более 500 культурных мероприятий</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-primary-green mt-1 mr-2 flex-shrink-0" />
                <span>Создали образовательные программы по изучению татарского языка</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-primary-green mt-1 mr-2 flex-shrink-0" />
                <span>Издали книги и материалы о татарской культуре</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" className="text-primary-green mt-1 mr-2 flex-shrink-0" />
                <span>Создали сеть единомышленников по всей России и за рубежом</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
