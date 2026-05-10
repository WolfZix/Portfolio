function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

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
                <li><button className="hover:text-foreground transition" onClick={() => { scrollToSection("hero") }}>Strona Główna</button></li>
                <li><button onClick={() => { scrollToSection("about") }} className="hover:text-foreground transition">O nas</button></li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground cursor-pointer">
                <li><button onClick={() => { scrollToSection("services") }} className="hover:text-foreground transition">Usługi</button></li>
                <li><button onClick={() => { scrollToSection("process") }} className="hover:text-foreground transition">Proces</button></li>
              </ul>
              <ul className="space-y-2 text-sm text-muted-foreground cursor-pointer">
                <li><button onClick={() => { scrollToSection("portfolio") }} className="hover:text-foreground transition">Portfolio</button></li>
                <li><button onClick={() => { scrollToSection("contact") }} className="hover:text-foreground transition">Kontakt</button></li>
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