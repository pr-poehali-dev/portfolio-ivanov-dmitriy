import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Полнофункциональная платформа электронной коммерции с микросервисной архитектурой. Обслуживает 100K+ пользователей ежемесячно.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      features: ["Микросервисы", "Платежные системы", "Реал-тайм уведомления"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description:
        "Интерактивный дашборд для анализа данных с возможностью создания кастомных отчетов и визуализации метрик в реальном времени.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Chart.js"],
      features: ["Реал-тайм данные", "Кастомные отчеты", "Экспорт в PDF"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description:
        "Мобильное приложение для банковских операций с биометрической аутентификацией и интеграцией с различными платежными системами.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "JWT"],
      features: ["Биометрия", "P2P переводы", "Криптокошелек"],
      links: {
        github: "#",
        demo: "#",
      },
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Избранные Проекты
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Некоторые из моих лучших работ, демонстрирующие экспертизу в
            разработке современных веб-приложений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">
                    Ключевые особенности:
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon
                          name="Check"
                          className="w-3 h-3 text-green-500 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-purple-100 text-purple-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Icon name="Github" className="w-4 h-4 mr-2" />
                    Код
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                    Демо
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
