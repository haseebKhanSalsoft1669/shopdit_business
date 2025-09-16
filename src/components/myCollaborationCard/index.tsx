import React from "react";
import { Image } from "antd";
import { Link } from "react-router";
import { ImageUrl } from "../../utils/Functions";
import { AiFillHeart } from "react-icons/ai";


interface MyCollaborationCardProps {
  image: string;
  text: string;
  link?: string;
}

const MyCollaborationCard: React.FC<MyCollaborationCardProps> = ({ image, text, link = "/" }) => {
  return (
    <Link to={link} className="dealdeatils-link">
      <div className="dealdeatils-card">
        {/* Image */}
        <Image
          src={ImageUrl(image)}
          alt={text}
          preview={false}
          className="dealdeatils-image"
        />

        {/* Heart Icon (top-right) */}
        <div className="dealdeatils-heart">
         <AiFillHeart className="dealdeatils-heart-icon"  />
        </div>

        {/* Text Overlay (bottom) */}
        <div className="dealdeatils-text">{text}</div>
      </div>
    </Link>
  );
};

export default MyCollaborationCard;
