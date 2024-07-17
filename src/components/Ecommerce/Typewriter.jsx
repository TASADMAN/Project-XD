import React, { useEffect, useState } from 'react';



const Typewriter = () => {
  const words = ["Welcome to my store! ",];
  const [currentWord, setCurrentWord] = useState('');
  const [j, setJ] = useState(0);

  useEffect(() => {
    const type = () => {
      let updatedWord = words[0];
      setCurrentWord(updatedWord.substring(0, j + 1));
      setJ(j + 1);
      if (j + 1 === updatedWord.length) {
        setJ(0); // Reset to loop again
      }
    };

    const timeout = setTimeout(type, 150);
    return () => clearTimeout(timeout);
  }, [j, words]);

  return (
    <div className=" mt-0 p-0 w-full h-full flex justify-center items-center mb-4">
      <h1 id="typewriter" className="text-4xl font-bold">{currentWord}</h1>
    </div>
  );
};

export default Typewriter;



