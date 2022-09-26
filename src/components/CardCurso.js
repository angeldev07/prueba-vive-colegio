function CardCurso({ title, imgCurse }) {
  return (
    <div className="head">
      <div className="head-img">
        <img alt={title} src={imgCurse} />
      </div>
      <h2 className="title">{title}</h2>
    </div>
  );
}

export default CardCurso;
