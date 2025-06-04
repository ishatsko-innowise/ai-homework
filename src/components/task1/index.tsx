import PricingCard from "./PricingCard";

export default function Task1() {
  return (
    <div className="bg-slate-900 text-white py-12 px-4 h-screen">
      <h1 className="text-3xl font-bold text-center mb-20">Pricing</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <PricingCard
          plan="Standard"
          price="100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
        />
        <PricingCard
          plan="Pro"
          price="200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured
        />
        <PricingCard
          plan="Expert"
          price="500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
        />
      </div>
    </div>
  );
}
