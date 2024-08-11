const Grid = ({ img, desc, title }) => {
  return (
    <div className="grid-item">
      <img src={img} alt={title} />
      <div className="text">
        <div className="title">{title}</div>
        <div className="description">{desc}</div>
      </div>
    </div>
  );
};

export default Grid;