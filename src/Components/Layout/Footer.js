import '../Style/Footer.css'

function Footer(){
    return(
        <footer>
			<div className="footer-content">
				<div className = "footer-posts">
					<div>Liên hệ</div>
					<div>Giới thiệu</div>
					<div>Bản quyền</div>
				</div>
				<div className = "footer-contact">
					<div>Facebook</div>
					<div>Instagram</div>
					<div>Twitter</div>
				</div>
			</div>
			<div className = "footer-copyright">@copyright 2022</div>
		</footer>
    )
}
export default Footer;