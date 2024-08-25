// HTTP 요청을 받아서 JSON 데이터를 반환하는 등의 행위, UI를 반환하지 않음.
// page.tsx, layout.tsx와 같이 특별한 이름의 파일임.
// 반드시 route.ts라는 이름이어야 Next.js가 인식함.

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);
  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  request.cookies.get("");
  const data = await request.json();
  return Response.json(data);
}
