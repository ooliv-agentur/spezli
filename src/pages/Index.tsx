
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Beer } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [foamBubbles, setFoamBubbles] = useState<Array<{ id: number; left: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    setIsLoaded(true);

    // Create random beer bubbles
    const newBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 80 + 10, // 10-90%
      delay: Math.random() * 5, // 0-5s delay
    }));
    setBubbles(newBubbles);

    // Create foam bubbles at the top
    const newFoamBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // 0-100%
      size: Math.random() * 25 + 10, // 10-35px
      opacity: Math.random() * 0.5 + 0.2, // 0.2-0.7 opacity
    }));
    setFoamBubbles(newFoamBubbles);

    // Preload image
    const img = new Image();
    img.src = "/lovable-uploads/21a6f950-5b34-4ed2-90e5-99e87b6b533b.png";
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center px-3 sm:px-4 bg-gradient-to-br from-spezli-beige to-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-spezli-gold opacity-30 animate-pulse-subtle blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-spezli-red opacity-20 animate-pulse-subtle blur-3xl"></div>
      </div>

      {/* Beer foam at the top */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
        {foamBubbles.map((bubble) => (
          <div
            key={`foam-${bubble.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${bubble.left}%`,
              top: -bubble.size / 2,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.7)'
            }}
          />
        ))}
      </div>

      {/* Bubble animation */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="beer-bubble w-3 h-3 bg-white rounded-full"
          style={{
            left: `${bubble.left}%`,
            bottom: "25%",
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      <div className="container max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 z-10 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-spezli-gold/20 border border-spezli-gold/30 text-spezli-brown text-sm font-medium animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <span className="flex items-center gap-2">
              <Beer size={16} className="animate-pulse-subtle" />
              <span>spez.li</span>
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-spezli-brown tracking-tight">
            <span className="block">Chrampfsch wie es Tier?</span>
            <span className="text-spezli-red">Denn gönn der vo de SPEZ AG es Büezer-Bier!</span>
          </h1>
        </motion.div>

        {/* Middle Section - Welcome Text + Woodcutter */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Welcome Card */}
          <motion.div
            className="glass-panel p-6 sm:p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl text-spezli-brown leading-relaxed">
              Härzlich Willkomme uf üsere Fiirabig-Homepage. Du hesch en aasträngende Tag gha, mit em guete Team macht das am meischte Spass! Das läbe mir i de SPEZ AG und wünsche der drum mit em SPEZ.Li en schöne Fiirabig.
            </p>
            <motion.a
              href="https://www.spez-ag.ch" 
              target="_blank"
              rel="noopener noreferrer"
              className="spezli-button group flex items-center gap-2 mt-6 inline-flex w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Zur SPEZ AG!
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Woodcutter Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative w-full max-w-md">
              <motion.img
                src="/lovable-uploads/21a6f950-5b34-4ed2-90e5-99e87b6b533b.png"
                alt="Spezli Holzfäller mit Motorsäge"
                className="object-contain w-full h-auto max-h-[60vh] drop-shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <div className="absolute -inset-0.5 bg-spezli-gold/5 rounded-full blur-3xl opacity-30 animate-pulse-subtle"></div>
            </div>
          </motion.div>
        </div>

        {/* Merchandise Call-to-Action */}
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="glass-panel p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-spezli-red/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Beer Bottle Image */}
              <motion.div 
                className="flex justify-center"
                animate={{ rotate: [0, -3, 3, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <img
                  src="/lovable-uploads/spezli-bottle.png"
                  alt="SPEZ.li Büezer-Bier"
                  className="object-contain w-full max-w-[180px] sm:max-w-[250px] h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Text Content */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-spezli-brown">
                  Hesch no kei SPEZ.li Büezer-Bier chönne gniesse?
                </h2>
                <p className="text-lg text-spezli-brown/80">
                  Oder bruuchsch no öppis vo üsem Merchandise?
                </p>
                <p className="text-xl font-semibold text-spezli-red">
                  Mäld dich bi dim SPEZ Kolleg!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer small print */}
      <motion.div 
        className="relative w-full text-center text-spezli-brown/60 text-sm py-8 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 0.8 : 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        © {new Date().getFullYear()} spez.li • Es chlises Bier, e grosse Schritt
      </motion.div>
    </div>
  );
};

export default Index;
