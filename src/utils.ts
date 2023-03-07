interface ColorMap {
  [key: string]: string;
}
let bgColorMap: ColorMap = {};
bgColorMap = {
  pink: "bg-pink-100",
  yellow: "bg-yellow-100",
  emerald: "bg-emerald-100",
  lime: "bg-lime-100",
  cyan: "bg-cyan-100",
  orange: "bg-orange-100",
};
export function getTailwindBgColor(color: string) {
  return bgColorMap[color] ?? "bg-pink-100";
}

export type NFT = {
  id: string;
  name: string;
  imgSrc: string;

  href: string;

  color: string;
  items: string;
  created: string;
  earnings: string;
  chain: string;
  category: string;
  desc: string;

  vol: string;
  price: string;
  offer: string;
  listed: string;
  owners: string;
  unique: string;
};
