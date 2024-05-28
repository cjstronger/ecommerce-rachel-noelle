export default function GridHolder({ children }) {
  return (
    <div className={`lg:grid grid-cols-2 mx-5 lg:my-0 my-5`}>{children}</div>
  );
}
