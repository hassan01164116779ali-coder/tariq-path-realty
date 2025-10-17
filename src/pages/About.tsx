import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    { title: "الشفافية", description: "نلتزم بالوضوح والصراحة في جميع معاملاتنا" },
    { title: "الاحترافية", description: "نقدم خدمات بأعلى معايير الجودة والمهنية" },
    { title: "الاستدامة", description: "نهتم بالتطوير المستدام والمسؤول للعقارات" },
    { title: "التركيز على العميل", description: "رضا عملائنا هو أولويتنا الأولى" },
  ];

  const team = [
    {
      name: "أحمد سمير",
      position: "المدير التنفيذي",
      description: "خبرة 7 سنوات في السوق العقاري المصري",
    },
    {
      name: "منى خالد",
      position: "مدير العمليات",
      description: "متخصصة في إدارة المشروعات ومتابعة التنفيذ",
    },
    {
      name: "كريم نور",
      position: "مدير التسويق",
      description: "خبير في التسويق العقاري الرقمي",
    },
    {
      name: "يوسف حامد",
      position: "مدير المبيعات",
      description: "يقود فريق من 6 وسطاء عقاريين محترفين",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">من نحن</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            شركة الطريق العقاري للاستثمار العقاري - شريكك الموثوق في عالم الاستثمار العقاري
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                  شركة الطريق العقاري للاستثمار العقاري
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">الاسم بالإنجليزية:</strong> Al-Tariq Real Estate Investment Co.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">تأسست عام:</strong> 2023
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">نوع الشركة:</strong> مساهمة خاصة - تطوير عقاري ووساطة وإدارة ممتلكات
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">المقر:</strong> مبنى التجمع بلازا - شارع التسعين - التجمع الخامس - القاهرة، مصر
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">الرقم الضريبي:</strong> 1234567890
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">السجل التجاري:</strong> 98765/2023
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision, Mission, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">رؤيتنا</h3>
                  <p className="text-muted-foreground">
                    أن نصبح الخيار الأول للعملاء الباحثين عن استثمارات عقارية آمنة ومربحة في مصر والمنطقة.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">رسالتنا</h3>
                  <p className="text-muted-foreground">
                    نوفر حلول عقارية مبتكرة وشفافة تُنمّي قيمة ممتلكات عملائنا وتُسهل قرار الشراء أو الاستثمار.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">قيمنا</h3>
                  <p className="text-muted-foreground">
                    شفافية، احتراف، استدامة، تركيز على العميل، جودة عالية في كل ما نقدمه.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">قيمنا الأساسية</h2>
            <p className="text-muted-foreground text-lg">المبادئ التي نعمل بها لضمان رضاكم الكامل</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">فريق العمل</h2>
            <p className="text-muted-foreground text-lg">خبراء متخصصون لخدمتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm font-medium text-primary mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
