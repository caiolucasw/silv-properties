"use client";
import { Property } from "@/types/interfaces";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from "react-share";

const ShareButtons = ({ property }: { property: Property }) => {
  const url = `${process.env.NEXT_PUBLIC_DOMAIN}/property/${property._id}`;
  return (
    <>
      <h4 className="text-xl text-center font-bold pt-2">
        Compartilhe esta propriedade
      </h4>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={url} hashtags={["imoveis", "propriedades"]}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
