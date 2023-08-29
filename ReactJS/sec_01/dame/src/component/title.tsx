function Title(props: any) {
  return (
    <div className="d-flex w-10 justify-content-evenly">
      <div>
        <i className="fas fa-square text-primary"></i>
      </div>
      <div>
        <h5 className="fw-bold ">{props.title}</h5>
      </div>
      <div className={props.classhr}>
        <hr />
      </div>
    </div>
  );
}
export default Title;
