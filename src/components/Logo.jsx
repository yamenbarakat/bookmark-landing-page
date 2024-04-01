import { BookmarkSimple } from "@phosphor-icons/react";

function Logo({ logoRef }) {
  return (
    <div className="logo" ref={logoRef}>
      <span className="logo-brand">
        <BookmarkSimple weight="fill" />
      </span>
      <div className="logo-text">bookmark</div>
    </div>
  );
}

export default Logo;
