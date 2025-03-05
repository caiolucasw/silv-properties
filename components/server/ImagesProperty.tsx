"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
const ImagesProperty = ({ images }: { images: string[] | undefined }) => {
  if (!images) return <></>;
  const isOddLength = images.length % 2 !== 0;
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1 cursor-pointer">
            {images.length === 1 ? (
              <Item
                original={images[0]}
                thumbnail={images[0]}
                width="1000"
                height="600"
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    onClick={open}
                    src={images[0]}
                    alt=""
                    className="object-cover h-[400px] w-full"
                  />
                )}
              </Item>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`${
                      isOddLength && index === images.length - 1
                        ? "col-span-2"
                        : "col-span-1"
                    } cursor-pointer`}
                  >
                    <Item
                      original={image}
                      thumbnail={image}
                      width="1000"
                      height="600"
                    >
                      {({ ref, open }) => (
                        <Image
                          ref={ref}
                          onClick={open}
                          src={image}
                          alt=""
                          className="object-cover h-[400px] w-full rounded-xl"
                          width={1800}
                          height={400}
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Gallery>
  );
};

export default ImagesProperty;
