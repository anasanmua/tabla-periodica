import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const DEFAULTS: Record<string, number> = {
  "book:downloads": 2171,
  "comic-es:downloads": 8427,
  "comic-en:downloads": 576,
};

function getKey(request: NextRequest): string {
  return request.nextUrl.searchParams.get("key") ?? "book:downloads";
}

export async function GET(request: NextRequest) {
  try {
    const key = getKey(request);
    const count = await redis.get<number>(key);
    return NextResponse.json({ count: count ?? DEFAULTS[key] ?? 0 });
  } catch {
    const key = getKey(request);
    return NextResponse.json({ count: DEFAULTS[key] ?? 0 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const key = getKey(request);
    const exists = await redis.exists(key);
    if (!exists) {
      await redis.set(key, DEFAULTS[key] ?? 0);
    }
    const count = await redis.incr(key);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json(
      { error: "Failed to update counter" },
      { status: 500 }
    );
  }
}

