import Header from "../_components/Header";

export default function ApplyLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
