import Link from "next/link";
import Image from "next/image";
import Dot from "../../../../../public/img/dot.svg";
import dayjs from "dayjs";

import "@/app/styles/blog/postDetail.css";

function RecentPostCard({ article }) {
  const formattedDate = dayjs(article.published).format("D MMMM YYYY");
  return (
    <>
      {article && (
        <>
          <div key={article.slug} className="recent-post-card">
            <img src={article.featured_image} alt={article.title}  />
            <div className="recent-card-content">
              <h3>{article.title}</h3>
              <div className="recent-card-description">
                <p>
                  By {article.author.first_name} {article.author.last_name}
                </p>
                <p>
                  <Image
                    className="recent-card-description-img"
                    src={Dot}
                    alt="Dot"
                    width={6}
                    height={6}
                  />
                  {article.published.split("T")[0]}
                </p>
                <Link className="recent-post-link" href={`/blog/${article.slug}`}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <Link className="recent-post-link-mobile" href={`/blog/${article.slug}`}>
            <div key={article.slug} className="recent-post-card-mobile">
              <Image src={article.featured_image} alt={article.title} width={70} height={70} />
              <div className="recent-card-content-mobile">
                <h3>{article.title}</h3>
                <p>
                  {article.summary.slice(0, 34)}
                  {"..."}
                </p>
                <p>{formattedDate}</p>
              </div>
            </div>
          </Link>
        </>
      )}
    </>
  );
}

export default RecentPostCard;
