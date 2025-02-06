import React from "react";
import s from "./SpinnerbLoader.module.css";
import cn from "clsx";

const SpinnerbLoader = ({ className }: any) => {
  return <span className={cn(s.Loader, {}, className && className)}></span>;
};

export default SpinnerbLoader;



// updated code
// import React from "react";
// import s from "./SpinnerbLoader.module.css";
// import cn from "clsx";

// interface SpinnerbLoaderProps {
//   className?: string;
// }

// const SpinnerbLoader: React.FC<SpinnerbLoaderProps> = ({ className }) => {
//   return <span className={cn(s.Loader, className)}></span>;
// };

// export default SpinnerbLoader;
