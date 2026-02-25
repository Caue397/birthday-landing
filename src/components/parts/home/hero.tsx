import Countdown from "./countdown";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-left bg-no-repeat"
      style={{
        backgroundImage:
          "url('/background/cheerful-young-man-celebrating-birthday-party-hat-holding-bday-cake-standing-against-blue-backgro.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-container items-center justify-end px-8">
        <div className="w-full sm:text-right sm:max-w-md">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Você está convidado
          </p>
          <h1 className="mb-4 sm:text-5xl text-3xl font-bold leading-tight text-foreground">
            Vem comemorar <br />
            <span className="text-accent">meu aniversário!</span>
          </h1>
          <p className="mb-8 sm:text-lg text-base leading-relaxed text-foreground/80">
            No dia <span className="font-semibold text-foreground">12 de fevereiro de 2027</span> vai
            ter festa, e você não pode faltar. Reserve essa data!
          </p>

          <div className="mb-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/50">
              Contagem regressiva
            </p>
            <Countdown />
          </div>

          <button className="rounded-full cursor-pointer bg-accent px-8 py-4 sm:text-base text-sm font-semibold text-foreground transition-opacity hover:opacity-80">
            Confirmar presença
          </button>
        </div>
      </div>
    </section>
  );
}
