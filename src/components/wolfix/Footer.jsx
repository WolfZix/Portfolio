function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};


export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-background overflow-hidden select-none">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={`${import.meta.env.BASE_URL}Wolfix Logo2.png`} alt="" className="sm:w-[80%] lg:w-[60%] opacity-[0.015] select-none" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={`${import.meta.env.BASE_URL}Wolfix Logo2.png`} alt="" className="md:w-[50%] w-[20%] select-none" />
            <p className="text-muted-foreground text-sm mt-3">Strony, które działają. </p>
          </div>
          <div>
            <div className="grid grid-cols-3 text-center">
              <h6 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4 col-span-3"> Nawigacja </h6>
              <ul className="space-y-2 text-sm text-muted-foreground cursor-pointer">
                <li><button className="hover:text-foreground transition" onClick={() => { scrollToTop() }}>Strona Główna</button></li>
                <li><a href="#about" className="hover:text-foreground transition">O nas</a></li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground cursor-pointer">
                <li><a href="#services" className="hover:text-foreground transition">Usługi</a></li>
                <li><a href="#process" className="hover:text-foreground transition">Proces</a></li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground cursor-pointer">
                <li><a href="#portfolio" className="hover:text-foreground transition">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-foreground transition">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <h6 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4"> Kontakt </h6>
            <p className="text-sm text-muted-foreground select-text"> patryk.domaszek41@gmail.com </p>
            <p className="text-xs text-muted-foreground/50 mt-6"> © {new Date().getFullYear()} WolfZix. Wszystkie prawa zastrzeżone. </p>
          </div>
        </div>
      </div>
    </footer>
  );
}