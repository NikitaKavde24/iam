import { AnimatePresence, motion } from "framer-motion";
import { SideModalContainer } from "./SideModal.style";
import { BiArrowBack } from "react-icons/bi";

export default function SideModal({
  isOpen = true,
  isHeader = true,
  headerText,
  children,
  onBack = () => {},
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <SideModalContainer>
          <motion.div
            key="modal"
            variants={variants}
            animate="modalVisible"
            initial="modalHidden"
            exit="modalHidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="h-screen w-[647px] bg-iamwhite"
          >
            {/* Header */}
            {isHeader && (
              <div className="mt-7" onClick={onBack}>
                <BiArrowBack className="w-6 h-6 ml-7" />
              </div>
            )}
            <div>{children}</div>
          </motion.div>
        </SideModalContainer>
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
