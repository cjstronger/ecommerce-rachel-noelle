import { formData } from "../_lib/constants";
import { motion } from "framer-motion";

export default function ApplyFormHeaders({ index }) {
  return (
    <motion.div>
      <h1 className="text-3xl">{formData[index].title}</h1>
    </motion.div>
  );
}
