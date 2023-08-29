function Box(props: any) {
  return (
    <div className={props.box}>
      <img src={props.img} width={props.width} height={props.height} />
      <h5 className={props.class}>{props.title}</h5>
      <p className={props.classContent}>{props.content}</p>
    </div>
  );
}
export default Box;
