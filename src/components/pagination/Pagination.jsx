import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

export default function Pagination({ active, setActive, totalPages }) {
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 text-black"
        onClick={prev}
        disabled={active === 1}
      >
        <RiArrowLeftLine /> Trước
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <IconButton key={i + 1} {...getItemProps(i + 1)}>
            {i + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-black"
        onClick={next}
        disabled={active === totalPages}
      >
        Tiếp <RiArrowRightLine />
      </Button>
    </div>
  );
}
