import connectToDB from "@/config/db";
import ContactModel from "@/model/Contact";

export async function POST(req) {
  try {
    // IMPORTANT: Wait for database connection
    await connectToDB();
    
    const reqbody = await req.json();
    const { name, email, message } = reqbody;
    
    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const res = await ContactModel.create({
      name,
      email,
      message,
    });
    
    return Response.json(
      { message: "Message sent successfully!", data: res },
      { status: 201 }
    );
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    
    // Return error to see what's wrong
    return Response.json(
      { message: "Failed to send message!", error: error.message },
      { status: 500 }
    );
  }
}
