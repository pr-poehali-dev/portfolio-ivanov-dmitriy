import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GoalsSection = () => {
  const goals = [
    {
      icon: "Target",
      title: "Техническое Лидерство",
      description:
        "Стремлюсь к роли CTO в инновационном стартапе, где смогу влиять на техническую стратегию и развивать команду разработчиков.",
    },
    {
      icon: "Lightbulb",
      title: "Собственный Продукт",
      description:
        "Планирую запустить SaaS-платформу для автоматизации DevOps процессов, основанную на опыте работы с различными командами.",
    },
    {
      icon: "Users",
      title: "Менторство и Обучение",
      description:
        "Хочу делиться знаниями через блог, открытые курсы и менторство, помогая другим разработчикам расти профессионально.",
    },
  ];

  const contacts = [
    {
      icon: "Mail",
      label: "Email",
      value: "dmitry.ivanov@example.com",
      link: "mailto:dmitry.ivanov@example.com",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Локация",
      value: "Москва, Россия",
      link: "#",
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/dmitry-ivanov",
      link: "https://linkedin.com/in/dmitry-ivanov",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Профессиональные Цели
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Мое видение развития карьеры и планы на будущее
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="text-center border-purple-100 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon
                    name={goal.icon as any}
                    className="w-8 h-8 text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl text-slate-800">
                  {goal.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Готов к Новым Вызовам
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ищу возможности для работы над интересными проектами. Открыт для
              обсуждения проектов, консультаций и сотрудничества.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="flex items-center p-4 rounded-lg hover:bg-purple-50 transition-colors group"
              >
                <div className="p-2 bg-purple-100 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors">
                  <Icon
                    name={contact.icon as any}
                    className="w-5 h-5 text-purple-600"
                  />
                </div>
                <div>
                  <div className="text-sm text-slate-500">{contact.label}</div>
                  <div className="text-sm font-medium text-slate-700">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg mr-4"
            >
              <Icon name="Calendar" className="mr-2" />
              Назначить встречу
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
