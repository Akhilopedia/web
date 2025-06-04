import { Upload, Search, Users } from "lucide-react";
import FeatureCard from "./feature-card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: "Upload & Share",
      description:
        "Easily upload your notes in various formats and share them with the community",
      bgColor: "bg-blue-600",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Quickly find study materials using our powerful search engine",
      bgColor: "bg-purple-600",
    },
    {
      icon: Users,
      title: "Collaborate",
      description:
        "Connect with other students and collaborate on study materials",
      bgColor: "bg-gray-600",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose AkhiloPedia?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the features that make learning and sharing knowledge
            easier than ever
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
