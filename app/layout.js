import AuthProvider from "./(components)/AuthProvider";
import Nav from "./(components)/Nav";
import "./globals.css";

export const metadata = {
	title: "Next Auth by UA",
	description: "Generated by UA",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<AuthProvider>
				<body className=' bg-gray-200'>
					<Nav />
					<div className=' m-2'>{children}</div>
				</body>
			</AuthProvider>
		</html>
	);
}
