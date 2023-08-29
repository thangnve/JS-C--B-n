function Trending(props: any) {
  return (
    <div className=" d-flex bg-body-secondary ">
      <div className="d-flex container align-items-center justify-content-between">
        <div className="d-flex align-items-center w-50 justify-content-between">
          <h6 className="mt-2">{props.trending}</h6>
          <i className="fas fa-chevron-right"></i>
          <h6 className="opacity-75 mt-2  text-center align-items-center justify-content-center fw-light">
            {props.content}
          </h6>
        </div>

        <div className="d-flex align-items-center ">
          <i className="fas fa-chevron-circle-left opacity-75"></i>

          <i className="fas fa-chevron-circle-right opacity-75 m-lg-1"></i>
        </div>
      </div>
    </div>
  );
}
export default Trending;
