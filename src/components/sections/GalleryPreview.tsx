"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { InstagramIcon } from "@/components/layout/SocialIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { galleryImages } from "@/data/gallery";
import { siteConfig } from "@/data/site-config";
import type { GalleryImage } from "@/types";

const PREVIEW_COUNT = 18;

type TileInput = { kind: "image"; image: GalleryImage } | { kind: "instagram" };
type Tile = TileInput & { order: number };

// Tracks the responsive column count in JS (rather than CSS `columns-*`) so
// we can compute a real, balanced masonry layout below.
function useColumnCount() {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

export function GalleryPreview() {
  const preview = galleryImages.filter((img) => img.category === "guests").slice(0, PREVIEW_COUNT);
  const columnCount = useColumnCount();

  const columns = useMemo(() => {
    const cols: Tile[][] = Array.from({ length: columnCount }, () => []);
    const heights = Array(columnCount).fill(0);

    const pushTile = (tile: TileInput, ratio: number, columnIndex?: number) => {
      const target = columnIndex ?? heights.indexOf(Math.min(...heights));
      const order = cols[target].length;
      cols[target].push({ ...tile, order });
      heights[target] += ratio;
    };

    preview.forEach((image) => pushTile({ kind: "image", image }, image.height / image.width));

    // Placed explicitly in the middle column, after that column's images,
    // so it always lands in the last row instead of wherever the shortest
    // column happens to be.
    const middleColumn = Math.floor((columnCount - 1) / 2);
    pushTile({ kind: "instagram" }, 5 / 4, middleColumn);

    return cols;
  }, [preview, columnCount]);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse of what's waiting for you"
          description="Beaches, wildlife, ancient cities and the guests who've explored them with us."
        />

        <div className="mt-10 flex gap-3 sm:gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-1 flex-col gap-3 sm:gap-4">
              {column.map((tile) => (
                <Reveal key={tile.kind === "image" ? tile.image.id : "instagram-cta"} delay={tile.order * 90}>
                  {tile.kind === "image" ? (
                    <div
                      className="group relative w-full overflow-hidden rounded-2xl"
                      style={{ aspectRatio: `${tile.image.width} / ${tile.image.height}` }}
                    >
                      <Image
                        src={tile.image.src}
                        alt={tile.image.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] p-6 text-center text-white transition-transform duration-300 ease-out hover:scale-[1.02]"
                      style={{ aspectRatio: "4 / 5" }}
                    >
                      <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <InstagramIcon className="size-6" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium leading-snug">
                        Visit us on
                        <br />
                        Instagram
                      </span>
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/gallery" variant="outline" size="md">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}
