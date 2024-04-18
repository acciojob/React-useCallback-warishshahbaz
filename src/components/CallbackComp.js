// UseCallbackComp.js
import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addSkill = useCallback(() => {
    if (inputValue.trim() && !skills.includes(inputValue)) {
      setSkills((prevSkills) => [...prevSkills, inputValue]);
      setInputValue("");
    }
  }, [inputValue, skills]);

  return (
    <div>
      <h2 id="heading">Skills List</h2>
      <input
        type="text"
        id="skill-input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} setSkills={setSkills} />
    </div>
  );
};

export default UseCallbackComp;
