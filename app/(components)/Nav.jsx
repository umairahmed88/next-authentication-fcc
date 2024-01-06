import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<header className=' bg-gray-700 text-gray-100'>
			<nav className=' flex justify-between items-center w-full px-10 py-4'>
				<div className=''>UA</div>
				<div className=' flex gap-10'>
					<Link href='/'>Home</Link>
					<Link href='/CreateUser'>Create User</Link>
					<Link href='/ClientMember'>Client Member</Link>
					<Link href='/Member'>Member</Link>
					<Link href='/Public'>Public</Link>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
