import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const mainTechs = ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-purple-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Avatar className="h-32 w-32 mx-auto mb-6 ring-4 ring-purple-100">
            <AvatarImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Дмитрий Иванов"
            />
            <AvatarFallback className="text-2xl font-semibold bg-purple-100 text-purple-700">
              ДИ
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-2">
            Дмитрий Иванов
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">
            Fullstack Developer & Tech Lead
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Создаю масштабируемые веб-приложения и руковожу командами
            разработки. Специализируюсь на React, Node.js и современных облачных
            технологиях.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {mainTechs.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-sm px-4 py-2 bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            <Icon name="Mail" className="mr-2" />
            Связаться со мной
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg"
          >
            <Icon name="Download" className="mr-2" />
            Скачать CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
