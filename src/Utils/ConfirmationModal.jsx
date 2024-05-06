import React, { useState } from "react";
import { Button, Modal } from "antd";

const ConfirmationModal = ({
  isModalOpen,
  setIsModalOpen,
  handleSidebarIconClick,
}) => {
  const handleOk = (e) => {
    setIsModalOpen(false);
    handleSidebarIconClick(e, "/login");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are your sure, do you want to Logout ?</p>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
