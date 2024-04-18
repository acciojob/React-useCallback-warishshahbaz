// SkillList.js
import React, { useCallback } from "react";

const SkillList = ({ skills, setSkills }) => {
  const deleteSkill = useCallback(
    (skillIndex) => {
      setSkills((prevSkills) =>
        prevSkills.filter((_, index) => index !== skillIndex)
      );
    },
    [setSkills]
  );

  return (
    <ul>
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-${index}`}
          onClick={() => deleteSkill(index)}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
