import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    strategy: body.strategy,
    roi: "32%",
    winRate: "68%",
    trades: 241
  });
}
