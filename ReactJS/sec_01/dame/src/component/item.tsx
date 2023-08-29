function Item(props: any) {
  return (
    <div className="d-flex justify-content-between mt-3 container m-lg-3">
      <img src={props.img} width={props.width} height={props.height} />
      &emsp;
      <div>
        <h6 className="fw-bold ">{props.title}</h6>
        <div className={props.classicon}>
          <div>
            <i className={props.icontime}></i>
            {props.time}
          </div>
          <div>
            <i className={props.iconchat}></i>
            {props.chat}
          </div>
        </div>
        <p className="w-100 fw-light">{props.content}</p>
      </div>
    </div>
  );
}
export default Item;
