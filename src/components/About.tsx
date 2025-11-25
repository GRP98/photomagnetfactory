export const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Our Business
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We specialise in <span className="text-primary font-semibold">Photo Magnets</span>,{" "}
            <span className="text-primary font-semibold">Acrylic Frames</span>,{" "}
            <span className="text-primary font-semibold">Polaroid Prints</span> and{" "}
            <span className="text-primary font-semibold">Live Photo-Magnet Stalls</span> for events. 
            Enjoy instant printing with custom designs, premium materials and vibrant colours.
          </p>
        </div>
      </div>
    </section>
  );
};
