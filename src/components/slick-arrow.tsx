export function SlickNextArrow(props: any) {
  const { className,onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-next`}
      onClick={onClick}
    >
      <i style={{color: "#111111"}} className="fa-light fa-angle-right"></i>
    </button>
  );
}

export function SlickPrevArrow(props: any) {
  const { className,onClick } = props;
  return (
    <button
      type="button"
      className={`${className} slick-prev`}
      onClick={onClick}
    >
      <i style={{color: "#111111"}} className="fa-light fa-angle-left"></i>
    </button>
  );
}
