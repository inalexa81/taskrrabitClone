import React from "react";

interface FlagProps {
    code: string;
    height: number;
  }
  
  const Flag: React.FC<FlagProps> = ({ code, height }) => {
    // Logic to determine which flag SVG to render based on the code prop
    const flagSrc = `/flags/${code}.svg`; // Assuming flags are stored in a folder named 'flags'
    
    return <img src={flagSrc} alt={code} height={height} />;
  };
  
  export default Flag;
