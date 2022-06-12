import {Link, Outlet} from "react-router-dom";
import "../Style/Header.css";

function Header({user,setIsOpenForm}){
	var menu2_items = document.querySelectorAll('.menu2_item');
	menu2_items.forEach(function(value){
		value.onclick = function(){
			var check = document.getElementById("check");
			check.checked = false;
		}
	})
    return (
        <header>
			<div className="header">
				<div className="logo">
					<Link className='text-link' to='/' activeClassName="active" >XemPhimHay</Link>
				</div>
				<ul className = "nav-top">
					<li class="menu2_item">
						<Link className='text-link' to='/phimmoi'activeClassName="active">Phim mới</Link>
					</li>
					<li class="menu2_item">
						<Link className='text-link' to='/phimbo'>Phim bộ</Link>
					</li>
					<li class="menu2_item">
						<Link className='text-link' to='/phimle'>Phim lẻ</Link>
					</li>
					<li class="menu2_item">
						<Link className='text-link' to='/phimchieurap'>Phim chiếu rạp</Link>
					</li>
					<li class="menu2_item">
						<Link className='text-link' to='/phimhoathinh'>Phim hoạt hình</Link>
					</li>
					{/* <li>
						{
							user[0].username === '' ? 
							(<Link 
								className='text-link' to='/login' 
								onClick={() => setIsOpenForm(true)}
							>Log in</Link>) :
							(<div className='text-link'>{user[0].username}</div>)
						}
					</li> */}
				</ul>
				<label for="check"><i class="fas fa-ellipsis-h" id="dots"></i></label>
				<input type="checkbox" class="check" id="check"></input>
				<label for="check" class="overlay"> </label>
				<div class="menu2">
					<label for="check"><i class="fas fa-times fa-lg" id="close"></i></label>
					<ul>
						<li class="menu2_item">
							<Link className='text-link' to='/phimmoi'activeClassName="active">Phim mới</Link>
						</li>
						<li class="menu2_item">
							<Link className='text-link' to='/phimbo'>Phim bộ</Link>
						</li>
						<li class="menu2_item">
							<Link className='text-link' to='/phimle'>Phim lẻ</Link>
						</li>
						<li class="menu2_item">
							<Link className='text-link' to='/phimchieurap'>Phim chiếu rạp</Link>
						</li>
						<li class="menu2_item">
							<Link className='text-link' to='/phimhoathinh'>Phim hoạt hình</Link>
						</li>
					</ul>
				</div>
			</div>
            <Outlet/>
		</header>
    )
}

export default Header