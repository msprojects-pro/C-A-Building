/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}
