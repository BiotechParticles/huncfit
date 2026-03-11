import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "unc-daddy",
    name: "Young Guys Call Me Unc",
    sub: "Their Girlfriends Call Me Daddy",
    price: 34.99,
    image: "/images/shirt-unc-daddy.png",
    tag: "Fan Favorite",
    tagColor: "#ff6b2b",
    printfulId: 423331611,
  },
  {
    id: "unc-season",
    name: "Unc Season",
    sub: "You already know.",
    price: 34.99,
    image: "/images/shirt-unc-season.png",
    tag: null,
    tagColor: "#00d4c8",
    printfulId: 423331614,
  },
  {
    id: "built-80s",
    name: "Built in the 80s",
    sub: "Still Under Construction.",
    price: 36.99,
    image: "/images/shirt-built-80s.png",
    tag: "Logo on Front",
    tagColor: "#00d4c8",
    printfulId: 423331616,
  },
  {
    id: "built-70s",
    name: "Built in the 70s",
    sub: "Still Under Construction.",
    price: 36.99,
    image: "/images/shirt-built-70s.png",
    tag: "Logo on Front",
    tagColor: "#00d4c8",
    printfulId: 423331619,
  },
  {
    id: "built-60s",
    name: "Built in the 60s",
    sub: "Still Under Construction.",
    price: 36.99,
    image: "/images/shirt-built-60s.png",
    tag: "Logo on Front",
    tagColor: "#00d4c8",
    printfulId: 423331622,
  },
  {
    id: "gray-hair",
    name: "Gray Hair. Heavy Weights.",
    sub: "Zero Apologies.",
    price: 36.99,
    image: "/images/shirt-gray-hair.png",
    tag: "Logo on Front",
    tagColor: "#00d4c8",
    printfulId: 423331624,
  },
  {
    id: "dad-bod",
    name: "I Don't Have a Dad Bod.",
    sub: "I Have a Father Figure.",
    price: 36.99,
    image: "/images/shirt-dad-bod.png",
    tag: "Logo on Front",
    tagColor: "#00d4c8",
    printfulId: 423331625,
  },
];

export default function Shop() {
  return (
    <main style={{ backgroundColor: "#1a1a1a", color: "#f5f5f5" }}>
      <Nav />

      <section className="pb-20 px-4" style={{ paddingTop: "120px" }}>
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.4em] mb-4" style={{ color: "#ff6b2b" }}>
              HuncFit Merch
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-4" style={{ letterSpacing: "-0.02em" }}>
              Wear the <span style={{ color: "#ff6b2b" }}>Brand.</span>
            </h1>
            <p style={{ color: "#999" }} className="text-lg">
              Shirts for guys who've put in the work. Bella+Canvas tees. Ships to your door.
            </p>
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id} className="flex flex-col" style={{ backgroundColor: "#242424" }}>
                {/* Image */}
                <div className="relative overflow-hidden" style={{ backgroundColor: "#f5f5f5" }}>
                  {p.tag && (
                    <div className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-black uppercase tracking-wider"
                      style={{ backgroundColor: p.tagColor, color: "#1a1a1a" }}>
                      {p.tag}
                    </div>
                  )}
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={600}
                    height={720}
                    className="w-full object-cover"
                    style={{ maxHeight: "320px", objectPosition: "top" }}
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-black uppercase text-lg leading-tight mb-1">{p.name}</h2>
                  <p className="text-sm mb-3" style={{ color: "#999" }}>{p.sub}</p>
                  <p className="text-2xl font-black mb-4" style={{ color: "#ff6b2b" }}>
                    ${p.price.toFixed(2)}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={`https://huncfit.printful.me/products/${p.printfulId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 font-black uppercase tracking-widest text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: "#ff6b2b", color: "#1a1a1a" }}>
                      Buy Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shipping note */}
          <p className="text-center mt-12 text-sm" style={{ color: "#555" }}>
            All shirts are print-on-demand. Ships within 3–5 business days. Unisex Bella+Canvas 3001. Sizes S–2XL.
          </p>
        </div>
      </section>
    </main>
  );
}
