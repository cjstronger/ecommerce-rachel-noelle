import Original from "./Original";

export default function Originals({ products, images }) {
  let originals = products.filter((product) => {
    return (
      product.product.unit_label === null && !product.product.metadata.sold
    );
  });
  let soldOriginals = products.filter((product) => {
    return product.product.metadata.sold === "true";
  });
  let modifiedOriginals = originals.concat(soldOriginals);
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {modifiedOriginals.map((original, i, a) => {
        return <Original original={original} key={i} imageUrls={images} />;
      })}
    </div>
  );
}
