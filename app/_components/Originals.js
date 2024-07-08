import Original from "./Original";

export default function Originals({ products }) {
  const originals = products.filter((product) => {
    return product.product.unit_label === null;
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
      {originals.map((original, i) => {
        return <Original original={original} key={i} />;
      })}
    </div>
  );
}