
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Beer } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-spezli-beige to-white p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Beer size={40} className="mx-auto text-spezli-red mb-2" />
          <h1 className="text-5xl font-display font-bold text-spezli-brown mb-3">404</h1>
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-spezli-gold/20 border border-spezli-gold/30 text-spezli-brown text-sm font-medium">
            Seite nicht gefunden
          </div>
          <p className="text-lg text-spezli-brown/80 mb-6">
            Ups! Hier gibt's kein Spezli zu finden. Bitte kehre zur Startseite zurück.
          </p>
        </motion.div>
        
        <motion.a
          href="/"
          className="spezli-button group inline-flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Zurück zur Startseite
        </motion.a>
      </div>
    </div>
  );
};

export default NotFound;
