import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      position: "CTO, TechStart",
      company: "TechStart",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c78a2e2a?w=100&h=100&fit=crop&crop=face",
      text: "Дмитрий — исключительный разработчик. Он не только технически компетентен, но и отлично работает в команде. Его способность решать сложные задачи и внимание к деталям впечатляют.",
      rating: 5,
    },
    {
      id: 2,
      name: "Михаил Козлов",
      position: "Product Manager",
      company: "InnovateCorp",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Работать с Дмитрием — одно удовольствие. Он всегда укладывается в сроки, пишет чистый код и предлагает улучшения, которые действительно делают продукт лучше.",
      rating: 5,
    },
    {
      id: 3,
      name: "Елена Смирнова",
      position: "Lead Designer",
      company: "DesignHub",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "Дмитрий умеет воплощать дизайн в код с потрясающей точностью. Его понимание пользовательского опыта и внимание к деталям UI делают его идеальным партнером для дизайнеров.",
      rating: 5,
    },
    {
      id: 4,
      name: "Алексей Волков",
      position: "Senior Developer",
      company: "CodeMasters",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Дмитрий — настоящий профессионал своего дела. Его код архитектурно продуман, легко читается и поддерживается. Он отличный ментор для младших разработчиков.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        className={`w-4 h-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Отзывы Коллег
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Что говорят о моей работе коллеги и клиенты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-purple-100 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-purple-100 text-purple-700">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-purple-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
