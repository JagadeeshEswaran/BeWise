import React from "react";
import { IoClose } from "react-icons/io5";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Visit Profile
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Get Contact Details
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="text-danger fw-semibold"
      >
        Unfollow
      </a>
    ),
    key: "3",
  },
];

const HoverDropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <IoClose />
      </Space>
    </a>
  </Dropdown>
);
export default HoverDropDown;
