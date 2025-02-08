"use client";
import { useRef } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Resume = () => {
  const generatePDF = async () => {
    try {
      const response = await fetch("/api/generate-pdf");
      if (!response.ok) throw new Error("Failed to generate PDF");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Resume_Anusha_Shams.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex flex-col items-center  print:p-0">
      <div
        id="resume-content"
        className="w-[210mm] h-[1000px] bg-white shadow-xl print:shadow-none flex flex-col"
        style={{ minHeight: "auto" }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="bg-slate-700 text-white p-6 w-1/3 flex flex-col">
            <div className="flex flex-col items-center border-b border-white pb-4">
              <img
                src="/anusha.jpg"
                alt="Anusha Shams"
                className="w-32 h-32 rounded-full object-cover mb-3"
              />
              <h1 className="text-lg font-bold uppercase text-center">Anusha Shams</h1>
            </div>

            {/* Contact Info */}
            <div className="mt-6">
              <h3 className="text-base font-bold uppercase mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="break-all">+92336-232-0500</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">anushashams.29@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Karachi, Sindh, Pakistan</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="mt-6">
              <h3 className="text-base font-bold uppercase mb-3">Languages</h3>
              <div className="space-y-4">
                {[
                  { name: "Urdu", level: "w-1/3" },
                  { name: "English", level: "w-2/3" },
                  { name: "French", level: "w-2/4" },
                  { name: "Arabic", level: "w-4/5" },
                ].map((lang) => (
                  <div key={lang.name}>
                    <span className="block text-sm mb-1">{lang.name}</span>
                    <div className="h-1.5 bg-gray-400 rounded-full">
                      <div className={`h-1.5 bg-blue-300 rounded-full ${lang.level}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-2/3 p-6 bg-gray-50 flex flex-col">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Profile</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Energetic Entry-Level Business Administration Professional who is dedicated to creating
              efficiency at all levels of management. Adept at critical analysis, developing
              comprehensive reports for management, and working as part of a team.
            </p>

            {/* Education */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Education</h3>
              <ul className="space-y-3 text-sm">
                <li className="border-l-4 border-blue-500 pl-3">
                  <h4 className="font-bold">2021 - Present</h4>
                  <h5 className="text-blue-600 font-medium">Bachelor's in Business Administration</h5>
                  <p>Bahria University • Karachi, Sindh</p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Experience</h2>
              <div className="border-l-4 border-blue-500 pl-3 text-sm">
                <h3 className="font-bold">2015 - Present</h3>
                <h4 className="text-blue-600 font-medium">ABC Corporation</h4>
                <p>Senior Accounts Manager</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Financial Reporting",
                  "Budget Management",
                  "ERP Systems",
                  "Team Leadership",
                  "Tax Compliance",
                  "Auditing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Button */}
      <button
        onClick={generatePDF}
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition print:hidden"
      >
        Generate PDF
      </button>
    </div>
  );
}
 export default Resume