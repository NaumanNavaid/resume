import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  try {
    // Launch Puppeteer with additional arguments
    const browser = await puppeteer.launch({
      headless: true, // Using the modern headless mode
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Specify the URL of your resume page (production URL)
    const resumeURL = "https://resume-omega-ruby.vercel.app";
    
    // Wait until the network is idle; increase timeout if needed
    await page.goto(resumeURL, { waitUntil: "networkidle0", timeout: 30000 });

    // Generate PDF without any margins
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
      },
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Resume_Anusha_Shams.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
