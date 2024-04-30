import React from "react";

const InnerWrapper = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="relative w-[calc(100%-40px)] max-w-[1266px] mx-auto">
      {children}
    </div>
  );
};

export default InnerWrapper;
