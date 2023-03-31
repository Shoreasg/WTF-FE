export default function Ticker() {
  return (
    <>
      <div className="2xl:hidden relative sm:flex overflow-x-hidden">
        <div className="py-2 animate-marquee whitespace-nowrap text-headings-black font-DM-Sans font-bold">
          <span className="text-sm mx-6">ZIL: $0.025</span>
          <span className="text-sm mx-6">Total Marketplaces: 3</span>
          <span className="text-sm mx-6">Total Collections: 1200</span>
          <span className="text-sm mx-6">Total NFTs: 21,000</span>
          <span className="text-sm mx-6">24h NFT Volume: $137,000</span>
          <span className="text-sm mx-6">24h Top Sale: 1800<sup>ZIL</sup></span>
        </div>
        <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap text-headings-black font-DM-Sans font-bold">
          <span className="text-sm mx-6">ZIL: $0.025</span>
          <span className="text-sm mx-6">Total Marketplaces: 3</span>
          <span className="text-sm mx-6">Total Collections: 1200</span>
          <span className="text-sm mx-6">Total NFTs: 21,000</span>
          <span className="text-sm mx-6">24h NFT Volume: $137,000</span>
          <span className="text-sm mx-6">24h Top Sale: 1800<sup>ZIL</sup></span>
        </div>
      </div>
      <div className="hidden relative 2xl:flex overflow-x-hidden">
      <div className="py-4 px-[100px] gap-[81px] w-screen h-[81px] flex flex-row justify-between items-center whitespace-nowrap text-headings-black font-bold font-DM-Sans">
          <span className="text-sm mx-6">ZIL: $0.025</span>
          <span className="text-sm mx-6">Total Marketplaces: 3</span>
          <span className="text-sm mx-6">Total Collections: 1200</span>
          <span className="text-sm mx-6">Total NFTs: 21,000</span>
          <span className="text-sm mx-6">24h NFT Volume: $137,000</span>
          <span className="text-sm mx-6">24h Top Sale: 1800<sup>ZIL</sup></span>
        </div>
      </div>
    </>
  );
}
