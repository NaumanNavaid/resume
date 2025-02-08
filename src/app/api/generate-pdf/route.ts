import { NextResponse } from "next/server";
import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export async function GET() {
  try {
    // Launch Chromium using chrome-aws-lambda
    const browser = await puppeteer.launch({
      headless: true,
      args: chromium.args,
      executablePath: await chromium.executablePath,
      defaultViewport: chromium.defaultViewport,
    });
    const page = await browser.newPage();

    // Specify the URL of your resume page (adjust if your page is on a subpath)
    const resumeURL = "https://resume-omega-ruby.vercel.app";
    await page.goto(resumeURL, { waitUntil: "networkidle0", timeout: 30000 });

    // Generate the PDF with no margins
    const pdfBuffer = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
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
      {
        error: "Failed to generate PDF",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
