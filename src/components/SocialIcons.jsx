import { FacebookLogo, TwitterLogo } from "@phosphor-icons/react";

function SocialIcons() {
  return (
    <div className="social-icon">
      <a href="#" aria-label="Facebook">
        <FacebookLogo weight="fill" />
      </a>
      <a href="#" aria-label="Twitter">
        <TwitterLogo weight="fill" />
      </a>
    </div>
  );
}

export default SocialIcons;
