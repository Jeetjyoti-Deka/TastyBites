"use client";

import { showModal } from "@/utils/helpers";

const ModalButton = ({
  className,
  children,
  randomId,
}: {
  className: string;
  children: React.ReactNode;
  randomId: string;
}) => {
  return (
    <button className={className} onClick={() => showModal(randomId)}>
      {children}
    </button>
  );
};
export default ModalButton;
