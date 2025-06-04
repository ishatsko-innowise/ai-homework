type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

export default function PricingCard({
  plan,
  price,
  features,
  isFeatured = false,
}: PricingCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center py-14 
        ${
          isFeatured
            ? "bg-slate-700 text-white scale-110 z-10"
            : "bg-white text-slate-800"
        } 
        transition-transform transform hover:scale-110 focus-within:ring-4 ring-offset-2 ring-indigo-500
        w-full max-w-xs sm:w-80 h-[500px]
      `}
      tabIndex={0}
    >
      <div className="text-center w-full px-4">
        <h2 className="text-lg font-semibold mb-2">{plan}</h2>
        <p className="text-6xl font-bold mb-4">${price}</p>
        <ul className="divide-y divide-slate-300 w-full text-sm text-center my-6 border-slate-300 border-t border-b">
          {features.map((feature, index) => (
            <li key={index} className="py-4 font-bold">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`
          mt-12 px-4 py-2 font-semibold cursor-pointer
          ${isFeatured ? "text-white" : "text-slate-700"} 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
}
