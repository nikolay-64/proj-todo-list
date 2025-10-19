import clasess from './Header.module.scss';

export const Header = () => {
	return (
		<>
			<header className={clasess.header}>
				<div className={clasess.container}>
					<a href="/" className={clasess.link}>ToDo</a>
				</div>
			</header>
		</>
	);
};
