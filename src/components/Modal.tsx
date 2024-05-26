import {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type AfterToggleModalFn = (
  modal: HTMLDivElement | null,
  openModal: boolean
) => void;

type Props = {
  children: ReactNode;
  afterToggleModalOpening?: {
    Fn: AfterToggleModalFn;
    cleanupFn?: AfterToggleModalFn;
  };
};
export type ModalRefType = {
  toggleModal: (open: boolean) => void;
};

const Modal = memo(
  forwardRef<ModalRefType, Props>(
    ({ children, afterToggleModalOpening }, ref) => {
      const [openModal, setOpenModal] = useState(false);

      // refs
      const modalRef = useRef<HTMLDivElement>(null);
      const overlayRef = useRef<HTMLDivElement>(null);
      const closeBtnRef = useRef<HTMLButtonElement>(null);
      const modalChildrenHolderRef = useRef<HTMLDivElement>(null);

      const toggleActiveClass = (add: boolean) => {
        const modal = modalRef.current;
        const overlay = overlayRef.current;

        if (modal && overlay)
          [modal, overlay].forEach((el) => el.classList.toggle("active", add));
      };

      const toggleModal = (open: boolean) => {
        if (open) {
          setOpenModal(true);
          return;
        }

        // close modal
        document.documentElement.style.removeProperty("overflow");
        toggleActiveClass(false);
        setTimeout(() => setOpenModal(false), 300);
      };

      useImperativeHandle(ref, () => ({ toggleModal }), []);

      useEffect(() => {
        if (openModal) {
          // open modal
          setTimeout(() => {
            document.documentElement.style.overflow = "hidden";
            toggleActiveClass(true);
          });

          const childHolder = modalChildrenHolderRef.current;
          const closeBtn = closeBtnRef.current;

          if (childHolder && closeBtn) {
            const btnTopProperty = getComputedStyle(closeBtn).top || 0;
            const btnHeight = closeBtn?.offsetHeight || 0;
            const gapBetweenBtnAndHolder = "10px";

            childHolder.style.top = `calc(${btnHeight}px + ${btnTopProperty} + ${gapBetweenBtnAndHolder})`;
            childHolder.style.height = `calc(100% - (${btnHeight}px + ${btnTopProperty} + ${gapBetweenBtnAndHolder}))`;
          }
        }

        const modal = modalRef.current;
        if (afterToggleModalOpening) {
          const { Fn, cleanupFn } = afterToggleModalOpening;

          setTimeout(() => Fn(modal, openModal));
          if (cleanupFn) return cleanupFn(modal, openModal);
        }
      }, [openModal]);

      return (
        openModal &&
        createPortal(
          <>
            <div
              ref={modalRef}
              className="modal z-[1002] fixed inset-0 text-white"
              style={{
                overflowY: "auto",
              }}
            >
              <button
                ref={closeBtnRef}
                onClick={() => toggleModal(false)}
                className="absolute top-[20px] max-sm:right-[10px] right-[30px] bg-red-600 w-10 h-10 hover:bg-red-900 transition duration-[270ms] mr-3"
              >
                X
              </button>

              <div
                ref={modalChildrenHolderRef}
                className="absolute left-0 w-full"
              >
                {children}
              </div>
            </div>

            <div
              ref={overlayRef}
              className="modal-overlay z-[1001] fixed inset-0 bg-black bg-opacity-80"
            />
          </>,
          document.body
        )
      );
    }
  )
);
export default Modal;
