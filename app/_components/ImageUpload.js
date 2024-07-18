import { addImages } from "../_lib/data-services";

export default function ImageUpload({ params }) {
  return (
    <div className="flex justify-between gap-4 flex-col items-center">
      <form
        action={addImages}
        className="flex gap-[6rem] justify-between items-center"
      >
        <input
          className="file:text-accent file:border-0 file:rounded-full file:font-satoshi font-satoshi file:py-2 file:px-5 mr-[-5rem] file:hover:cursor-pointer"
          type="file"
          name="image"
        />
        <input hidden defaultValue={params.id} name="id"></input>
        <button className="rounded-full py-2 px-5 bg-blue-500 text-white font-satoshi">
          Upload
        </button>
      </form>
    </div>
  );
}
