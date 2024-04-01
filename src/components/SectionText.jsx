import Button from "./Button";

function SectionText({ type, title, btn, children }) {
  let heading;

  if (type === "h1") heading = <h1>{title}</h1>;
  if (type === "h2") heading = <h2 className="sub-heading">{title}</h2>;
  if (type === "h3") heading = <h3 className="sub-heading">{title}</h3>;

  return (
    <div className="text-section">
      {heading}
      <p className="paragraph">{children}</p>

      {btn && <Button>{btn}</Button>}
    </div>
  );
}

export default SectionText;
