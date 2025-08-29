"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrev,
  CarouselPagination,
  CarouselLabelHeader,
  type CarouselProps,
} from "./carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog";

import { Spinner } from "./spinner";
import { Empty } from "./empty";

import { XIcon } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Image = {
  id: string | number;
  src: string;
  alt: string;
};
interface ImageGalleryType extends Omit<CarouselProps, "children"> {
  isLoading?: boolean;
  items?: Image[];
  hasHeader?: boolean;
}

function ImageGallery({
  items,
  isLoading,
  hasHeader,
  ...props
}: ImageGalleryType) {
  if (isLoading) {
    return (
      <SkeletonUI className={props.className}>
        <Spinner />
      </SkeletonUI>
    );
  }

  if (items?.length === 0 || !items) {
    return (
      <SkeletonUI className={props.className}>
        <Empty icon="warning" description="이미지가 없습니다." size="md" />
      </SkeletonUI>
    );
  }

  return (
    <Carousel
      hasHeader
      flickingOptions={{
        preventDefaultOnDrag: items.length > 1 ? true : false,
      }}
      {...props}
    >
      {hasHeader && <CarouselLabelHeader />}
      <CarouselContent className={`${items && items?.length > 1 && "h-full"}`}>
        {items?.map(({ id, src, alt }) => {
          return (
            <CarouselItem key={id} title={alt}>
              <DialogGallery
                src={src}
                alt={alt}
                id={id}
                items={items}
                hasHeader={hasHeader}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {items && items?.length > 1 && (
        <Fragment>
          <CarouselNext />
          <CarouselPrev />
          <CarouselPagination />
        </Fragment>
      )}
    </Carousel>
  );
}

function DialogGallery({
  id,
  src,
  alt,
  items,
  isLoading,
  hasHeader,
}: Image & ImageGalleryType) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full cursor-pointer object-contain"
        />
      </DialogTrigger>
      <DialogContent
        className="flex h-full max-h-full w-full items-center justify-center border-none bg-transparent shadow-none sm:max-w-full"
        showCloseButton={false}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <DialogDescription className="sr-only">{alt}</DialogDescription>
            <div className="h-full max-h-[808px] w-full max-w-[1568px]">
              <Carousel
                className="h-full w-full px-32"
                hasHeader={hasHeader}
                flickingOptions={{
                  defaultIndex: items?.findIndex((item) => item.id === id),
                  preventDefaultOnDrag:
                    items && items.length > 1 ? true : false,
                }}
                isEnableKeyboard
              >
                {hasHeader && (
                  <CarouselLabelHeader
                    type="label"
                    labelItems={items?.map(({ alt }) => {
                      return { title: alt };
                    })}
                  />
                )}
                <CarouselContent
                  className={`m-auto max-w-320 ${
                    items && items?.length > 1 && "h-full"
                  }`}
                >
                  {items?.map(({ id, src, alt }) => {
                    return (
                      <CarouselItem key={id}>
                        <img
                          src={src}
                          alt={alt}
                          className="m-auto block h-full object-contain"
                          loading="lazy"
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                {items && items?.length > 1 && (
                  <Fragment>
                    <CarouselNext className="size-16 border-none text-white hover:text-white [&_svg]:size-12" />
                    <CarouselPrev className="size-16 border-none text-white hover:text-white [&_svg]:size-12" />
                    <CarouselPagination color="white" />
                  </Fragment>
                )}
              </Carousel>
              <DialogClose className="fixed top-11 right-8 flex h-10 w-10 cursor-pointer items-center justify-center text-white">
                <XIcon className="size-6" />
              </DialogClose>
            </div>
          </Fragment>
        )}
      </DialogContent>
    </Dialog>
  );
}

function SkeletonUI({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex h-102 w-[496px] items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { ImageGallery };
