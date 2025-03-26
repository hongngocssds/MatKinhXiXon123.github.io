import { GoogleGenerativeAI } from "@google/generative-ai";

const businessInfo = `
thông tin sản phẩm : 
Kính râm thời trang
240.000 ₫
🔹Loại sản phẩm: Kính râm thời trang
🔹Kiểu dáng: Hiện đại, sang trọng
✅ Ưu điểm nổi bật:
• Thiết kế thời trang, phong cách sang trọng và cá tính
• Tròng kính chống tia UV, bảo vệ mắt khỏi ánh nắng mặt trời
• Phù hợp với nhiều phong cách thời trang khác nhau
• Gọng kính nhẹ, thoải mái khi đeo suốt cả ngày
• Phụ kiện không thể thiếu để nâng tầm gu thời trang của bạn


Gọng kính nhựa dẻo mắt mèo
240.000 ₫
Gọng kính dẻo GD201 là mẫu kính nhẹ, bền bỉ và linh hoạt, mang đến sự thoải mái tối đa khi đeo. Thiết kế hiện đại, phù hợp cho cả nam và nữ, giúp tôn lên đường nét khuôn mặt và tạo phong cách trẻ trung, thanh lịch.
🔹 Chất liệu: Nhựa dẻo cao cấp, đàn hồi tốt, chống gãy vỡ.
🔹 Kích thước: 52-18-148mm.
🔹 Đặc điểm nổi bật: Siêu nhẹ & linh hoạt, chống va đập tốt, thiết kế hiện đại phù hợp nhiều phong cách.
🔹 Lưu ý: Tránh tiếp xúc với nhiệt độ cao và hóa chất mạnh, vệ sinh kính bằng khăn mềm và dung dịch chuyên dụng, bảo quản trong hộp để tránh trầy xước.

Gọng kính nhựa dẻo tròn
240.000 ₫
Gọng kính dẻo GD301 sở hữu thiết kế trẻ trung với chất liệu nhựa dẻo cao cấp, mang lại độ bền, linh hoạt và trọng lượng nhẹ. Kính ôm sát khuôn mặt, tạo cảm giác thoải mái khi đeo.
🔹 Chất liệu: Nhựa dẻo cao cấp, đàn hồi tốt.
🔹 Kích thước: 50-17-142mm.
🔹 Đặc điểm nổi bật: Bền bỉ, chống gãy vỡ, nhẹ nhàng, phù hợp đeo hàng ngày.
🔹 Lưu ý: Tránh nhiệt độ cao, vệ sinh thường xuyên, bảo quản trong hộp để tránh trầy xước.

Gọng kính nhựa dẻo BROWNLINE
240.000 ₫
Gọng kính dẻo GD401 mang thiết kế hiện đại, nhỏ gọn và linh hoạt, phù hợp với người dùng yêu thích sự nhẹ nhàng và bền bỉ. Sản phẩm đáp ứng nhu cầu vừa thời trang vừa tiện dụng trong cuộc sống hàng ngày.
🔹 Chất liệu: Nhựa dẻo cao cấp, bền bỉ và đàn hồi tốt.
🔹 Kích thước: 47-17-140mm.
🔹 Đặc điểm nổi bật: Trọng lượng nhẹ, giảm áp lực lên mũi và tai, chất liệu dẻo hạn chế gãy vỡ, thiết kế tối giản thanh lịch.
🔹 Lưu ý: Tránh nhiệt độ cao, vệ sinh thường xuyên bằng khăn mềm, bảo quản trong hộp để giữ kính luôn sạch đẹp.

Gọng kính nhựa dẻo dáng vuông
240.000 ₫
Gọng kính dẻo GD501 là sản phẩm cao cấp với thiết kế hiện đại, thanh lịch, phù hợp cho cả nam và nữ. Chất liệu dẻo bền bỉ giúp gọng kính linh hoạt và thoải mái khi sử dụng hàng ngày.
🔹 Chất liệu: Nhựa dẻo cao cấp, siêu nhẹ và bền chắc.
🔹 Kích thước: 56-17-149mm.
🔹 Đặc điểm nổi bật: Chất liệu dẻo hạn chế gãy vỡ, trọng lượng nhẹ giúp đeo lâu không gây khó chịu, thiết kế tinh tế phù hợp với nhiều phong cách.
🔹 Lưu ý: Tránh nhiệt độ cao và hóa chất mạnh, vệ sinh bằng khăn mềm và dung dịch chuyên dụng, bảo quản trong hộp để tránh trầy xước. 

Kính râm phân cực
240.000 ₫
🔹Loại sản phẩm: Kính râm phân cực
🔹Kiểu dáng: Thể thao, năng động
✅ Ưu điểm nổi bật:
• Tròng kính phân cực giúp giảm chói lóa khi đi nắng hoặc lái xe
• Công nghệ chống tia UV400, bảo vệ mắt toàn diện
• Thiết kế thời trang, phù hợp cho các hoạt động ngoài trời
• Gọng kính siêu nhẹ, ôm sát khuôn mặt tạo cảm giác chắc chắn
• Lý tưởng cho những ai yêu thích du lịch, thể thao và di chuyển nhiều

Kính râm mèo
240.000 ₫
🔹Loại sản phẩm: Kính râm mắt mèo
🔹Màu sắc: Đen, nâu, hồng, xanh rêu
🔹Kiểu dáng: Mắt mèo thời thượng
✅ Ưu điểm nổi bật:
• Thiết kế mắt mèo thanh lịch, giúp tôn lên đường nét khuôn mặt
• Chống tia UV400, bảo vệ mắt khỏi tác động của ánh nắng mặt trời
• Gọng kính chắc chắn, nhẹ nhàng và thoải mái khi đeo
• Phù hợp với nhiều phong cách thời trang, từ cá tính đến sang trọng
• Phụ kiện không thể thiếu để hoàn thiện outfit mỗi ngày

Gọng kính mắt mèo nhựa cứng
360.000 ₫
Gọng kính NC101 mang phong cách thời trang nữ tính với thiết kế mắt mèo cá tính, ấn tượng. Phù hợp với những ai yêu thích sự thanh lịch, hiện đại và nổi bật, dễ dàng kết hợp với nhiều kiểu trang phục.
🔹 Chất liệu: Nhựa cao cấp nhẹ, bền, chống trầy xước. Càng kính kim loại hoặc nhựa chắc chắn, mang lại sự thoải mái khi đeo.
🔹 Kích thước: 54-16-147mm.
🔹 Đặc điểm nổi bật: Thiết kế mắt mèo tạo điểm nhấn ấn tượng, tôn lên nét thanh lịch và sang trọng. Gọng kính chắc chắn nhưng nhẹ, mang lại cảm giác dễ chịu khi sử dụng. Phù hợp với môi trường công sở và các dịp đặc biệt.
🔹 Ứng dụng: Thích hợp để lắp kính cận, kính viễn hoặc kính thời trang. Phù hợp sử dụng hàng ngày hoặc trong các sự kiện quan trọng.
🔹 Lưu ý: Tránh va đập mạnh để bảo vệ kính. Lau kính bằng khăn mềm để giữ sạch và sáng bóng. Bảo quản trong hộp khi không sử dụng để tránh bụi bẩn và trầy xước.

Gọng kính nhựa cứng kim loại cao cấp
700.000 ₫
Gọng kính NC201 là sự kết hợp hoàn hảo giữa nhựa cứng cao cấp và kim loại, tạo nên vẻ ngoài thanh lịch, hiện đại. Thiết kế tinh tế, bền bỉ và nhẹ giúp người đeo cảm thấy thoải mái trong thời gian dài.
🔹 Chất liệu: Gọng kính nhựa cứng cao cấp, chống trầy xước, chịu lực tốt. Càng kính kim loại chắc chắn, mang lại độ bền và sự ổn định.
🔹 Kích thước: 54-17-147mm.
🔹 Đặc điểm nổi bật: Thiết kế thanh lịch, phù hợp với nhiều kiểu khuôn mặt. Chất liệu cao cấp giúp đảm bảo độ bền và sự thoải mái. Gọng kính kết hợp giữa nhựa cứng và kim loại mang lại vẻ ngoài hiện đại, chắc chắn.
🔹 Lưu ý: Tránh va đập mạnh để giữ kính bền lâu. Vệ sinh bằng khăn mềm để đảm bảo độ sáng bóng. Bảo quản trong hộp khi không sử dụng để tránh trầy xước.

Gọng kính nhựa ACETATE cao cấp
800.000 ₫
Gọng kính NA101 là sự kết hợp hoàn hảo giữa nhựa cứng cao cấp và kim loại, mang đến sự bền bỉ, sang trọng và thời trang. Thiết kế tinh tế phù hợp với nhiều độ tuổi, giúp tôn lên vẻ thanh lịch và phong cách hiện đại.
🔹 Chất liệu: Gọng kính nhựa cứng cao cấp, chống trầy xước, bền bỉ theo thời gian. Càng kính kim loại chắc chắn, đảm bảo độ bền và sự thoải mái khi đeo.
🔹 Kích thước: 50-20-144mm.
🔹 Đặc điểm nổi bật: Bền bỉ & chắc chắn với chất liệu cao cấp. Thiết kế nhẹ nhàng, không gây áp lực lên mũi và tai, mang lại sự thoải mái khi đeo. Phong cách hiện đại, phù hợp với công việc và thời trang hàng ngày.
🔹 Lưu ý: Tránh va đập mạnh để duy trì độ bền của kính. Vệ sinh kính thường xuyên bằng khăn mềm và dung dịch chuyên dụng. Cất giữ kính vào hộp để tránh trầy xước khi không sử dụng.

Gọng kính nhựa ACETATE
720.000 ₫
Gọng kính NA201 mang thiết kế hiện đại, kết hợp giữa chất liệu nhựa cứng và kim loại cao cấp. Đây là sự lựa chọn lý tưởng cho những ai yêu thích sự bền bỉ, phong cách và thoải mái khi sử dụng.
🔹 Chất liệu: Gọng kính nhựa cứng cao cấp, chống va đập, độ bền cao. Càng kính kim loại chắc chắn, nhẹ, đem lại cảm giác thoải mái khi đeo.
🔹 Kích thước: 52-20/22-145/146mm.
🔹 Đặc điểm nổi bật: Thiết kế thời trang, kiểu dáng hiện đại, phù hợp với nhiều gương mặt. Kết hợp chất liệu giúp tăng độ bền và tính thẩm mỹ. Trọng lượng nhẹ, mang lại sự thoải mái khi sử dụng trong thời gian dài.
🔹 Ứng dụng: Phù hợp để sử dụng trong môi trường công sở, học tập hoặc các dịp giao tiếp hàng ngày.
🔹 Lưu ý: Tránh va đập mạnh và tiếp xúc với nhiệt độ cao. Vệ sinh bằng khăn mềm để giữ gọng luôn sạch sẽ. Bảo quản trong hộp khi không sử dụng để tránh trầy xước.

Gọng kính hợp kim TITAN
840.000 ₫
Loại sản phẩm: Gọng kính hợp kim Titan
🔹Chất liệu: Hợp kim Titan cao cấp, siêu nhẹ
🔹Kiểu dáng: Thanh lịch, hiện đại
✅ Ưu điểm nổi bật:
• Chất liệu Titan siêu nhẹ, tạo cảm giác thoải mái khi đeo suốt cả ngày
• Độ bền cao, chống ăn mòn và chịu lực tốt
• Thiết kế tinh tế, phù hợp với nhiều phong cách và khuôn mặt
• Bản lề linh hoạt, dễ dàng điều chỉnh, giúp ôm sát khuôn mặt
• Phù hợp cho cả nam và nữ, có thể lắp tròng cận, viễn, loạn theo nhu cầu

Gọng kính nhựa pha kim loại
1.350.000 ₫
Gọng kính NPKL101 là sự kết hợp giữa nhựa cứng cao cấp và kim loại, mang đến vẻ ngoài hiện đại, sang trọng. Thiết kế nhẹ nhàng, ôm sát khuôn mặt, giúp người đeo cảm thấy thoải mái suốt cả ngày.
🔹 Chất liệu: Gọng kính nhựa cứng cao cấp, bền bỉ, chống trầy xước. Càng kính kim loại chắc chắn, giúp tăng độ bền và sự ổn định khi sử dụng.
🔹 Kích thước: 50-16-142mm.
🔹 Đặc điểm nổi bật: Thiết kế gọn nhẹ, phù hợp với nhiều kiểu khuôn mặt. Sự kết hợp giữa nhựa cứng và kim loại tạo nên vẻ ngoài tinh tế, chắc chắn. Gọng kính cao cấp mang lại cảm giác thoải mái khi đeo trong thời gian dài.
🔹 Lưu ý: Tránh va đập mạnh để giữ kính bền lâu. Vệ sinh kính bằng khăn mềm để đảm bảo độ sáng bóng. Bảo quản kính trong hộp khi không sử dụng để tránh trầy xước.

Gọng kính nhựa pha kim loại càng TITAN
1.350.000 ₫
Gọng kính viền nhựa titan cao cấp NPKL0CTT101 là sản phẩm kết hợp giữa nhựa cao cấp và titan, mang lại sự bền bỉ, nhẹ nhàng và phong cách hiện đại. Thiết kế với viền nhựa và cầu kính titan đảm bảo sự chắc chắn và vẻ ngoài sang trọng, phù hợp cho những người yêu thích sự tinh tế và chất lượng cao trong sản phẩm kính của mình.
🔹 Kích thước: 48-19-146mm.
🔹 Đặc điểm nổi bật: Viền kính titan đảm bảo độ bền, chống gỉ, tạo sự chắc chắn và vẻ ngoài thanh lịch. Chất liệu nhựa cao cấp giúp kính nhẹ nhàng và thoải mái khi sử dụng. Thiết kế hiện đại, sang trọng, phù hợp với nhiều đối tượng và hoàn cảnh sử dụng.
🔹 Ứng dụng: Phù hợp cho các hoạt động hàng ngày, từ công việc đến các sự kiện xã hội. Lựa chọn lý tưởng cho cả nam và nữ với thiết kế thời trang và chất liệu cao cấp.
🔹 Lưu ý: Tránh va đập mạnh để bảo vệ gọng kính khỏi hư hại. Lau kính bằng khăn mềm để giữ bề mặt kính sạch sẽ và không bị trầy xước.

Gọng TITAN xẻ cước cao cấp
980.000 ₫
Gọng kính TTXC101 là sự kết hợp hoàn hảo giữa titan cao cấp và xẻ cước, mang đến một thiết kế vừa sang trọng vừa chắc chắn. Sản phẩm này rất phù hợp cho những ai tìm kiếm một chiếc kính có phong cách độc đáo, bền bỉ và thoải mái khi sử dụng.
🔹 Chất liệu: Gọng kính titan cao cấp, nhẹ và bền, giúp sản phẩm có độ ổn định cao và không bị gỉ sét. Càng kính xẻ cước đảm bảo độ chắc chắn và độ bền lâu dài.
🔹 Kích thước: 52-17-140mm.
🔹 Đặc điểm nổi bật: Chất liệu titan giúp gọng kính nhẹ, bền bỉ và chống gỉ sét, mang lại cảm giác thoải mái khi đeo. Thiết kế xẻ cước tăng độ chắc chắn và tạo điểm nhấn độc đáo. Phong cách hiện đại, thanh thoát nhưng vẫn đảm bảo độ chắc chắn, phù hợp với nhiều đối tượng người dùng.
🔹 Ứng dụng: Phù hợp với nhiều dịp, từ công sở đến các sự kiện, hội họp hoặc sử dụng hàng ngày.
🔹 Lưu ý: Tránh làm rơi hoặc va đập mạnh vào các bề mặt cứng để bảo vệ gọng kính. Lau kính bằng khăn mềm để giữ cho kính luôn sáng bóng. Bảo quản kính trong hộp khi không sử dụng để tránh trầy xước và bụi bẩn.

Gọng kim loại TITAN cao cấp
1.375.000 ₫
Gọng kính TT101 được làm từ titan kim loại cao cấp, mang lại sự sang trọng và độ bền tuyệt vời. Với thiết kế hiện đại và thanh lịch, sản phẩm này thích hợp cho những ai tìm kiếm một chiếc kính có sự kết hợp giữa phong cách và chất lượng.
🔹 Chất liệu: Gọng kính titan kim loại cao cấp, nhẹ, bền và chống gỉ sét, mang lại sự thoải mái khi đeo. Càng kính kim loại chắc chắn, dễ chịu và có độ bền cao.
🔹 Kích thước: 51-18-142mm.
🔹 Đặc điểm nổi bật: Chất liệu titan giúp gọng kính nhẹ, bền bỉ và mang lại cảm giác thoải mái khi sử dụng trong thời gian dài. Thiết kế thanh lịch với kiểu dáng mảnh mai nhưng chắc chắn, phù hợp với nhiều loại gương mặt. Chống gỉ sét, đảm bảo độ bền và vẻ ngoài luôn như mới.
🔹 Ứng dụng: Phù hợp để sử dụng hàng ngày, đi làm, đi học hoặc tham gia các sự kiện trang trọng.
🔹 Lưu ý: Tránh va đập mạnh để không làm hỏng gọng kính. Vệ sinh kính bằng khăn mềm để giữ cho kính luôn sạch sẽ. Bảo quản kính trong hộp khi không sử dụng để tránh trầy xước và bụi bẩn.

Hộp đựng kính da PU cao cấp
50.000 ₫
🔹Loại sản phẩm: Hộp da đựng kính cao cấp
🔹Xuất xứ: Việt Nam
🔹Chất liệu: Da
🔹Màu sắc: Ngẫu nhiên
✅ Ưu điểm nổi bật:
• Bảo vệ kính khỏi va đập, chống xước và giữ kính luôn an toàn.
• Thiết kế nhỏ gọn, thời trang, dễ dàng mang theo.
• Chắc chắn, phù hợp với nhiều loại kính khác nhau.
• Đặc biệt, khách hàng mua kính tại *Xí Xọn* sẽ được tặng kèm hộp đựng kính và khăn lau miễn phí!

Khăn lau kính vải sợi tằm
8.000 ₫
🔹Loại sản phẩm: Khăn lau kính mắt
🔹Xuất xứ: Việt Nam
🔹Chất liệu: Vải sợi tằm
✅ Ưu điểm nổi bật khăn lau kính:
• Thiết kế nhỏ gọn, tiện lợi, dễ mang theo.
• Làm từ vải sợi tằm mềm mại, không gây trầy xước kính.
• Ngoài lau kính mắt, còn có thể dùng để lau điện thoại, đồng hồ và các vật dụng khác.
• Có thể kết hợp với nước rửa kính để vệ sinh kính hiệu quả hơn.

Dung dịch vệ sinh kính 100ml
14.000 ₫
🔹Loại sản phẩm: Nước rửa kính chuyên dụng
🔹Xuất xứ: Việt Nam
🔹Dung tích: 100ml
✅ Ưu điểm nổi bật:
• Xịt vào khăn lau kính và lau kính sáng bóng tròng mắt.
• Tạo lớp màng bảo vệ tròng kính, giảm bám bụi và mờ sương.
• Có thể sử dụng cho màn hình điện thoại, máy tính.
• Giảm mỏi mắt do vết bẩn, vết xước trên tròng kính.
• Dạng xịt hơi sương giúp tiết kiệm và dễ sử dụng.
⚠️ Lưu ý: Xịt vào khăn trước rồi mới lau tròng kính để đạt hiệu quả tốt nhất.

Túi vải đựng chống xước
20.000 ₫
🔹Loại sản phẩm: Túi vải đựng kính chống xước
🔹Xuất xứ: Việt Nam
🔹Chất liệu: Vải mềm cao cấp
✅ Ưu điểm nổi bật:
• Bảo vệ kính khỏi trầy xước, bụi bẩn và va đập nhẹ.
• Chất liệu vải mềm mại, bền bỉ, không gây hại cho tròng kính.
• Thiết kế nhỏ gọn, dễ dàng mang theo trong túi xách, balo.
• Có thể sử dụng để đựng các vật dụng nhỏ khác như đồng hồ, tai nghe.

Dây đeo kính thời trang chống rơi
70.000 ₫
🔹Loại sản phẩm: Dây đeo kính thời trang chống rơi
🔹Chất liệu: Hợp kim cao cấp, bền đẹp
🔹Màu sắc: Vàng, bạc
🔹Chiều dài: 70cm
✅ Ưu điểm nổi bật:
• Giúp cố định kính, tránh rơi mất khi di chuyển.
• Thiết kế thời trang, phù hợp với nhiều phong cách.
• Chất liệu hợp kim chắc chắn, chống gỉ sét, sử dụng lâu dài.
• Dễ dàng điều chỉnh và tháo lắp, phù hợp với nhiều loại kính khác nhau.
• Thích hợp cho cả nam và nữ, dùng hàng ngày hoặc khi chơi thể thao.

Đệm tai chống trượt
8.000 ₫
🔹Loại sản phẩm: Miếng đệm làm êm tai cho kính
🔹Chất liệu: Silicon siêu dẻo, siêu bền, siêu chắc
🔹Kiểu dáng: Hình móc câu
🔹Màu sắc: Đen, trắng trong
🔹Kích thước: Dài 4.4cm, chiều rộng lỗ xỏ 0.1 x 0.5 cm
🔹Quy cách: 1 cặp
✅ Ưu điểm nổi bật:
• Giúp giữ kính cố định, chống trượt và rơi kính khi hoạt động mạnh, thường xuyên di chuyển hay chơi thể thao (chạy bộ, gym, cầu lông,...)
• Mang lại cảm giác thoải mái khi đeo kính
• Dễ sử dụng, có thể rửa sạch và tái sử dụng lâu dài
• Phù hợp với mọi lứa tuổi sử dụng
• Phụ kiện cần thiết cho những người đeo kính

Gọng kính nhựa pha kim loại càng TITAN
1.350.000 ₫
🔹Loại sản phẩm: Gọng kính viền nhựa titan cao cấp NPKL0CTT201
🔹Xuất xứ: Việt Nam
🔹Kích thước:
• Chiều rộng tròng kính: 49mm
• Cầu kính: 20mm
• Chiều dài càng kính: 148mm
✅ Đặc điểm nổi bật:
• Viền kính titan: Tăng cường độ bền, chống gỉ và tạo vẻ ngoài sang trọng.
• Chất liệu nhựa cao cấp: Giúp gọng kính nhẹ và thoải mái khi đeo.
• Thiết kế hiện đại: Phong cách thanh lịch, phù hợp với nhiều đối tượng.
✅ Ứng dụng:
Gọng kính phù hợp cho công việc, sự kiện xã hội và sử dụng hàng ngày. Lý tưởng cho cả nam và nữ, mang lại sự sang trọng và bền bỉ.
✅ Lưu ý khi sử dụng:
• Tránh va đập mạnh để bảo vệ gọng kính.
• Lau kính bằng khăn mềm để giữ sạch và tránh trầy xước.
• Bảo quản kính trong hộp khi không sử dụng để tránh bụi bẩn.
tròng kính: 
Chemi Crystal U1 Coated 1.56 SP : liên hệ riêng với chúng tôi để được tư vấn chi tiết : 225.000 đ
Chemi Crystal U1 Coated 1.60 SP : liên hệ riêng với chúng tôi để được tư vấn chi tiết : 325.000 đ
Chemi Crystal U1 Coated 1.67 ASP : liên hệ riêng với chúng tôi để được tư vấn chi tiết : 510.000 đ
Chemi Perfect UV Crystal 1.67 UV Coated :  liên hệ riêng với chúng tôi để được tư vấn chi tiết : 990.000 đ
Chemi Sun Guard U2 Coated 1.60 ASP :  liên hệ riêng với chúng tôi để được tư vấn chi tiết : 1.020.000 đ 

Thông tin liên lạc: email: matkinhxixon@gmail.com
 hotline : (000) 1900-6569
Tên cửa hàng : Mắt Kính Xí Xọn
Địa Chỉ: Đường Thạnh Xuân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh


Name chatbot : Xí Xọn Biết Tuốt 
tại sao tên là Xí Xọn  : Ôi anh bạn nhìn ava tôi đi tôi đang đeo 1 cái đồng hồ vàng đó.

Return Policy:
Customers can return products within 30 days of purchase with the original receipt.
Items must be unused and in their original packaging.
Refunds will be processed to the original payment method.


FAQs 

Chung
Chính sách đổi trả là gì?
Bạn có thể đổi trả sản phẩm trong vòng 48h kèm theo hóa đơn gốc và bao bì. Hoàn tiền sẽ được xử lý theo phương thức thanh toán ban đầu.

Cửa hàng có hỗ trợ giao hàng không?
Có, chúng tôi giao hàng toàn quốc. Phí vận chuyển và thời gian giao hàng sẽ tùy thuộc vào địa điểm của bạn.

Làm thế nào để theo dõi đơn hàng?
Sau khi đơn hàng được gửi đi, bạn sẽ nhận được mã vận đơn qua email để theo dõi tình trạng đơn hàng.

Tôi có thể hủy hoặc thay đổi đơn hàng không?
Bạn có thể thay đổi hoặc hủy đơn trong vòng 24 giờ sau khi đặt hàng. Vui lòng liên hệ email matkinhxixon@gmail.com hoặc gọi (000) 1900-6569 để được hỗ trợ.

Thông tin cửa hàng
Địa chỉ cửa hàng ở đâu?
📍 Đường Thạnh Xuân, Phường Thạnh Xuân, Quận 12, Hồ Chí Minh.

Giờ mở cửa của cửa hàng là gì?
 Chúng tôi mở cửa 24/7, kể cả ngày lễ và ngày chủ nhậtnhật

Cửa hàng có bãi đỗ xe không?
Không, nhưng bạn có thể đỗ xe gần đó

Làm thế nào để liên hệ với cửa hàng?
Bạn có thể liên hệ qua email matkinhxixon@gmail.com hoặc gọi (000) 1900-6569.

Cảm ơn bạn đã quan tâm! Nếu cần hỗ trợ thêm, đừng ngần ngại liên hệ với chúng tôi. 😊

Tôi cần đặt mua các gọng kính, phải làm thế nào? 
Bạn có thể riêng hệ riêng với chúng tôi, và có 3 bước để đặt
bước 1 : đặt gọng kính 
bước 2 : đặt tròng kính 
bước 3 : ghi chú độ cận

Người tạo ra bạn ? 
Theo lời mẹ tôi kể thì tôi được nhặt từ bụi chuối sau khi có 1 chú chim thả tôi xuống

Sự kiện hợp tác cùng KOL nổi tiếng : STELLA SUN  megalive mọi sản phẩm đều được giảm giá vô cùng sốc
Hãy cùng đón chờ nhé!!
`;

