import { LoginCard } from "./LoginForm";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>

      <section className="container grid lg:grid-cols-2 items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                Min Social
              </span>
            </h1>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Mini rede social com layout inspirado no Twitter, criada com ReactJs, ShadCn, Laravel e MySql.
          </p>
        </div>

        <div className="z-10 order-2 lg:order-none mt-6 lg:mt-0">
          <LoginCard />
        </div>
      </section>

      <section className="container pb-14 text-center mt-16">
        <h3>
          &copy; 2024 Feito com carinho por{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/francisco-gab/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Chico
          </a>
        </h3>
      </section>
    </div>
  );
};
