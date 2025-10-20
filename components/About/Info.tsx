'use client'

import React from 'react'

export default function Info() {
	return (
		<div className="max-w-3xl mx-auto px-6 py-10 leading-relaxed text-gray-800">
			{/* Giới thiệu ngắn */}
			<section className="mb-10">
				<h1 className="text-3xl font-bold mb-4">Giới thiệu</h1>
				<p>
					Chào các bạn, mình là <strong>Nguyễn Trần Giang Vỹ</strong>, là người sở hữu
					trang <strong>SUBA code bậy nè</strong>. Hiện tại mình là một{' '}
					<strong>Fullstack Developer</strong> và những thứ vần <strong>er</strong> khác nữa 😄.
				</p>
			</section>

			{/* Về trang SUBA code bậy */}
			<section className="mb-10">
				<h2 className="text-2xl font-semibold mb-3">Về trang SUBA code bậy</h2>
				<p className="mb-3">
					Mình sinh ra trong một gia đình khá bình thường, phụ huynh có vẻ khá dễ tính nên
					đây cũng có lẽ là một trong những nguyên nhân mình được tiếp xúc với máy tính khá
					sớm, và đến một ngày công việc IT trở thành người đồng hành không thể thiếu — cũng
					tình cờ thôi, nhưng trong các tình cờ này luôn mang đến rất nhiều bất ngờ cho mình,
					và mình yêu nó.
				</p>
				<p>
					Hiện tại mình đã tốt nghiệp rồi. Nhớ lại khoảng thời gian mà mình còn ngồi trên
					ghế nhà trường, cũng sợ thật, nhưng được cái vui lắm, vì mình thích nghiên cứu các
					ngôn ngữ lập trình. Tuy nhiên, nó vẫn là chưa đủ đâu, vì ngoài những giờ dành cho
					nghiên cứu, mình còn phải học cách giao tiếp, cách làm việc nhóm nữa — đây mới là
					yếu tố quyết định sống còn của ngành IT này nè 😄. Nếu đây là lần đầu tiên bạn dừng
					chân và đọc đến đây, thì mình cũng cảm kích và cảm ơn bạn nhiều nhé!
				</p>
			</section>

			{/* Phương châm */}
			<section className="mb-10">
				<h2 className="text-2xl font-semibold mb-3">Phương châm của mình với ngành IT</h2>
				<p>
					Không chỉ dán mắt vào máy tính hàng giờ liền, hãy nhớ rằng bạn vẫn còn cuộc sống
					riêng của mình — còn gia đình và bạn bè nữa đấy. Hãy cố gắng cân bằng để không bỏ
					lỡ những kỷ niệm đẹp nhất đời mình nhé 💖.
				</p>
			</section>

			{/* Tương lai và mục tiêu */}
			<section className="mb-10">
				<h2 className="text-2xl font-semibold mb-3">Về tương lai và mục tiêu</h2>
				<p>
					Trang web này sẽ có những blog chia sẻ riêng về các thông tin mới nhất liên quan
					đến ngành IT, cũng như những trải nghiệm cá nhân của mình trong công việc này nhé.
				</p>
			</section>

			{/* Về bản thân */}
			<section>
				<h2 className="text-2xl font-semibold mb-3">Về bản thân mình</h2>
				<p className="mb-3">
					Mình là cựu sinh viên trường <strong>Đại Học Lạc Hồng</strong>. Sau khi ra
					trường, mình muốn ở lại để tiếp tục học và nghiên cứu, trở thành giảng viên để có
					thể đồng hành cùng các em nhỏ khác trên chặng đường IT siêu thử thách này nè 💪.
				</p>
				<p>
					Cũng có thể mình sẽ thử sức với nhiều môi trường khác — tương lai vẫn là ẩn số đối
					với mình. Nhưng trước mắt, mình sẽ luôn nỗ lực với công việc tại trường nhé 🌟.
				</p>
			</section>
		</div>
	)
}
