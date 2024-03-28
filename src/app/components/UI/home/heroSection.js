import "./heroSection.css";
import Link from "next/link";
import Image from "next/image";

function HeroSection(props) {
  const { title1, title2, img, btnText1, btnText2, background } = props;

  return (
    <div
      className="hero-section-wrapper"
      style={{ background: `url(${background}) no-repeat center center`, backgroundSize: "cover" }}
    >
      <div className="hero-section-content">
        <h1>
          {title1} <Image src={img} alt="HeaderLogo" width={96} height={108} />
          <br />
          <span className="business-processes">{title2}</span>
        </h1>
        <div className="btn-wrapper">
          <Link href="/schedule-demo">
            <button className="btn btn-schedule">{btnText1}</button>
          </Link>
          <Link href="/products">
            <button className="btn btn-products">{btnText2}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
