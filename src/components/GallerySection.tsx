
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const gallery = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583778176566-acd94c2c0397?auto=format&fit=crop&w=800&q=80",
      title: "Традиционные костюмы",
      category: "culture"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?auto=format&fit=crop&w=800&q=80",
      title: "Сабантуй 2024",
      category: "events"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486596035551-29de6c3e3482?auto=format&fit=crop&w=800&q=80",
      title: "Мастер-класс по вышивке",
      category: "workshops"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1619635397198-a1bf0344a0c1?auto=format&fit=crop&w=800&q=80",
      title: "Татарская кухня",
      category: "culture"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1537268138514-83ac17d66852?auto=format&fit=crop&w=800&q=80",
      title: "Детский ансамбль",
      category: "events"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=800&q=80",
      title: "Выставка искусства",
      category: "culture"
    },
  ];

  const tabs = [
    { id: 'all', label: 'Все' },
    { id: 'culture', label: 'Культура' },
    { id: 'events', label: 'События' },
    { id: 'workshops', label: 'Мастер-классы' },
  ];

  const filteredGallery = activeTab === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-16 md:py-24 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h6 className="text-primary-green font-medium mb-3">ГАЛЕРЕЯ</h6>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Наши фотографии</h2>
          <p className="text-gray-700">
            Взгляните на моменты из жизни нашей организации, культурные мероприятия и традиции татарского народа.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map(tab => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`${activeTab === tab.id ? 'bg-primary-green text-white' : 'text-gray-700'}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id} 
              className="overflow-hidden rounded-lg shadow-lg hover-scale cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" className="text-white w-8 h-8" />
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-10">
            Видео о наших мероприятиях
          </h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden shadow-lg hover-scale">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="rounded-full bg-white/30 p-4 backdrop-blur-sm">
                        <Icon name="Play" className="text-white w-8 h-8" />
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80" 
                      alt="Видео о Сабантуе" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold">Фестиваль "Сабантуй" 2024</h4>
                  </div>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden shadow-lg hover-scale">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="rounded-full bg-white/30 p-4 backdrop-blur-sm">
                        <Icon name="Play" className="text-white w-8 h-8" />
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?auto=format&fit=crop&w=800&q=80" 
                      alt="Видео о мастер-классе" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold">Мастер-класс по народным танцам</h4>
                  </div>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden shadow-lg hover-scale">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="rounded-full bg-white/30 p-4 backdrop-blur-sm">
                        <Icon name="Play" className="text-white w-8 h-8" />
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80" 
                      alt="Видео о концерте" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold">Концерт татарской музыки</h4>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
