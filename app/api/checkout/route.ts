import { NextRequest, NextResponse } from "next/server";

const PRODUCTS: Record<string, { name: string; price: number; image: string }> = {
  "unc-daddy":  { name: "Young Guys Call Me Unc | Their Girlfriends Call Me Daddy", price: 3499, image: "https://huncfit.com/images/shirt-unc-daddy.png" },
  "unc-season": { name: "Unc Season", price: 3499, image: "https://huncfit.com/images/shirt-unc-season.png" },
  "built-80s":  { name: "Built in the 80s", price: 3699, image: "https://huncfit.com/images/shirt-built-80s.png" },
  "built-70s":  { name: "Built in the 70s", price: 3699, image: "https://huncfit.com/images/shirt-built-70s.png" },
  "built-60s":  { name: "Built in the 60s", price: 3699, image: "https://huncfit.com/images/shirt-built-60s.png" },
  "gray-hair":  { name: "Gray Hair. Heavy Weights. Zero Apologies.", price: 3699, image: "https://huncfit.com/images/shirt-gray-hair.png" },
  "dad-bod":    { name: "I Don't Have a Dad Bod. I Have a Father Figure.", price: 3699, image: "https://huncfit.com/images/shirt-dad-bod.png" },
};

export async function POST(req: NextRequest) {
  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });

  const { productId, size } = await req.json();
  const product = PRODUCTS[productId];
  if (!product || !size) {
    return NextResponse.json({ error: "Invalid product or size" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          description: `Size: ${size} | Bella+Canvas 3001 | Ships in 3–5 days`,
          images: [product.image],
        },
        unit_amount: product.price,
      },
      quantity: 1,
    }],
    mode: "payment",
    shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "AU"] },
    metadata: { productId, size },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
  });

  return NextResponse.json({ url: session.url });
}
