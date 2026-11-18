"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/computers.png",
    alt: "High-performance gaming PCs at Samtech Media Solutions",
    label: "Gaming floor",
  },
  {
    src: "/storefront.png",
    alt: "Samtech Media Solutions storefront",
    label: "Storefront",
  },
  {
    src: "/3.png",
    alt: "Inside Samtech Media Solutions",
    label: "Inside the space",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button
            className="gallery-item"
            type="button"
            key={photo.src}
            onClick={() => setSelected(index)}
            aria-label={`View ${photo.label} in full screen`}
          >
            <Image
              className="gallery-image"
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 40vw"
            />
            <span className="gallery-caption">
              <span>0{index + 1} / Gallery</span>
              {photo.label}
            </span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelected(null)}
        >
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="lightbox-close"
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close photo viewer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
              </svg>
            </button>
            <Image
              className="lightbox-image"
              src={photos[selected].src}
              alt={photos[selected].alt}
              width={1680}
              height={944}
            />
            <p className="lightbox-caption">{photos[selected].label}</p>
          </div>
        </div>
      )}
    </>
  );
}
