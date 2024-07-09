// react
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

// components
import Modal, { type ModalRefType } from "../../components/Modal";
import CertificatesSlider from "./CertificatesSlider";

type Props = {
  imgsList: string[];
};

export type CertificatesHolderRefType = {
  handleOpenModalClick: (i: number) => void;
};

const CertificatesSliderHolder = forwardRef<CertificatesHolderRefType, Props>(
  ({ imgsList }, ref) => {
    // states
    const [showSwiper, setShowSwiper] = useState(false);
    const [activeImgIndex, setActiveIndexImg] = useState<number>(0);

    // refs
    const modalRef = useRef<ModalRefType>(null);

    const handleOpenModalClick = (i: number) => {
      modalRef.current?.toggleModal(true);
      setActiveIndexImg(i);
    };

    useImperativeHandle(
      ref,
      () => ({
        handleOpenModalClick,
      }),
      []
    );

    return (
      <Modal
        ref={modalRef}
        afterToggleModalOpening={{
          Fn: (_, openModal) => setShowSwiper(openModal),
        }}
      >
        <CertificatesSlider
          showSwiper={showSwiper}
          imgsList={imgsList}
          afterOpenSlider={{
            Fn: (swiper) => swiper.slideTo(activeImgIndex),
          }}
        />
      </Modal>
    );
  }
);
export default CertificatesSliderHolder;
