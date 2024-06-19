export default function GridHolder({ children, cols }) {
  return <div className={`grid grid-cols-${cols} mx-5`}>{children}</div>;
}
