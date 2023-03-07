import { getTailwindBgColor, NFT } from "../utils";

type NFTCardProps = {
  nft: NFT;
  setNFTModalContent: any;
  setShowModal: any;
  showModal: boolean;
};
export default function NFTCard({
  nft,
  setNFTModalContent,
  setShowModal,
  showModal,
}: NFTCardProps) {
  return (
    <div
      className="h-fit w-full cursor-pointer justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
      onClick={() => {
        setNFTModalContent(nft);
        setShowModal(!showModal);
      }}
    >
      <div
        className={`h-full w-full p-1 ${getTailwindBgColor(
          nft.color ?? "pink"
        )}`}
      >
        <div className="border-4 border-black">
          <div className="flex h-28 border-b-4 border-black">
            <img
              alt={nft.name}
              src={nft.imgSrc}
              className="h-full border-r-4 border-black"
            />
            <div className="flex h-full w-full items-center justify-center truncate p-4 text-center text-2xl font-bold">
              <span className="truncate">{nft.name}</span>
            </div>
          </div>
          <div className="flex w-full flex-col divide-y-2 divide-dotted divide-black p-1 text-center">
            <p>
              Items: <span className="font-semibold">{nft.items}</span>
            </p>
            <p>
              Created: <span className="font-semibold">{nft.created}</span>
            </p>
            <p>
              Earnings: <span className="font-semibold">{nft.earnings}</span>
            </p>
            <p>
              Chain: <span className="font-semibold">{nft.chain}</span>
            </p>
            <p>
              Category: <span className="font-semibold">{nft.category}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
