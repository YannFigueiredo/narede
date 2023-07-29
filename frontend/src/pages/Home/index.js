import React from "react";
import Input from "../../components/Input";

export default function Home() {
  return(
    <>
      <Input 
        placeholder="Procure por título, autor ou categoria"
        width={500}
      />
    </>
  );
}