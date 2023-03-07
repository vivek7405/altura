import { useState } from "react";
import nfts from "./nfts";
import { NFT } from "./utils";
import { ReactComponent as AlturaSvg } from "./logo.svg";
import NFTCard from "./components/NFTCard";
import NFTModal from "./components/NFTModal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [nftModalContent, setNFTModalContent] = useState(null as NFT | null);

  return (
    <main className="min-h-screen w-full bg-neutral-900 sm:flex sm:items-center sm:justify-center">
      <div className="flex flex-col space-y-10 p-10">
        {/* Header */}
        <div className="flex items-center justify-center text-center text-7xl font-bold text-white">
          Retro NFT
        </div>

        {/* NFT Cards */}
        <div className="grid-col-1 grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3">
          {nfts.map((nft) => (
            <NFTCard
              key={nft.id}
              nft={nft}
              setNFTModalContent={setNFTModalContent}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center">
          <a
            href="https://www.alturanft.com"
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center justify-center"
          >
            <AlturaSvg />
          </a>
        </div>
      </div>

      {/* NFT Modal */}
      {showModal && (
        <NFTModal setShowModal={setShowModal} nft={nftModalContent} />
      )}
    </main>
  );
}
