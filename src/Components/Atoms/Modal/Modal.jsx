import { AnimatePresence, motion } from "framer-motion";
import { ModalContainer } from "./Modal.style";

export default function Modal({ isOpen=false, isHeader, headerText,children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer>
          <motion.div
            key="modal"
            variants={variants}
            animate="modalVisible"
            initial="modalHidden"
            exit="modalHidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="h-[721px] w-[1430px] bg-iamwhite"
          >
            {/* Header */}
            {isHeader && (
              <div className="h-[63px] bg-iamblue font-medium text-2xl text-iamwhite text-center pt-4">
                {headerText}
              </div>
            )}
            {children}
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
}

const variants = {
  modalHidden: { opacity: 0, transition: { duration: 0.2 } },
  modalVisible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  bgHidden: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
  bgVisible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};
