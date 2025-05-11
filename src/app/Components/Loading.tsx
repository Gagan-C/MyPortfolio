import { Typography } from "@mui/material";

const Loading = () => {
    return (
        <div className="text-white h-screen flex items-center justify-center">
        <div className="banner-text text-5xl items-center justify-center container mx-auto">  
          <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <Typography variant="h4" component="h1" className="text-center">
            Loading ...
            </Typography>
          </div>
        </div>
      </div>);
 }
export default Loading;
