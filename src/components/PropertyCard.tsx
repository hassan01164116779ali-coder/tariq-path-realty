import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  type?: string;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  type,
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {type && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {type}
          </div>
        )}
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-b border-border">
          <div className="flex items-center gap-4">
            {bedrooms && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Bed className="h-4 w-4" />
                <span>{bedrooms}</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Bath className="h-4 w-4" />
                <span>{bathrooms}</span>
              </div>
            )}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Maximize className="h-4 w-4" />
              <span>{area}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">السعر</p>
            <p className="text-2xl font-bold text-primary">{price}</p>
          </div>
          <Button variant="secondary" size="sm">
            التفاصيل
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
