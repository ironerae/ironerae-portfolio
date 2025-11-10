import { auth, db } from "@/firebase/admin";
import { NextResponse } from "next/server";

interface RequestBody {
  nickname: string;
  message: string;
  token: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  if (!body.token || !body.message)
    return NextResponse.json(
      { success: false, message: "No token or message provided" },
      { status: 400 }
    );

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey!,
          response: body.token,
        }),
      }
    );

    const result = await response.json();

    if (!result.success || result.score < 0.5) {
      return NextResponse.json(
        { success: false, message: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const data = await db.collection("notes").add({
      nickname: body.nickname || "Anonymous",
      message: body.message,
      timestamp: new Date(),
    });

    return NextResponse.json(
      { success: true, data },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const headers = request.headers;
  const token = headers.get("authorization")?.split("Bearer ")[1];

  if (!token)
    return NextResponse.json(
      { success: false, message: "No token provided" },
      { status: 401 }
    );

  try {
    const decodedToken = await auth.verifyIdToken(token);

    if (decodedToken.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized access",
        },
        { status: 403 }
      );
    }

    const notes = await db
      .collection("notes")
      .orderBy("timestamp", "desc")
      .get();

    const data = notes.docs.map((doc) => {
      const noteData = doc.data();
      return {
        nickname: noteData.nickname,
        message: noteData.message,
        timestamp: noteData.timestamp.toDate().toISOString(),
      };
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
