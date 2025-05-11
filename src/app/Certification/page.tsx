'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../Components/Loading";

interface Certification {
  id: string;
  badge: string;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

function Certifications() {
  const [certifications, setCertifications] = useState<Certification[] | null>(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch("https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/certifications.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Certification[] = await response.json();
        setCertifications(data);
      } catch (error) {
        console.error("Error fetching certifications data:", error);
      }
    };

    fetchCertifications();
  }, []);

  if (!certifications) {
    return <div data-testid="certifications-loading"><Loading/></div>;
  }

  return (
    <div data-testid="certifications-component" className="certifications">
      <div className="text-white flex items-center justify-center min-h-screen">
        <div className="container bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 mx-auto">
            <h1 className="text-3xl font-bold mb-4">Certifications</h1>
              <div className="grid gap-4 md:grid-cols-3 p-5 m-5">
              {certifications.map((cert) => (
                  <div key={cert.id} className="rounded-md shadow-md p-4 flex flex-col h-auto" >
                    <div className="flex items-center mb-2">
                      <Image
                        src={cert.badge}
                        alt={cert.title}
                        width={500}
                        height={500}
                        style={{width:"100px", height:"100px", objectFit: "cover" }}
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

export default Certifications;
