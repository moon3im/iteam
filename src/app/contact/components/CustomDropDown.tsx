import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  label: string;
}

export const CustomDropdown = ({ options, value, onChange, label }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-medium text-gray-300">{label} *</label>
      <div
        className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl cursor-pointer relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className={value ? "text-white" : "text-gray-400"}>
            {value || "Sélectionnez un service"}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="w-5 h-5 text-gray-500"
          >
            <ChevronDown />
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-20 left-0 w-full mt-1 bg-blue-900/80 backdrop-blur-xl rounded-xl border border-white/20 max-h-90 overflow-x-hidden  overflow-y-scroll"
            >
              {options.map((option, idx) => (
                <motion.li
                  key={idx}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect(option)}
                  className="px-4 py-3 cursor-pointer text-white hover:bg-blue-500/30 transition-colors"
                >
                  {option}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
