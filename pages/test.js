import React from "react";

export default function DaftarBtn() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-[17px] font-medium text-white py-[12px] px-[64px] rounded-[5px] bg-[#6200EE] daftar-btn hidden lg:block"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Daftar
      </button>
    </>
  );
}
