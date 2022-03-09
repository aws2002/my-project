import { motion } from "framer-motion";
export default function Card({ data, cardIndex }) {
  return (
    <div className="card">
      {data[cardIndex].map((item, i) => (
        <motion.div
          key={i}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          layout
        >
          {item.component}
        </motion.div>
      ))}
    </div>
  );
}
