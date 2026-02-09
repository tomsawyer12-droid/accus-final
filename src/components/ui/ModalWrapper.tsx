import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function ModalWrapper({ isOpen, onClose, children }: ModalWrapperProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] overflow-y-auto bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex h-full min-h-[100dvh] items-center justify-center p-4">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full flex justify-center"
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
