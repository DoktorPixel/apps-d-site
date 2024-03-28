import "./productItem.css";
import Link from "next/link";

export function ProductItem({ number, title, subtitle1, subtitle2, siteHref, icon }) {
  return (
    <div>
      <Link href={siteHref} target="blank">
        <div className="product_item">
          <div className="item_number">{number}</div>
          <div
            className="item_img"
            style={{ backgroundImage: `url(${icon})`, backgroundSize: "cover" }}
          ></div>
          <div className="item_box">
            <h6>{title}</h6>
            <p>{subtitle1}</p>
            <p>{subtitle2}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
