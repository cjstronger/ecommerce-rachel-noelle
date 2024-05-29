import styles from "../style.module.scss";
import Input from "./Input";
import { useModal } from "../_contexts/ModalProvider";

export function ApplyForm() {
  return (
    <div>
      <div className={styles.form}>
        <h1 className="text-6xl md:text-7xl">Subscribe</h1>
        <h1 className="text-4xl md:text-5xl">to the Noelle Letter</h1>
        <form>
          <div className="mt-8 flex flex-col gap-5">
            <Input placeholder="Your first name" label="First Name" />
            <Input placeholder="Your last name" label="Last Name" />
            <Input placeholder="Your email" label="Email" />
          </div>
        </form>
      </div>
    </div>
  );
}
