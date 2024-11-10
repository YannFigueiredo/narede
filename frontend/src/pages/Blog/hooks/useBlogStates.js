import { useState } from "react";

export const useBlogStates = () => {
  const [producers, setProducers] = useState([]);
  const [posts, setPosts] = useState([]);

  return {
    producers,
    setProducers,
    posts,
    setPosts
  };
};