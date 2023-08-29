function Lists(props: any) {
  return (
    <div>
      <div className="text-white fw-light opacity-75">
        <div className="d-flex align-items-center justify-content-lg-start">
          <i className="fas fa-square text-primary "></i>
          <h6 className="text-white fw-bold mt-2 m-lg-1">{props.title}</h6>
        </div>
        <p className="opacity-50">{props.text1}</p>
        <p className="opacity-50">{props.text2}</p>
        <p className="opacity-50">{props.text3}</p>
        <p className="opacity-50">{props.text4}</p>
        <p className="opacity-50">{props.text5}</p>
      </div>
    </div>
  );
}
export default Lists;
