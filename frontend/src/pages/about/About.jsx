import React from 'react';

function About() {
  return (
    <div className='flex flex-col h-full text-white p-4 md:p-6 lg:p-8'>
      <h1 className='text-2xl md:text-3xl font-bold mb-4'>
        Sobre EVENTIA
      </h1>
      <div className='bg-gray-800 rounded-lg shadow-lg flex-grow overflow-auto'>
        <div className='p-4 md:p-6 space-y-4 md:space-y-6'>
          <p className='text-center'>
            <a
              href='https://github.com/openpredictionmarkets/socialpredict'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
            >
              📈 Built with SocialPredict <br /> ⭐ Star Us on Github!
            </a>
          </p>

          <section>
            <h2 className='text-xl font-semibold mb-2'>
              Fortaleciendo comunidades con información sectorial
            </h2>
            <p className='mb-2'>Que son los mercados de predicciones?</p>
            <ul className='list-disc list-inside pl-4'>
              <li>
                A diferencia de las encuestas, los mercados de predicción premian la exactitud. Los participantes apuestan por lo que consideran acertado, lo que impulsa una investigación exhaustiva y minimiza los prejuicios.
              </li>
            </ul>
          </section>

          <section>
            <h3 className='text-lg font-semibold mb-2'>
              Eficiencia gracias a la participación de los interesados
            </h3>
            <p className='mb-2'>SocialPredict is Open Source Software Which:</p>
            <ul className='list-disc list-inside pl-4'>
              <li>
                Abierta para la participación de todos, permitiendo que cualquiera pueda apostar en los resultados que cree válidos
              </li>
            </ul>
          </section>

          <section>
            <h3 className='text-lg font-semibold mb-2'>
              Mercados de predicción especializados
            </h3>
            <p className='mb-2'>
              Imagina un mercado especializado en fluctuaciones de una divisa:
            </p>
            <ul className='list-disc list-inside pl-4'>
              <li>
                Los usuarios pueden predecir el valor de la divisa en un tiempo específico.
              </li>
              <li>
                Discusiones y apuestos sobre este tópico y otros relacionados surgen.
              </li>
            </ul>
          </section>

          <section>
            <h3 className='text-lg font-semibold mb-2'>
              Fortalaciendo el conocimiento y la veracidad
            </h3>
            <p className='mb-2'>We strive to:</p>
            <ul className='list-disc list-inside pl-4'>
              <li>Empoderando a los usuarios para hacer predicciones de manera eficiente.</li>
              <li>Fomentando una comprensión más profunda de áreas específicas.</li>
              <li>Facilitando el intercambio de conocimientos valiosos.</li>
            </ul>
          </section>

          <p className='text-lg font-bold text-center my-4 md:my-6'>
            Únete a nosotros para darle forma al futuro de los mercados de predicciones, construyendo conexiones y conociemto dentro de tu comunidad.
          </p>

          <hr className='border-gray-700 my-4 md:my-6' />

          <section>
            <h2 className='text-xl font-bold mb-2'>Join Us</h2>
            <p className='mb-2'>Hay varias formas de involucrase en el proyecto:</p>
            <ul className='list-disc list-inside pl-4 space-y-2'>
              <li>
                <a
                  href='https://github.com/openpredictionmarkets/socialpredict'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  ⭐ Star Us on Github!
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/openpredictionmarkets/socialpredict/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  🔧 Submit an Issue on Github!
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/openpredictionmarkets/socialpredict/blob/main/README.md'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                >
                  ☁️ Spin Up Your Own Instance Following Our Instructions!
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
