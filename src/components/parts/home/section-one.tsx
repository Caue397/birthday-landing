import Image from "next/image";

export default function SectionOne() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-container px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl border-2 border-accent md:w-1/2">
            <Image
              src="/birthday.jpg"
              alt="Elementos de aniversário"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              A história
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-background sm:text-4xl">
              Um ano mais de{" "}
              <span className="text-accent">memórias incríveis</span>
            </h2>
            <p className="mb-4 text-base leading-relaxed text-background/70 sm:text-lg">
              Cada ano que passa é mais um capítulo cheio de aventuras,
              aprendizados e momentos inesquecíveis ao lado de pessoas especiais.
            </p>
            <p className="text-base leading-relaxed text-background/70 sm:text-lg">
              E nada melhor do que celebrar tudo isso junto com quem faz parte
              dessa história. Chegou a hora de reunir todo mundo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
