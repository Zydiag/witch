import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";

import { db } from "@/lib/db";

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!,
);

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("Error occured -- no authorization headers", {
      status: 400,
    });
  }

  const event = receiver.receive(body, authorization);

  console.log("LiveKit Webhook Event:", event.event);
  console.log("Ingress Info:", event.ingressInfo);

  if (event.event === "ingress_started") {
    console.log("Updating stream to live:", event.ingressInfo?.ingressId);
    await db.stream.update({
      where: {
        ingressId: event.ingressInfo?.ingressId,
      },
      data: {
        isLive: true,
      },
    });
    console.log("Stream updated to live");
  }

  if (event.event === "ingress_ended") {
    console.log("Updating stream to offline:", event.ingressInfo?.ingressId);
    await db.stream.update({
      where: {
        ingressId: event.ingressInfo?.ingressId,
      },
      data: {
        isLive: false,
      },
    });
    console.log("Stream updated to offline");
  }

  return new Response("Success!", { status: 200 });
}
