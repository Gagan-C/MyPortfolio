import { useEffect, useState } from "react";
import { Card, Grid, Paper } from "@mui/material";

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
    return <div data-testid="certifications-loading">Loading...</div>;
  }

  return (
    <div data-testid="certifications-component" className="certifications">
      <div className="text-white h-screen flex items-center justify-center">
        <div className="container mx-auto">
          <Paper elevation={1} className="px-10 py-4">
            <h1 className="text-3xl font-bold mb-4">Certifications</h1>
            <Grid container spacing={3} padding={4} data-testid="projects-component">
              {certifications.map((cert) => (
                <Grid item xs={12} sm={6} md={4} key={cert.title}>
                  <Card key={cert.id} className="mb-4 p-4" variant="outlined">
                    <div className="flex items-center mb-2">
                      <img
                        src={cert.badge}
                        alt={cert.title}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }} // Fixed size
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
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
