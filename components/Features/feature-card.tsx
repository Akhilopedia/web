import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  bgColor = "bg-blue-600",
}: FeatureCardProps) {
  return (
    <div className="text-center p-6 hover:bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-center mb-4">
        <div
          className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
