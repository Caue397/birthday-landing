import Image from "next/image";

export default function SectionTwo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-container px-8">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              O evento
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-background sm:text-4xl">
              Detalhes da{" "}
              <span className="text-accent">festa</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-background/70 sm:text-lg">
              Prepare-se para uma noite incrível com muita música, comida boa e
              a melhor companhia. Todos os detalhes foram pensados para que você
              se divirta muito!
            </p>

            <ul className="space-y-3">
              {[
                { label: "Data", value: "12 de fevereiro de 2027" },
                { label: "Local", value: "A definir" },
                { label: "Horário", value: "A partir das 20h" },
              ].map(({ label, value }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-background/60">
                    <span className="font-semibold text-background">{label}:</span>{" "}
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-2xl border-2 border-accent md:w-1/2">
            <Image
              src="/birthday2.jpg"
              alt="Festa de aniversário"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
