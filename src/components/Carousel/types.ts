export interface CarouselItemProps {
  image: string;
  description: string;
}

export interface CustomCarouselProps {
  items: CarouselItemProps[];
}

export interface ImageDimensions {
  width: number;
  height: number;
}