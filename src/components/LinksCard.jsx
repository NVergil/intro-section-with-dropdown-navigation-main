const LinksCard = ({ links, styleClass }) => {
  return (
    <div className={`links-card-container ${styleClass}`}>
      {/* <div className="links_svgs">{links.map(({ Img }) => Img && Img)}</div> */}
      <div className="links_2">
        {links.map(({ title, Img }, i) => (
          <a className="link" key={i}>
            {Img}
            <p>{title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksCard;
