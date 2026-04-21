import { useEffect } from "react";

type ModalProps = {
  addressResult: any | null;
  coorResult: any | null;
  city: string;
  onClose: () => void;
};

function Modal({ addressResult, coorResult, city, onClose }: ModalProps) {
  const data = addressResult || coorResult;
  const region = city;

  // Close on ESC + lock scroll
  useEffect(() => {
    if (!data && region == "") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [region, data, onClose]);

  if (!data && region == "") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-2xl 
        transform transition-all duration-300 scale-95 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Results</h2>

        <pre className="text-sm bg-gray-100 p-3 rounded-md overflow-auto max-h-64">
          {region || JSON.stringify(data, null, 2)}
        </pre>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-picto-primary text-white rounded-md hover:opacity-90 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

// export default {
//   theme: {
//     extend: {
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         scaleIn: {
//           "0%": { opacity: 0, transform: "scale(0.9)" },
//           "100%": { opacity: 1, transform: "scale(1)" },
//         },
//       },
//       animation: {
//         fadeIn: "fadeIn 0.3s ease-out",
//         scaleIn: "scaleIn 0.3s ease-out",
//       },
//     },
//   },
// };
