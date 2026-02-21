import Ticket, { dbConnect } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("Connecting to database...");
    await dbConnect();
    console.log("Connected. Parsing request body...");
    const body = await req.json();
    console.log("Body received:", body);
    const ticketData = body.formData;
    console.log("Creating ticket with data:", ticketData);
    await Ticket.create(ticketData);
    console.log("Ticket created successfully");

    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating ticket:", error);
    return NextResponse.json(
      { message: "Error", error: error.message, stack: error.stack },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
