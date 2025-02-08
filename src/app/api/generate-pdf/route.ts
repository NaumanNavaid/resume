import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  try {
    // Launch Puppeteer with necessary arguments
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage", // Helps with shared memory issues
      ],
    });
    const page = await browser.newPage();

    // Specify your deployed resume URL. Update the path if needed.
    const resumeURL = "https://resume-omega-ruby.vercel.app";
    console.log(`Navigating to: ${resumeURL}`);
    
    // Navigate to the resume page with a timeout (30 seconds)
    await page.goto(resumeURL, { waitUntil: "networkidle0", timeout: 30000 });
    
    // Generate PDF with no margins
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    });

    await browser.close();

    // Return the PDF buffer as a downloadable file
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Resume_Anusha_Shams.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      {
        error: "Failed to generate PDF",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
