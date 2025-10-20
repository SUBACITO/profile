'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-gray-100">
			<div className="max-w-4xl mx-auto px-6 py-16">
				{/* Avatar + Intro */}
				<section className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<img
							src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/474743781_2005017523244556_4033394738929818701_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeECgnoeQTJVdLmojIjcTz-a2USHxG-kC6_ZRIfEb6QLrzAL4hc2VgOxIa_9N4yelwKe_fZ1fQZ9nc9FV-Hv4GnO&_nc_ohc=RZPeRQLtHA0Q7kNvwEySVuT&_nc_oc=AdnH7X9ztpkAeCigFBcX3RQul3dX9oecMwU4K8imFfYc26WWlwRDg1ERGlbipgrb5ZM&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=RJiqUOVMkGy8iEeuI67qRg&oh=00_AffvuP8qNFR6RyazyRThOTMJcFOHvEVrquU2nd5qCE3v8w&oe=68FB806D"
							alt="Nguyễn Trần Giang Vỹ"
							width={800}
							height={600}
							className="mx-auto rounded-full border-4 border-purple-500/40 shadow-lg object-cover"
						/>
						<h1 className="text-4xl font-bold mt-6 mb-2 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
							Nguyễn Trần Giang Vỹ
						</h1>
						<p className="text-gray-400 font-medium">
							Fullstack Developer • Chủ trang{' '}
							<span className="text-purple-400">SUBA code bậy nè</span>
						</p>
					</motion.div>
				</section>

				{/* Giới thiệu */}
				<motion.section
					className="glass-section mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
				>
					<h2 className="section-title">Giới thiệu</h2>
					<p>
						Chào các bạn, mình là <strong>Nguyễn Trần Giang Vỹ</strong>, là người sở hữu
					trang <strong>SUBA code bậy nè</strong>. Hiện tại mình là một{' '}
					<strong>Fullstack Developer</strong> và những thứ vần <strong>er</strong> khác nữa 😄.
					</p>
				</motion.section>

				{/* SUBA */}
				<motion.section
					className="glass-section mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
					viewport={{ once: true }}
				>
					<h2 className="section-title">Về trang SUBA code bậy</h2>
					<p>
						Mình sinh ra trong một gia đình khá bình thường, phụ huynh có vẻ khá dễ tính nên
					đây cũng có lẽ là một trong những nguyên nhân mình được tiếp xúc với máy tính khá
					sớm, và đến một ngày công việc IT trở thành người đồng hành không thể thiếu — cũng
					tình cờ thôi, nhưng trong các tình cờ này luôn mang đến rất nhiều bất ngờ cho mình,
					và mình yêu nó.
					</p>
                        <img alt="family"
						width={800}
						height={500}
						className="rounded-2xl mt-6 shadow-lg" src="/images/family.png">
                    </img>

                    
					<p className="mt-15">
						Hiện tại mình đã tốt nghiệp rồi. Nhớ lại khoảng thời gian mà mình còn ngồi trên
					ghế nhà trường, cũng sợ thật, nhưng được cái vui lắm, vì mình thích nghiên cứu các
					ngôn ngữ lập trình. Tuy nhiên, nó vẫn là chưa đủ đâu, vì ngoài những giờ dành cho
					nghiên cứu, mình còn phải học cách giao tiếp, cách làm việc nhóm nữa — đây mới là
					yếu tố quyết định sống còn của ngành IT này nè 😄. Nếu đây là lần đầu tiên bạn dừng
					chân và đọc đến đây, thì mình cũng cảm kích và cảm ơn bạn nhiều nhé!
					</p>
				</motion.section>

				{/* Phương châm */}
				<motion.section
					className="glass-section mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<h2 className="section-title">Phương châm của mình với ngành IT</h2>
					<p>
						Không chỉ dán mắt vào máy tính hàng giờ liền, hãy nhớ rằng bạn vẫn còn cuộc sống riêng —
						còn gia đình và bạn bè nữa. Hãy cân bằng để không bỏ lỡ những điều đẹp nhất nhé 💖.
					</p>
					<img
						src="https://lh3.googleusercontent.com/sitesv/AICyYdbIEhTa7wRYEJkq3elxcr93aYXexfSVHHOThYJ9PyXELnipkXNLiG95v7ElgIqNZbVKc2kYZ8DrPcPMtAQzLWjJ9bEfaRh94mrWBEDQwnOxd7KX9tpNjmmgpJAG07gsB7KLqvVUJgj-rWzQPuam6AxENGJ08sbImN1t2gQ5eCLaDHSFial31lanltRIGNrY3vRYw3E7RELdxI6NNfsSi-D4Ck25dOzNzjCZV9o=w1280"
						alt="Chill"
						width={800}
						height={500}
						className="rounded-2xl mt-6 shadow-lg"
					/>
				</motion.section>

				{/* Mục tiêu */}
				<motion.section
					className="glass-section mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<h2 className="section-title">Về tương lai và mục tiêu</h2>
					<p>
						Trang web này sẽ chia sẻ những bài viết về IT, trải nghiệm nghề và các góc nhìn thực tế.
						Mình muốn nó trở thành một nơi vừa học vừa chill của anh em dev Việt Nam.
					</p>

                    <img
						src="/images/chill.jpeg"
						alt="Chill"
						width={800}
						height={500}
						className="rounded-2xl mt-6 shadow-lg"
					/>
				</motion.section>

				{/* Bản thân */}
				<motion.section
					className="glass-section"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<h2 className="section-title">Về bản thân mình</h2>
					<p>
						Mình là cựu sinh viên trường <strong>Đại Học Lạc Hồng</strong>. Sau khi ra
					trường, mình muốn ở lại để tiếp tục học và nghiên cứu, trở thành giảng viên để có
					thể đồng hành cùng các em nhỏ khác trên chặng đường IT siêu thử thách này nè 💪.</p>
					<p className="mt-3">
						Cũng có thể mình sẽ thử sức với nhiều môi trường khác — tương lai vẫn là ẩn số đối
					với mình. Nhưng trước mắt, mình sẽ luôn nỗ lực với công việc tại trường nhé 🌟.
					</p>
					<img
						src="https://lhu.edu.vn/Data/News/431/images/CacCoSo/co_so_1.jpg"
						alt="Trường Đại Học Lạc Hồng"
						width={800}
						height={500}
						className="rounded-2xl mt-6 shadow-lg"
					/>
				</motion.section>
			</div>
		</div>
	)
}
