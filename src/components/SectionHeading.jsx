export default function SectionHeading({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: '34px' }}>
      <div className="num">{num}</div>
      <h2>{title}</h2>
      {subtitle ? <p className="sub">{subtitle}</p> : null}
    </div>
  );
}
