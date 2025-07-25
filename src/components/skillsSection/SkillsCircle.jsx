import React from "react";

const SkillsCircle = () => {
  return (
    <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-orange-500 overflow-hidden">
      <img src="/images/skills.avif" alt="my skills" className="object-cover h-full w-full" />
    </div>
  );
};

export default SkillsCircle;
