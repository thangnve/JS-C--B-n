import React from "react";
import Navigation from "./component/navigation";
import Trending from "./component/trending";
import logo from "../src/image/lOGO.jpg";
import Box from "./component/box";
import "./App.css";
import tomo from "../src/image/tomo.jpg";
import video1 from "../src/image/video1.png";
import video2 from "../src/image/video2.png";
import video3 from "../src/image/video3.png";
import video4 from "../src/image/video4.png";
import Title from "./component/title";
import logo2 from "../src/image/logoz.png";
import quangcao from "../src/image/quangcao.png";
import cop from "../src/image/cop.png";
import mua from "../src/image/buy.png";
import thoitrang from "../src/image/thoitrang.png";
import mak from "../src/image/mak.png";
import family from "../src/image/family.png";
import Item from "./component/item";
import chay from "../src/image/vandong.png";
import tham from "../src/image/chaitham.png";
import doctor from "../src/image/doctor.png";
import child from "../src/image/child.png";
import thien from "../src/image/thien.png";
import parent from "../src/image/parent.png";
import toi from "../src/image/toi.png";
import girl from "../src/image/go.png";
import grand from "../src/image/grand.png";
import bien from "../src/image/bien.png";
import Lists from "./component/lists";
function App() {
  return (
    <>
      <header>
        <Navigation
          logo={logo}
          nav1="THỜI SỰ"
          nav2="CHỮA BỆNH"
          nav3="PHÒNG BỆNH"
          nav4="ĐÔNG Y"
          nav5="CHĂM SÓC ĐẶC BIỆT"
          nav6="GIỚI TÍNH"
          nav7="TÂM LÝ"
          nav8="DINH DƯỠNG"
        />
        <Trending
          trending="TRENDING"
          content="Cô gái bị lỡ chuyến bay vì khuôn mặt khác lạ sau phẫu thuật thẩm mỹ"
        />
      </header>
      <main>
        <div className="container ">
          <section>
            <div className="d-flex ">
              <div className="d-flex  ">
                <div>
                  <div className="d-flex ">
                    <div className="h-50">
                      <Box
                        box="mt-5 container h-25"
                        img={cop}
                        classContent="w-100 opacity-75 h6"
                        width="648"
                        class="mt-4 fw-bold "
                        height="500"
                        title="Cháy lớn ở Tiền Giang thiêu rụi nhiều căn nhà"
                        content=" Đang giữa trưa, một căn nhà bên mé sông Bảo Định bất ngờ cháy. Dù lực
            lượng cảnh sát PCCC đã nhanh chóng đến hiện trường nhưng do có gió lớn
            nên đám cháy đã nhanh chóng nhanh lan rộng, thiêu rụi thêm 6 căn nhà gần
            đó"
                      />
                    </div>

                    <div className="h-50">
                      <Box
                        classContent="w-100 opacity-75 h6"
                        box="mt-5 container h-25"
                        img={thoitrang}
                        width="300"
                        height="250"
                        class="mt-1 fw-bold fs-6"
                        title="Hướng dẫn khởi động căng duỗi cơ thể trước khi tập luyện"
                      />
                      <div className="m-lg-3">
                        ---------------------------------------------
                      </div>
                      <Box
                        box="mt-3 container h-25"
                        img={mak}
                        classContent="w-100 opacity-75 h6"
                        width="300"
                        height="250"
                        class="mt-1 fw-bold  fs-6"
                        title="Hướng dẫn khởi động căng duỗi cơ thể trước khi tập luyện"
                      />
                    </div>
                  </div>
                  <hr style={{ width: 960 }} className="m-lg-2" />

                  <div
                    style={{ width: 960, height: "180px" }}
                    className="bg-body-secondary text-center d-flex align-items-center justify-content-center m-lg-2"
                  >
                    <h6 className="text-center opacity-75"> Quảng Cáo</h6>
                  </div>
                </div>
              </div>
              <div>
                <img src={quangcao} width="300" height="500" className="mt-5" />
                <img src={mua} width="300" height="300" className="mt-4" />
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className="d-flex justify-content-between">
              <div>
                <Item
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={family}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  width="390"
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={chay}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={tham}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={doctor}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={child}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={thien}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={parent}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={toi}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={girl}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={grand}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <div className="m-lg-3 opacity-25">
                  -----------------------------------------------------------------------------------------------------------------------------------
                </div>
                <Item
                  classicon="d-flex w-50 justify-content-between mt-2 opacity-50"
                  icontime="far fa-clock"
                  iconchat="fas fa-comment-alt"
                  title="Đột phá công nghệ hướng đích trong điều trị bệnh dạ dày, trào ngược"
                  img={bien}
                  content="Theo các chuyên gia, viêm loét dạ dày là một trong những bệnh đầu tiên con người mắc phải, từ khoảng 3.000 năm trước công nguyên. Theo hội Khoa học Tiêu hóa Việt Nam, khoảng 70% dân số có nguy cơ bị đau dạ dày; 20% dân số Việt Nam mắc bệnh đau dạ dày và con số này đang không ngừng tăng, ước tính mỗi năm tăng khoảng 0,2%"
                  time=" 06/04/2018 - 16:02"
                  chat=" 1254"
                  width="390"
                  height="200"
                />
                <nav className="p-5" aria-label="...">
                  <ul className="pagination  d-flex justify-content-center align-items-center">
                    <li className="page-item  p-3" aria-current="page">
                      <span className="page-link text-black">1</span>
                    </li>
                    <li className="page-item active p-3">
                      <a className="page-link " href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item  p-3">
                      <a className="page-link text-black" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item  p-3">
                      <a className="page-link text-black" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item   p-3">
                      <a className="page-link text-black" href="#">
                        5
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-50">
                <Title title="Tin đọc nhiều" classhr="w-50 opacity-50" />
                <Box
                  box="p-3"
                  img={thoitrang}
                  width="400"
                  height="250"
                  classContent="w-100 opacity-75 h6"
                  class="mt-1 fw-bold  fs-6"
                  title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                  content="Là kình ngư hàng đầu thế giới với 82 huy chương quốc tế, Michael Phelps có cuộc sống bao người khao khát. Thế nhưng, đằng sau ánh hào quang..."
                />

                <Item
                  title="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  img={tomo}
                  time="2 giờ trước"
                  classicon="d-flex w-75 justify-content-between mt-2 opacity-50"
                  chat="1242 bình luận"
                  width="100"
                  height="80"
                />
                <Item
                  title="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  img={child}
                  time="2 giờ trước"
                  classicon="d-flex w-75 justify-content-between mt-2 opacity-50"
                  width="100"
                  height="80"
                />
                <Item
                  title="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  img={parent}
                  time="2 giờ trước"
                  classicon="d-flex w-75 justify-content-between mt-2 opacity-50"
                  chat="1242 bình luận"
                  width="100"
                  height="80"
                />
                <Item
                  title="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  img={family}
                  time="2 giờ trước"
                  classicon="d-flex w-75 justify-content-between mt-2 opacity-50"
                  width="100"
                  height="80"
                />
                <Item
                  title="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  img={chay}
                  time="2 giờ trước"
                  classicon="d-flex w-75 justify-content-between mt-2 opacity-50"
                  width="100"
                  height="80"
                />
                <Title title="Video" classhr="w-50 opacity-50" />
                <Box
                  box="p-3"
                  img={video1}
                  width="400"
                  height="250"
                  classContent="w-100 opacity-75 h6"
                  class="mt-1 fw-bold  fs-6"
                  title="Lễ hội hoa anh đào thu hút sự chú ý của hàng ngàn người dân Hà Nội"
                />
                <Box
                  box="p-3"
                  img={video2}
                  width="400"
                  height="250"
                  classContent="w-100 opacity-75 h6"
                  class="mt-1 fw-bold  fs-6"
                  title="Lễ hội hoa anh đào thu hút sự chú ý của hàng ngàn người dân Hà Nội"
                />
                <Box
                  box="p-3"
                  img={video3}
                  width="400"
                  height="250"
                  classContent="w-100 opacity-75 h6"
                  class="mt-1 fw-bold  fs-6"
                  title="Lễ hội hoa anh đào thu hút sự chú ý của hàng ngàn người dân Hà Nội"
                />
                <Box
                  box="p-3"
                  img={video4}
                  width="400"
                  height="250"
                  classContent="w-100 opacity-75 h6"
                  class="mt-1 fw-bold  fs-6"
                  title="Lễ hội hoa anh đào thu hút sự chú ý của hàng ngàn người dân Hà Nội"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <section>
          <div className="w-100 h-75 bg-violet">
            <div className="d-flex justify-content-around container p-4">
              <div>
                <img src={logo2} />
                <p className="text-white fw-light opacity-50">
                  Báo điện tử Sức Khỏe Việt Nam - www.suckhoevietnam.net.vn
                  <br />
                  Giấy phép số 38/GP-BTTTT của Bộ TT&TT cấp ngày 25/1/2016{" "}
                  <br />
                  Tổng biên tập: Nguyễn Tiến Thanh <br />
                  Vui lòng dẫn nguồn "suckhoevietnam.net.vn" khi bạn phát hành
                  lại <br />
                  thông tin từ website này.
                </p>
              </div>
              <Lists
                title="SỨC KHỎE"
                text1="Tư vấn"
                text2="Làm đẹp"
                text3="Thuốc & TPCN"
                text4="Ưng thư"
                text5="Thói quen tốt"
              />
              <Lists
                title="ĐÔNG Y"
                text1="Bấm huyệt"
                text2="Phương pháp đặc biệt"
                text3="Tinh hoa thuốc Nam"
                text4="Đông y thực hành"
                text5="Thói quen tốt"
              />
              <Lists
                title="DINH DƯỠNG"
                text1="Mâm cơm an toàn"
                text2="Ngon mà bổ"
                text3="Ăn chay"
                text4="Ưng thư"
                text5="Thói quen tốt"
              />
              <Lists
                title="WIKI Y TẾ"
                text1="Kiến thức"
                text2="Nghiên cứu"
                text3="Số liệu"
                text4="Ưng thư"
                text5="Thói quen tốt"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="w-100 bg-primary h-25 text-white text-center p-1 d-flex justify-content-center">
            <p className="opacity-75 fw-lighter mt-3">
              Quản lý và xuất bản bởi Báo Đời sống & Pháp luật
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
