import React from "react";
import { FaRegPaperPlane, FaCommentDots } from "react-icons/fa";

const StickyMsgBtn = () => {
  return (
    <div>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }} className="hidden lg:block">
        <a href="https://wa.me/8801776097768?text=Hello%20there!">
          <button className="btn btn-success w-48 h-14 normal-case text-white" style={{ borderRadius: "3rem" }}>
            <FaRegPaperPlane className="mr-3 text-2xl" /> Let's Chat!
          </button>
        </a>
      </div>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }} className="lg:hidden">
        <a href="https://wa.me/8801776097768?text=Hello%20there!">
          <button className="btn btn-success w-24 h-24 normal-case text-white" style={{ borderRadius: "50%" }}>
            <FaCommentDots className="text-3xl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default StickyMsgBtn;
