import { useState } from "react";
import Lightbox from "@/components/Lightbox";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "Precision 3D printed mechanical gear component",
    title: "Mechanical Gear",
    description: "Precision engineering component"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "3D printed architectural scale model of modern building",
    title: "Architectural Model",
    description: "Scale building prototype"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "3D printed complex organic sculptural form",
    title: "Artistic Sculpture",
    description: "Complex geometric design"
  },
  {
    id: 4,
    src: "https://pixabay.com/get/g66c32ca594999a8c2d44dd5e846c323bda24307de849abf033033cf03ecc4db5751c346e8180d3bfb6c4ebe0c8d9883a4651e808fb5807e1afe29317a9e79857_1280.jpg",
    alt: "3D printed medical device prototype",
    title: "Medical Device",
    description: "Healthcare prototype"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "3D printed automotive component part",
    title: "Automotive Part",
    description: "Performance component"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "3D printed consumer product prototype",
    title: "Consumer Product",
    description: "Product development"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    alt: "3D printed jewelry piece with intricate details",
    title: "Jewelry Design",
    description: "Intricate details"
  },
  {
    id: 8,
    src: "https://pixabay.com/get/ge562e3603d98712951b18862e4f7df8eec05bcf2ca3a17c29ce968f1c4076cc29ea88fc2f2e2c8724fd3f1dd297ddd694945bd4388375e763f194d1487434994_1280.jpg",
    alt: "3D printed electronic device enclosure",
    title: "Electronic Enclosure",
    description: "Custom housing"
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of precision 3D printed projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
        onClose={closeLightbox}
      />
    </div>
  );
}
