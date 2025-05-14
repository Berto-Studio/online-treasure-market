
import { cn } from "@/lib/utils";

interface ColorOption {
  color: string;
  bgClass: string;
  selected?: boolean;
}

interface ColorSelectorProps {
  title?: string;
  colors: ColorOption[];
  onSelectColor?: (color: string) => void;
}

const ColorSelector = ({ title, colors, onSelectColor }: ColorSelectorProps) => {
  return (
    <div className="space-y-2">
      {title && <h3 className="font-medium text-sm mb-2">{title}</h3>}
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <button
            key={index}
            className={cn(
              "w-7 h-7 rounded-full transition-all border border-gray-200",
              color.bgClass,
              color.selected && "ring-2 ring-offset-2 ring-primary"
            )}
            onClick={() => onSelectColor && onSelectColor(color.color)}
            aria-label={`Select ${color.color} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
