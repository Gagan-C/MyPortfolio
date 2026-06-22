import Image from "next/image";
import { getCertifications } from "@/lib/content";

// Server Component: fetches certifications on the server and renders them
// directly into the HTML (no client-side fetch, no loading spinner).
export default async function Certifications() {
  const certifications = await getCertifications();

  return (
    <div data-testid="certifications-component" className="certifications">
      <div className="text-black dark:text-white flex items-center justify-center min-h-screen">
        <div className="container bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 mx-auto">
          <h1 className="text-3xl font-bold mb-4">Certifications</h1>
          <div className="grid gap-4 md:grid-cols-3 p-5 m-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-blue-100 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md shadow-md p-4 flex flex-col h-auto"
              >
                <div className="flex items-center mb-2">
                  <Image
                    src={cert.badge}
                    alt={`Certification badge for ${cert.title}`}
                    width={500}
                    height={500}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                  <h2 className="text-xl font-semibold ml-4">{cert.title}</h2>
                </div>
                <div>
                  <p className="text-sm">Issued by: {cert.issuer}</p>
                  <p className="text-sm">Date: {cert.date}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Certification
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}