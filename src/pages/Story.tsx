import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Award, Target } from "lucide-react";

const Story = () => {
  const milestones = [
    {
      year: "2023",
      title: "التأسيس",
      description: "بدأنا رحلتنا بحلم تقديم خدمات عقارية بمعايير عالمية في السوق المصري.",
      icon: Lightbulb,
    },
    {
      year: "2023",
      title: "أول مشروع",
      description: "أتممنا أول صفقة عقارية كبرى في التجمع الخامس بقيمة تجاوزت 50 مليون جنيه.",
      icon: Rocket,
    },
    {
      year: "2024",
      title: "التوسع",
      description: "توسعنا لنشمل خدمات إدارة الممتلكات والتطوير العقاري.",
      icon: Target,
    },
    {
      year: "2024",
      title: "الإنجازات",
      description: "خدمنا أكثر من 200 عميل وأتممنا صفقات بقيمة تتجاوز 500 مليون جنيه.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">كيف بدأنا</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            قصة نجاح بدأت بحلم وتحولت إلى واقع ملموس
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">البداية</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    في عام 2023، انطلقت رحلة الطريق العقاري بحلم بسيط: تقديم خدمات عقارية تجمع بين
                    الاحترافية والشفافية والجودة. رأينا الحاجة الملحة في السوق المصري لشريك عقاري موثوق
                    يضع مصلحة العميل في المقام الأول.
                  </p>
                  <p>
                    بدأنا بفريق صغير من الخبراء المتحمسين، كل منهم يحمل رؤية واضحة: تغيير طريقة تعامل
                    الناس مع العقارات في مصر. لم يكن الطريق سهلاً، لكن إيماننا بقدرتنا على إحداث فرق
                    كان دافعنا للاستمرار.
                  </p>
                  <p>
                    في أول ستة أشهر، ركزنا على بناء قاعدة صلبة من الثقة مع عملائنا. كل صفقة، كل
                    استشارة، كل خدمة قدمناها كانت بمثابة لبنة في بناء سمعتنا. وسرعان ما بدأت النتائج
                    تظهر.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                محطات رئيسية في رحلتنا
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-x-2"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                            <milestone.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                              {milestone.year}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground">{milestone.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-lg">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Future Vision */}
            <Card className="bg-gradient-to-br from-card to-background border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 text-center">نحو المستقبل</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  رحلتنا لم تنته بعد. نطمح لأن نصبح الاسم الأول في مجال العقارات في مصر والمنطقة.
                  نخطط للتوسع في خدماتنا، تطوير تقنياتنا، وزيادة تأثيرنا الإيجابي على السوق العقاري.
                  لكن هدفنا الأساسي يبقى ثابتاً: خدمة عملائنا بأفضل ما لدينا.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500M+</div>
              <div className="text-muted-foreground">قيمة الصفقات</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">عقار مباع</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">التزام بالجودة</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
