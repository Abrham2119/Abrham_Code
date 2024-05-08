
"use client"
import { useState } from "react";
import SignaturePadComponent from "@/components/SignaturePadComponent";

const Home: React.FC = () => {
  const [signatureData, setSignatureData] = useState<string | null>(null);

  const handleCancel = () => {
    setSignatureData(null);
  };

  const handleSubmit = (signature: string) => {
    setSignatureData(signature);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {signatureData ? (
        <img src={signatureData} alt="Signature" />
      ) : (
        <SignaturePadComponent onCancel={handleCancel} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Home;
