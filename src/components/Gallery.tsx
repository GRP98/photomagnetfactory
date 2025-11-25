import photoMagnet from "@/assets/photo-magnet.jpg";
import acrylicMagnet from "@/assets/acrylic-magnet.jpg";
import acrylicFrame from "@/assets/acrylic-frame.jpg";
import eventStall from "@/assets/event-stall.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Gallery = () => {
  const images = [
    { src: photoMagnet, alt: "Photo Magnets" },
    { src: acrylicMagnet, alt: "Acrylic Magnets" },
    { src: acrylicFrame, alt: "Acrylic Frames" },
    { src: eventStall, alt: "Event Stall Setup" },
    { src: heroBg, alt: "Product Showcase" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Gallery
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground">
            Browse our collection of magnets, frames, and event setups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer animate-scale-in hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-background font-bold text-xl">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
