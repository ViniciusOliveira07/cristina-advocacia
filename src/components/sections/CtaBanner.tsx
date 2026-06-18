import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">
          Tem uma questão jurídica? Vamos conversar.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Agende uma consulta inicial e entenda seus direitos com clareza.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-primary-light hover:text-primary"
          >
            <Link to="/agendar">Agendar Consulta Agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
