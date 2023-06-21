/* eslint-disable react/prop-types */
const LinksCard = ({ links, styleClass, mobile, handleCloseMenu }) => {
  return (
    <div className={`links-card-container ${styleClass}`}>
      {/* <div className="links_svgs">{links.map(({ Img }) => Img && Img)}</div> */}
      <div className="links_2">
        {links.map(({ title, Img }, i) => (
          <a
            className="link"
            key={i}
            onClick={() => {
              mobile && handleCloseMenu();
            }}
          >
            {Img}
            <p>{title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksCard;
