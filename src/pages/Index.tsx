import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-real-estate.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const features = [
    {
      icon: Home,
      title: "عقارات متنوعة",
      description: "مجموعة واسعة من العقارات السكنية والتجارية",
    },
    {
      icon: Shield,
      title: "ثقة وشفافية",
      description: "معاملات آمنة وشفافة مع ضمان كامل",
    },
    {
      icon: TrendingUp,
      title: "استثمار مربح",
      description: "فرص استثمارية مدروسة وعوائد مضمونة",
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "خبراء عقاريين بخبرة تتجاوز 7 سنوات",
    },
  ];

  const properties = [
    {
     
    },
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-background mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            نحقق حلمك العقاري
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            شريكك الموثوق في الاستثمار العقاري - عقارات مميزة وخدمات احترافية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Link to="/services">
              <Button variant="hero" size="lg">
                اكتشف خدماتنا
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">لماذا تختار الطريق العقاري؟</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم لك أفضل الخدمات العقارية بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-card to-background rounded-xl border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">العقارات المميزة</h2>
            <p className="text-muted-foreground text-lg">
              اختر من بين أفضل العقارات المتاحة في أرقى المواقع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="secondary" size="lg">
                عرض المزيد من العقارات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            ابدأ رحلتك العقارية معنا اليوم
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            فريقنا المحترف جاهز لمساعدتك في إيجاد العقار المثالي
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90">
              احجز استشارة مجانية
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
