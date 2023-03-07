import { getTailwindBgColor, NFT } from "../utils";
import { Modal } from "./Modal";

type NFTModalProps = {
  nft: NFT | null;
  setShowModal: any;
};
export default function NFTModal({ nft, setShowModal }: NFTModalProps) {
  return (
    <Modal>
      <div className={`${getTailwindBgColor(nft?.color ?? "pink")} p-1`}>
        <div className="border-4 border-black">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <img
                  alt={nft?.name}
                  src={nft?.imgSrc}
                  className="h-full border-2 border-black"
                />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-2xl font-semibold leading-6 text-gray-900"
                  id="modal-title"
                >
                  {nft?.name}
                </h3>
                <div className="mt-2">
                  <p className="text-justify text-sm font-medium text-black">
                    {nft?.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 border-2 border-dashed border-black p-4 md:grid-cols-5">
              <p>
                Items: <span className="font-semibold">{nft?.items}</span>
              </p>
              <p>
                Created: <span className="font-semibold">{nft?.created}</span>
              </p>
              <p>
                Earnings: <span className="font-semibold">{nft?.earnings}</span>
              </p>
              <p>
                Chain: <span className="font-semibold">{nft?.chain}</span>
              </p>
              <p>
                Category: <span className="font-semibold">{nft?.category}</span>
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 border-2 border-dashed border-black p-4 md:grid-cols-3">
              <p className="flex flex-col">
                <span className="font-semibold">{nft?.vol}</span>
                <span>total Volume</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">{nft?.price}</span>
                <span>floor price</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">{nft?.offer}</span>
                <span>best offer</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">{nft?.listed}</span>
                <span>listed</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">{nft?.owners}</span>
                <span>owners</span>
              </p>
              <p className="flex flex-col">
                <span className="font-semibold">{nft?.unique}</span>
                <span>unique owners</span>
              </p>
            </div>
          </div>

          <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <a
              href={nft?.href}
              target="_blank"
              rel="noreferrer"
              className="border-px inline-flex w-full justify-center bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 sm:ml-3 sm:w-auto"
            >
              Purchase
            </a>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => {
                setShowModal && setShowModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
