import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useRef, useState, type ReactNode } from "react";

type AutoHeightCollapseProps = {
  isOpen: boolean;
  children: ReactNode;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AutoHeightCollapse: React.FC<AutoHeightCollapseProps> = ({
  isOpen,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState<number>(0);

  // Measure content height whenever it might change
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const measure = () => setMaxH(el.scrollHeight);
    measure();

    // Re-measure on resize/content changes
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [children]);

  return (
    <div
      className="overflow-hidden transition-[max-height] duration-300"
      style={{ maxHeight: isOpen ? maxH : 0 }}
      aria-hidden={!isOpen}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};