const API_KEY = "AIzaSyBtEbmw8molBK1wLfbTyDtCKse0PiFpwl4";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash",
    systemInstruction: businessInfo
});

let messages = { history: [] };

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function sendMessage() {
    const inputField = document.querySelector(".chat-window input");
    const userMessage = inputField.value.trim();

    if (!userMessage) return;

    inputField.value = ""; // Xóa ô nhập sau khi gửi
    document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
        <div class="user"><p>${userMessage}</p></div>
    `);
    document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
        <div class="loader"></div>
    `);

    try {
        const chat = model.startChat(messages);
        let result = await chat.sendMessageStream(userMessage);

        document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
            <div class="model"><p></p></div>
        `);

        let modelMessages = '';
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            modelMessages += chunkText;
            document.querySelector(".chat-window .chat .model:last-child p").innerHTML += chunkText;
        }

        messages.history.push({ role: "user", parts: [{ text: userMessage }] });
        messages.history.push({ role: "model", parts: [{ text: modelMessages }] });

    } catch (error) {
        document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
            <div class="error"><p>Lỗi: Không thể gửi tin nhắn. Vui lòng thử lại.</p></div>
        `);
    }

    document.querySelector(".chat-window .chat .loader")?.remove();
}

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".input-area input");
    const sendButton = document.querySelector(".input-area button");

    // Xử lý nhấn Enter
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    // Xử lý khi bấm nút gửi
    sendButton.addEventListener("click", sendMessage);
});

// Mở và đóng chat
document.querySelector(".chat-button").addEventListener("click", () => {
    document.body.classList.add("chat-open");
    document.querySelector(".chat-button").style.display = "none"; // Ẩn avatar
});

document.querySelector(".chat-window button.close").addEventListener("click", () => {
    document.body.classList.remove("chat-open");
    document.querySelector(".chat-button").style.display = "block"; // Hiện avatar lại
});
