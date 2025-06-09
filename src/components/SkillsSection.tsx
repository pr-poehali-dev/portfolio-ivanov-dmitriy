import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      title: "DevOps & Инструменты",
      skills: [
        { name: "AWS/GCP", level: 80 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 75 },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "React Expert Certification",
    "Agile/Scrum Master",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Навыки и Экспертиза
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Более 7 лет опыта разработки, от стартапов до крупных корпораций
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="border-purple-100 hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl text-purple-700">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-6">
            Сертификации
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <Badge
                key={cert}
                variant="outline"
                className="text-sm px-4 py-2 border-purple-300 text-purple-700"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
