export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10 py-12">
      <div className="mx-auto max-w-container px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-2xl font-bold text-foreground">
            Vem comemorar <span className="text-accent">comigo!</span>
          </p>
          <p className="text-sm text-foreground/50">
            12 de fevereiro de 2027 · Reserva sua agenda
          </p>
          <div className="mt-2 h-px w-16 bg-accent" />
          <p className="text-xs text-foreground/30">
            Feito com carinho para um dia especial
          </p>
        </div>
      </div>
    </footer>
  );
}
