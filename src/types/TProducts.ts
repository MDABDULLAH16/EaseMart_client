export interface TProduct {
  image: string | undefined;

  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  images: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  _id: string;
  _v: number;
}
// {
//   isDeleted: false,
//   _id: '6795dd28252bcd6bb10d172f',
//   name: 'update name',
//   description: 'High-quality treadmill for fitness enthusiasts',
//   price: 1200,
//   stockQuantity: 2,
//   images: 'https://example.com/treadmill.jpg',
//   createdAt: '2025-01-26T06:58:48.165Z',
//   updatedAt: '2025-01-26T07:57:26.244Z',
//   __v: 0
// },
