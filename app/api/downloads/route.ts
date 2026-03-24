import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const DOWNLOADS_KEY = "book:downloads";
const INITIAL_COUNT = 2170;

export async function GET() {
  try {
    const count = await redis.get<number>(DOWNLOADS_KEY);
    return NextResponse.json({ count: count ?? INITIAL_COUNT });
  } catch {
    return NextResponse.json({ count: INITIAL_COUNT });
  }
}

export async function POST() {
  try {
    const exists = await redis.exists(DOWNLOADS_KEY);
    if (!exists) {
      await redis.set(DOWNLOADS_KEY, INITIAL_COUNT);
    }
    const count = await redis.incr(DOWNLOADS_KEY);
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json(
      { error: "Failed to update counter" },
      { status: 500 }
    );
  }
}

