
import { NextResponse } from "next/server";


export async function GET(req) {

  return NextResponse.json([{king:'1'}]);
}

export const revalidate = 0;
