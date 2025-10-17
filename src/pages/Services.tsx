import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Key,
  Building2,
  TrendingUp,
  FileText,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "وساطة بيع وشراء عقارات",
      description: "نساعدك في بيع أو شراء العقارات بأفضل الأسعار - فلل، شقق، محلات، مكاتب استثمارية.",
      features: [
        "تقييم دقيق للعقار",
        "تسويق احترافي",
        "إجراءات قانونية متكاملة",
        "متابعة حتى إتمام الصفقة",
      ],
    },
    {
      icon: Key,
      title: "تأجير قصير وطويل الأمد",
      description: "خدمات تأجير شاملة مع عقود إلكترونية وإدارة احترافية للمستأجرين.",
      features: [
        "عقود إلكترونية موثقة",
        "إدارة المستأجرين",
        "تحصيل الإيجارات",
        "صيانة دورية",
      ],
    },
    {
      icon: Building2,
      title: "إدارة الممتلكات",
      description: "إدارة شاملة لممتلكاتك العقارية مع صيانة وتقارير دورية.",
      features: [
        "صيانة مستمرة",
        "تحصيل إيجارات",
        "تقارير شهرية",
        "متابعة قانونية",
      ],
    },
    {
      icon: TrendingUp,
      title: "تطوير عقاري واستشارات",
      description: "دراسات جدوى وتصميم عروض استثمارية لضمان أفضل عائد استثماري.",
      features: [
        "دراسات جدوى",
        "استشارات استثمارية",
        "تصميم مشاريع",
        "إدارة التطوير",
      ],
    },
    {
      icon: FileText,
      title: "تقييم عقاري احترافي",
      description: "تقارير تقييم دقيقة تشمل سعر السوق والقيمة العادلة للعقار.",
      features: [
        "تقييم معتمد",
        "تقارير مفصلة",
        "تحليل السوق",
        "استشارات سعرية",
      ],
    },
    {
      icon: Camera,
      title: "تسويق عقاري متكامل",
      description: "خدمات تسويق شاملة تشمل التصوير الاحترافي والجولات الافتراضية.",
      features: [
        "تصوير احترافي",
        "جولات افتراضية",
        "حملات إعلانية",
        "نشر على منصات متعددة",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">خدماتنا</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات العقارية لتلبية جميع احتياجاتك
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="secondary" className="w-full">
                      استفسر الآن
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            هل تحتاج إلى استشارة مجانية؟
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            فريقنا جاهز لمساعدتك في اختيار الخدمة المناسبة لك
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              تواصل معنا الآن
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
