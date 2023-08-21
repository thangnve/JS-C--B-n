import React from "react";
import "./App.css";
import Header from "./component/header";
import HeaderLine from "./component/headerline";
import logo from "./imagez/logo.jpg";
import Banner from "./component/banner";
import banner1 from "./imagez/banner1.jpg";
import banner2 from "./imagez/banner2.jpg";
import banner3 from "./imagez/banner3.jpg";
import banner4 from "./imagez/banner4.jpg";
import Category from "./component/category";
import Related from "./component/related";
import Box from "./component/box.js";
import Nav from "./component/nav.js";
import footerc from "./imagez/logoc.png";
import Bar from "./component/bar";
import Footer from "./component/footer";
function App() {
  return (
    <>
      <header>
        <Header img={logo} />
        <HeaderLine />
      </header>
      <main>
        <Banner
          banner1={banner1}
          banner2={banner2}
          banner3={banner3}
          banner4={banner4}
        />
        <section>
          <div id="section_video">
            <div class="section_title">
              <i class="fas fa-square-full"></i>
              <h3>VIDEOS</h3>
              <p></p>
            </div>

            <div id="section_row">
              <Box
                text_left="-16px"
                rong="300"
                cao="200"
                img={banner4}
                title="Vitamin E Tự nhiên Và Tổng Hợp Dược Sử Dụng Như Thế Nào"
                content="BienTapVien"
                icon="fas fa-circle"
                date="T12 19, 2017"
              />
              <Box
                text_left="-16px"
                rong="300"
                cao="200"
                img={banner4}
                title="Vitamin E Tự nhiên Và Tổng Hợp Dược Sử Dụng Như Thế Nào"
                content="BienTapVien"
                icon="fas fa-circle"
                date="T12 19, 2017"
              />
              <Box
                text_left="-16px"
                rong="300"
                cao="200"
                img={banner4}
                title="Vitamin E Tự nhiên Và Tổng Hợp Dược Sử Dụng Như Thế Nào"
                content="BienTapVien"
                icon="fas fa-circle"
                date="T12 19, 2017"
              />
              <Box
                text_left="-16px"
                rong="300"
                cao="200"
                img={banner4}
                title="Vitamin E Tự nhiên Và Tổng Hợp Dược Sử Dụng Như Thế Nào"
                content="BienTapVien"
                icon="fas fa-circle"
                date="T12 19, 2017"
              />
            </div>
          </div>
        </section>
        <section>
          <div id="container">
            <div id="container_list_01">
              <div>
                <div className="list_row">
                  <Category
                    color="blue"
                    img={banner4}
                    title="ĐÔNG Y"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                  <Category
                    color="gray"
                    img={banner4}
                    title="GIỚI TÍNH"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                </div>
                <div className="list_row">
                  <Category
                    img={banner4}
                    color={"#E4A211"}
                    title="TÂM LÝ"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                  <Category
                    color={"#32B336"}
                    img={banner4}
                    title="LÀM ĐẸP"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                </div>
                <div className="list_row">
                  <Category
                    color="blue"
                    img={banner4}
                    title="ĐÔNG Y"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                  <Category
                    color="gray"
                    img={banner4}
                    title="GIỚI TÍNH"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                </div>
                <div className="list_row">
                  <Category
                    img={banner4}
                    color={"#E4A211"}
                    title="TÂM LÝ"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                  <Category
                    color={"#32B336"}
                    img={banner4}
                    title="LÀM ĐẸP"
                    content="Nự cười giúp doanh nhân Anh Thơ tỏa sáng trong mọi hoàn cảnh"
                    text="Bà xã của diễn viên Bình Minh ghi điểm trong mọi hoàn cảnh và phong cách nhờ thường trực nụ cười trên môi..."
                  />
                </div>
                <Nav
                  title="ĐỜI SỐNG"
                  name="Dinh Dưỡng  |  Làm Đẹp  |  Thể Chất  |  Tiêu Dùng  | Thị Trường"
                  hr="943px"
                />
                <div className="list_row">
                  <Box
                    rong="450"
                    cao="300"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    content="Là kình ngư hàng đầu thế giới với 82 huy chương quốc tế, Michael Phelps có cuộc sống bao người khao khát. Thế nhưng, đằng sau ánh hào quang..."
                    width="400px"
                    text_content="420px"
                  />
                  <div>
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                  </div>
                </div>

                <Nav
                  title="LÀM ĐẸP"
                  name="Đẹp +  |  Giảm cân  |  Chăm sóc da "
                  hr="943px"
                />

                <div className="section">
                  <Box
                    rong="450"
                    cao="300"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    width="400px"
                    text_content="420px"
                  />
                  <Box
                    rong="450"
                    cao="300"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    width="400px"
                    text_content="420px"
                  />
                </div>
                <div className="section">
                  <Box
                    rong="300"
                    cao="200"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    width="300px"
                    text_content="220px"
                  />
                  <Box
                    rong="300"
                    cao="200"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    width="300px"
                    text_content="220px"
                  />
                  <Box
                    rong="300"
                    cao="200"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    width="300px"
                    text_content="220px"
                  />
                </div>
                <Nav
                  title="ĐÔNG Y"
                  name="Đông y thực hành  |  Tinh hoa thuốc Nam  |  Phương pháp đặc biệt  |  Bấm huyệt  "
                  hr="943px"
                />
                <div className="list_row">
                  <Box
                    rong="450"
                    cao="300"
                    img={banner4}
                    title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                    content="Là kình ngư hàng đầu thế giới với 82 huy chương quốc tế, Michael Phelps có cuộc sống bao người khao khát. Thế nhưng, đằng sau ánh hào quang..."
                    width="400px"
                    text_content="420px"
                  />
                  <div>
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                    <Related
                      img={banner4}
                      content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                      time="2 giờ trước"
                    />
                  </div>
                </div>
                <section>
                  <div className="section">
                    <div>
                      <Nav
                        title="TIÊU DÙNG"
                        hr="460px"
                        rong="460px"
                        dai="460px"
                      />
                      <Box
                        rong="460"
                        cao="300"
                        img={banner4}
                        title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                        width="400px"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                    </div>
                    <div>
                      <Nav
                        title="THỊ TRƯỜNG"
                        hr="460px"
                        rong="460px"
                        dai="460px"
                      />
                      <Box
                        rong="460"
                        cao="300"
                        img={banner4}
                        title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                        width="400px"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                      <Related
                        img={banner4}
                        content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                        time="2 giờ trước"
                      />
                    </div>
                  </div>
                </section>
                <section>
                  <Nav
                    title="CỘNG ĐỒNG Y TẾ"
                    name="Giới tính  |  Tâm lý  |  Chữa bệnh  |  Phòng bệnh  |  Đông y  "
                    hr="943px"
                  />
                  <div className="list_row">
                    <Box
                      rong="450"
                      cao="300"
                      img={banner4}
                      title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                      content="Là kình ngư hàng đầu thế giới với 82 huy chương quốc tế, Michael Phelps có cuộc sống bao người khao khát. Thế nhưng, đằng sau ánh hào quang..."
                      width="400px"
                      text_content="420px"
                    />
                    <div id="congdongyte">
                      <Box
                        left="-20px"
                        title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                        content="Là kình ngư hàng đầu thế giới với 82 huy chương quốc tế, Michael Phelps có cuộc sống bao người khao khát. Thế nhưng, đằng sau ánh hào quang..."
                        width="400px"
                        text_content="420px"
                      />

                      <Related
                        comment="126 bình luận"
                        left="-215px"
                        content="Hoa hậu Phan Hoàng Thu: Vietjet đã quá cơ hội khi tranh thủ PR trong một dịp không phù hợp"
                        time="2 giờ trước"
                      />
                      <Related
                        left="-215px"
                        content="Cha mẹ nên làm gì để phòng chống bệnh hô hấp mùa đông cho trẻ?"
                        time="2 giờ trước"
                      />
                      <Related
                        left="-215px"
                        content="Tổ chức giải thưởng tôn vinh những người hoạt động vì môi trường"
                        time="2 giờ trước"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div id="container_list_02">
              <section>
                <Bar title="Tin mới nhất" />
                <Box
                  rong="460"
                  cao="300"
                  img={banner4}
                  title="Trải lòng của kình ngư Michael Phelps về chuỗi ngày trầm cảm"
                  width="300px"
                  content="Là kình ngư hàng đầu thế giới với 82 huy chương quốc tế, Michael Phelps có cuộc sống bao người khao khát. Thế nhưng, đằng sau ánh hào quang..."
                  text_content="420px"
                />
                <Related
                  img={banner4}
                  comment="126 bình luận"
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  comment="126 bình luận"
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Box rong="460" cao="460" img={banner4} width="300px" />
                <Bar title="Wiki Y Tế" top="-70px" />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Box rong="460" cao="460" img={banner4} width="300px" />
                <Bar title="Kết Nối" top="-70px" />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
                <Related
                  img={banner4}
                  content="Ba bệnh viện hợp lực cứu thai phụ bị viêm tụy cấp hiếm gặp"
                  time="2 giờ trước"
                />
              </section>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section>
          <div id="footer_info">
            <div>
              <img src={footerc} width="" height="" />
              <p>
                Báo điện tử Sức Khỏe Việt Nam - www.suckhoevietnam.net.vn <br />{" "}
                Giấy phép số 38/GP-BTTTT của Bộ TT&TT cấp ngày 25/1/2016 <br />{" "}
                Tổng biên tập: Nguyễn Tiến Thanh <br /> Vui lòng dẫn nguồn
                "suckhoevietnam.net.vn" khi bạn phát hành lại <br /> thông tin
                từ website này.
              </p>
            </div>
            <Footer
              title="SỨC KHỎE"
              text1="Tư vấn"
              text2="Làm đẹp"
              text3="Thuốc & TPCN"
              text4="Ưng thư"
              text5="Thói quen tốt"
            />
            <Footer
              title="ĐÔNG Y"
              text1="Bấm huyệt"
              text2="Phương pháp đặc biệt"
              text3="Tinh hoa thuốc Nam"
              text4="Đông y thực hành"
              text5="Thói quen tốt"
            />
            <Footer
              title="DINH DƯỠNG"
              text1="Mâm cơm an toàn"
              text2="Ngon mà bổ"
              text3="Ăn chay"
              text4="Ưng thư"
              text5="Thói quen tốt"
            />
            <Footer
              title="WIKI Y TẾ"
              text1="Kiến thức"
              text2="Nghiên cứu"
              text3="Số liệu"
              text4="Ưng thư"
              text5="Thói quen tốt"
            />
          </div>
          <div id="footer_end">
            <p>Quản lý và xuất bản bởi Báo Đời sống & Pháp luật</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
