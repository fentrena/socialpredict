import React from 'react';
import BrierFoxLogoPNG from '../../assets/png/BrierFoxLogo.png';

function Home() {
  return (
    <div className='min-h-[calc(100vh-6rem)] bg-primary-background text-custom-gray-verylight flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto w-full'>
        <div className='flex flex-col sm:flex-row items-center mb-8'>
          <img
            src={BrierFoxLogoPNG}
            alt='BrierFoxForecast Logo'
            className='w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-0 sm:mr-6'
          />
          <div className='flex flex-col justify-center h-full text-center sm:text-left'>
            <h1 className='text-3xl sm:text-4xl font-bold text-custom-gray-light mb-2'>
              EVENTIA
            </h1>
            <p className='text-lg text-custom-gray-light'>
              Un proyecto en fase Alfa de orinoco.capital.
            </p>
          </div>
        </div>

        <div className='space-y-8'>
          <section className='bg-gray-800 rounded-lg p-6 shadow-lg'>
            <h2 className='text-xl font-semibold mb-3 text-custom-gray-light'>
              About BFF
            </h2>
            <p className='text-base mb-4'>
              EVENTIA es una plataforma para predicir eventos políticos, sociales, financieros, crisis globales y mucho más.  Estamos en fase de desarrollo y tu colabroación le va a dar forma a esta plataforma.
            </p>
            <h3 className='text-lg font-semibold mb-2 text-custom-gray-light'>
              Código de Conducta
            </h3>
            <p className='text-base mb-2'>
              Valoramos la libre expresión pero no toleramos:
            </p>
            <ul className='list-disc list-inside text-base pl-4'>
              <li>Racismo</li>
      
              <li>Spamming</li>
              <li>Acoso o insultos</li>
            </ul>
          </section>

          <section className='text-center bg-blue-600 p-6 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-3 text-white'>
              Unete al programa de pruebas y colabora con nosotros
            </h2>
            <p className='text-base mb-4 text-white'>
              Envia tu email y el usuario con el que deseas participar.
            </p>
            <a
              href='https://admin.typeform.com/form/CKusbUvN/'
              className='inline-block bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition duration-300'
            >
              Envia tu aplicación
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
