export default function Home() {
	return (
		<div className='h-screen w-screen bg-site-offline bg-no-repeat bg-center bg-cover relative flex justify-center items-center'>
			<div className='absolute top-0 left-0 bg-primary h-screen w-screen opacity-90 z-0' />
			<div className='z-10 flex flex-col sm:flex-row items-center justify-center'>
				<div className='flex flex-col z-10 mb-16 sm:mb-0 sm:mr-24 items-center'>
					<img src='/icons/dlr_logo.svg' className='h-48' />
					<h1 className='text-2xl text-white mb-4'>Stranica u izradi...</h1>
					<img src='/icons/loading.svg' className='h-12' />
				</div>
				<div className='flex flex-col z-10 text-center sm:text-left'>
					<div className='mb-6'>
						<span className='text-white opacity-60'>Email</span>
						<h2 className='text-white font-medium text-xl'>
							dlrprodukcija.zagreb@gmail.com
						</h2>
					</div>
					<div className='mb-6'>
						<span className='text-white opacity-60'>Telefon</span>
						<h2 className='text-white font-medium text-xl'>+385 91 949 0892</h2>
					</div>
					<div className='mb-4'>
						<span className='text-white opacity-60'>Adresa</span>
						<h2 className='text-white font-medium text-xl'>
							Draganička grana 17,
							<br />
							<span className='text-white font-medium'>10 000 Zagreb</span>
						</h2>
					</div>
					<div className='flex justify-center sm:justify-start'>
						<a href='https://www.facebook.com/DLRprodukcija' className='mr-4'>
							<img src='/icons/facebook.svg' />
						</a>
						<a href='https://www.instagram.com/dlr_produkcija/'>
							<img src='/icons/instagram.svg' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
