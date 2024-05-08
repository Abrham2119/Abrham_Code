import { useEffect, useRef } from "react";
import SignaturePad from "signature_pad";

interface SignaturePadProps {
  onCancel: () => void;
  onSubmit: (signatureData: string) => void;
}

const SignaturePadComponent: React.FC<SignaturePadProps> = ({
  onCancel,
  onSubmit,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      signaturePadRef.current = new SignaturePad(canvasRef.current, {
        minWidth: 1,
        maxWidth: 3,
        penColor: "black",
      });
    }
  }, []);

  const handleCancel = () => {
    onCancel();
  };

  const handleSubmit = () => {
    if (signaturePadRef.current) {
      onSubmit(signaturePadRef.current.toDataURL());
    }
  };

  const handleClear = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border bg-slate-50 border-gray-200"></canvas>
      <div className="mt-4">
        <button
          onClick={handleClear}
          className="px-4 py-2 mr-4 bg-gray-400 text-white rounded-md"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignaturePadComponent;
