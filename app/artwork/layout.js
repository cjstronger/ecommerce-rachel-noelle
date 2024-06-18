import Header from "../_components/Header";

export default function ArtworkLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
