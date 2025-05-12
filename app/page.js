import ButtonLogin from "./components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Linf0rd";

  const greeting = `Hello ${isLoggedIn ? name : "there!"}`;

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-300">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-black">Workspace</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div className="">
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold p-4 mb-6">
          Collect customer feedback to build better products.
        </h1>
        <div className="opacity-90 mb-10">
          Create a feedback board in minutes, prioritize features, and build
          products your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      {/* PRICING */}
      <section className="bg-base-300">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts to your needs.
          </h2>

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex items-center">
              <div className="text-4xl font-black">R200</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            <ul className="space-y-2">
              <li>✔ Collect customer feedback</li>
              <li>✔ Unlimited boards</li>
              <li>✔ Admin dashboard</li>
              <li>✔ 24/7 support</li>
            </ul>

            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-100">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul>
            {[{ question: "Q", answer: "A" }].map((qa) => {
              <li key={qa.question}>{qa.question}</li>;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
