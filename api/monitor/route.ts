import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    activeStrategies: 15,
    running: true,
    pnl: "+$4,921"
  });
}
