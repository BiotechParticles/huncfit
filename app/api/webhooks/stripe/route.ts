import { NextRequest, NextResponse } from "next/server";

const PRINTFUL_VARIANTS: Record<string, Record<string, number>> = {
  "unc-daddy":  { S: 5228967182, M: 5228967183, L: 5228967184, XL: 5228967185, "2XL": 5228967186 },
  "unc-season": { S: 5228967213, M: 5228967214, L: 5228967215, XL: 5228967216, "2XL": 5228967217 },
  "built-80s":  { S: 5228967220, M: 5228967221, L: 5228967222, XL: 5228967223, "2XL": 5228967224 },
  "built-70s":  { S: 5228967252, M: 5228967253, L: 5228967254, XL: 5228967255, "2XL": 5228967256 },
  "built-60s":  { S: 5228967303, M: 5228967304, L: 5228967305, XL: 5228967306, "2XL": 5228967307 },
  "gray-hair":  { S: 5228967314, M: 5228967315, L: 5228967316, XL: 5228967317, "2XL": 5228967318 },
  "dad-bod":    { S: 5228967319, M: 5228967320, L: 5228967321, XL: 5228967322, "2XL": 5228967323 },
};

export async function POST(req: NextRequest) {
  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let event: any;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { productId, size } = session.metadata ?? {};
    const shipping = session.shipping_details ?? session.shipping;
    const email = session.customer_details?.email;
    const variantId = productId && size ? PRINTFUL_VARIANTS[productId]?.[size] : null;

    if (variantId && shipping?.address) {
      const order = {
        recipient: {
          name: shipping.name,
          email,
          address1: shipping.address.line1,
          address2: shipping.address.line2 || "",
          city: shipping.address.city,
          state_code: shipping.address.state,
          country_code: shipping.address.country,
          zip: shipping.address.postal_code,
        },
        items: [{ sync_variant_id: variantId, quantity: 1 }],
      };

      const res = await fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.PRINTFUL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      console.log("Printful order:", data?.result?.id ?? JSON.stringify(data));
    }
  }

  return NextResponse.json({ received: true });
}
