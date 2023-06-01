import React from "react";

export default function Loader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative mx-1 h-10 w-10 animate-loader rounded-full border-[2px] border-transparent border-t-purple-600 border-l-purple-600" />
    </div>
  );
}
