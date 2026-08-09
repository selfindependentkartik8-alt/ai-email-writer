import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const recipient = body?.recipient?.trim();
    const purpose = body?.purpose?.trim();
    const tone = body?.tone?.trim() || "Professional";
    const details = body?.details?.trim() || "";

    if (!recipient || !purpose) {
      return NextResponse.json(
        {
          error: "Recipient and email purpose are required.",
        },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert professional email writer.

Write a polished email based on the information below.

RECIPIENT:
${recipient}

PURPOSE:
${purpose}

TONE:
${tone}

ADDITIONAL DETAILS:
${details || "No additional details provided."}

Return ONLY the email.

Use this exact structure:

SUBJECT
Write a short, professional subject line.

GREETING
Write the appropriate greeting.

BODY
Write the complete email body.

CLOSING
Write an appropriate closing and sign-off.

Rules:
- Make the email natural and human-sounding.
- Keep it clear and professional.
- Follow the requested tone.
- Do not invent facts that were not provided.
- Do not mention AI.
- Do not add explanations outside the email.
- Make the email ready to edit and send.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const email = response.text?.trim();

    if (!email) {
      throw new Error("Gemini returned an empty response.");
    }

    return NextResponse.json({
      email,
    });
  } catch (error) {
    console.error("Email generation error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong while generating the email. Please try again.",
      },
      { status: 500 }
    );
  }
}