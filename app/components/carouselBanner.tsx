"use client";
import Carousel from "nuka-carousel";

export default function CarouselBanner() {
    const BannerImages: {
        href: string;
        src: string;
        alt: string;
        ImageWidth: number;
        ImageHeight: number;
        target: string;
    }[] = [
            {
                href: "https://torchwallet.io/",
                src: "/TorchWalletBanner.png",
                alt: "TorchBanner",
                ImageWidth: 530,
                ImageHeight: 136,
                target: "_blank",
            },
            {
                href: "https://torchwallet.io/",
                src: "/banner.png",
                alt: "TorchBanner",
                ImageWidth: 530,
                ImageHeight: 136,
                target: "_blank",
            }
        ];

    return BannerImages.length === 0 ? (
        <></>
    ) : (
        <div className="h-[118px] lg:h-[170px] mt-2 w-screen">
            <Carousel
                animation="fade"
                autoplay={true}
                autoplayReverse={true}
                wrapAround={true}
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                autoplayInterval={5000}
                defaultControlsConfig={{pagingDotsStyle:{fill:"#263130", marginRight: "8px"}}}
                className=" pb-8"
            >
                {BannerImages.map((item) => (
                    <a href={item.href} target={item.target} key={item.alt}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            width={item.ImageWidth}
                            height={item.ImageHeight}
                            className="m-auto"
                        />
                    </a>
                ))}
            </Carousel>
        </div>
    );
}