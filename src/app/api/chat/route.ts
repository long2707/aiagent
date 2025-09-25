import { NextResponse } from "next/server";
import axios from "axios";
import axiosClient from "@/lib/axiosClient";

export async function POST(req: Request) {
  const { input, sessionId } = await req.json();

  console.log(input)
  try {
    const res = await axiosClient.post(
      "/0d5ed2a1-3c54-461d-87a8-1ddff5d7ddc1/chat",
      {
        sessionId: sessionId || "default-session", // bạn có thể tạo 1 sessionId random nếu chưa có
        action: "sendMessage",
        chatInput: input,
      }
    );



    return NextResponse.json({
      reply: res.data?.output || "Xin lỗi, tôi chưa hiểu.",
    });
  } catch (error: any) {
    console.error("Chatbot error:", error.response?.data || error.message);
    return NextResponse.json(
      { reply: "Lỗi kết nối đến chatbot." },
      { status: 500 }
    );
  }
}
