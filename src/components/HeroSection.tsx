import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero-pattern relative min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 md:space-y-8 animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-green font-playfair">
              Новосибирская общественная организация{" "}
              <span className="text-accent-gold">
                «Центр татарской национальной культуры "Ак Калфак"»
              </span>
            </h1>
            <p className="text-xl text-gray-700">
              Сохраняем и развиваем национальную культуру, язык и традиции
              татарского народа
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="btn-primary"
                onClick={() => (window.location.href = "#about")}
              >
                Узнать больше
              </Button>
              <Button
                className="btn-accent"
                onClick={() => (window.location.href = "#contacts")}
              >
                Связаться с нами
              </Button>
            </div>
          </div>

          <div
            className="relative animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-gold/20 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-green/20 rounded-full"></div>

            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1634838040911-ded8e939f26d?auto=format&fit=crop&h=600"
                alt="Татарская культура"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-semibold">
                  Культурное наследие татарского народа
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
