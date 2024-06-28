import NewsletterForm from "@/components/Newsletter";
import HoustonText from "@/components/HoustonText";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold lg:text-8xl md:text-7xl text-6xl gradient-text leading-none">
          Voyage <br /> de la Lune <br /> Hacks
        </h1>
        <h2 className="leading-none text-lg">
          Coming soon to{" "}
          <HoustonText/>{" "}
          in 2024.
        </h2>
        <NewsletterForm />
      </div>
    </main>
  );
}
