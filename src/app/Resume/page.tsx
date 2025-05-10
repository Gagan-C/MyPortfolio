const Resume = ()=>{return (
    <div className="flex justify-center items-center h-screen">
        <div className="w-4/5 h-[80vh] shadow-md rounded-lg overflow-hidden">
            <iframe
                src="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/GaganChatuResume"
                width="100%"
                height="100%"
                allow="autoplay"
                title="Resume"
                className="resume-iframe"
                data-testid="resume-iframe"
            ></iframe>
        </div>
    </div>
);};

export default Resume;