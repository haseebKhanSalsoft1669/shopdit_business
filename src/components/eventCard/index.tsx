import React from "react";
import { Card, Image } from "antd";
import { ImageUrl } from "../../utils/Functions";

interface EventCardProps {
  image: string;
  name: string;
  subheading?: string; // ✅ new prop for small heading
  amount: number;
  date?: string; // ✅ expected format: "2025-01-04"
}

const EventCard: React.FC<EventCardProps> = ({ image, name, subheading, amount, date }) => {
  // Format date into day + short month
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return { day: "", month: "" };
    const d = new Date(dateStr);
    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleString("default", { month: "short" }).toLowerCase(), // jan, feb etc.
    };
  };

  const { day, month } = formatDate(date);

  return (
    <Card
      bordered={false}
      className="market-product-card"
      cover={
        <div className="market-product-image-wrapper">
          {date && (
            <div className="market-product-date">
              <span className="day">{day}</span>
              <span className="month">{month}</span>
            </div>
          )}
          <Image
            src={ImageUrl(image)}
            alt={name}
            preview={false}
            className="market-product-image"
          />
        </div>
      }
    >
      <div className="market-product-content">
        <div className="market-product-text">
          <span className="market-product-name">{name}</span>
          {subheading && <span className="market-product-subheading">{subheading}</span>}
        </div>
        <span className="market-product-amount">
          <sup>$</sup>
          {amount}
        </span>
      </div>
    </Card>
  );
};

export default EventCard;
