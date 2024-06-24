import Image from "next/image";
import LocoParalax from "../_components/LocoParalax";
import LocoParalaxItem from "../_components/LocoParalaxItem";
import Benefit from "../_components/Benefit";

export default function Page() {
  return (
    <>
      <div className="aspect-[4/3] md:aspect-[2/1] xl:aspect-[3/1] relative flex justify-end p-5">
        <Image
          src="/images/treepainting.jpg"
          fill
          alt="treepainting"
          className="object-cover"
        />
        <LocoParalax textPosition="right">
          <LocoParalaxItem text="xl">Sample</LocoParalaxItem>
          <LocoParalaxItem text="xl">More Sample</LocoParalaxItem>
        </LocoParalax>
      </div>
      <div>
        <h1 className="text-center text-xl lg:text-2xl">Benefits</h1>
        <p className="text-center text-xs lg:text-md">
          Benefits examples and things
        </p>
        <div className="flex justify-center">
          <Benefit src="creditcard.png" alt="credit">
            Low Cost
          </Benefit>
          <Benefit src="hand.png" alt="hand">
            Easy Access
          </Benefit>
          <Benefit src="brain.png" alt="brain">
            Best Knowledge
          </Benefit>
          <Benefit src="sun.png" alt="sun">
            Spiritually Based
          </Benefit>
        </div>
      </div>
    </>
  );
}
