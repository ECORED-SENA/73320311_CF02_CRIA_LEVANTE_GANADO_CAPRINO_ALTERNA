<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Manejo sanitario y reproductivo del ganado caprino',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conocimientos sobre manejo sanitario, bioseguridad, vacunación, control parasitario y vigilancia reproductiva del ganado caprino.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la bioseguridad en el predio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la densidad animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir el ingreso y la propagación de agentes infecciosos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la vigilancia sanitaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué medida corresponde a la cuarentena?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar temporalmente animales recién ingresados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reunir animales enfermos con el rebaño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suspender la identificación animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compartir equipos sin limpieza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué información permite la vigilancia sanitaria diaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el peso de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la cantidad de alimento almacenado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambios en signos clínicos y producción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exclusivamente el número de corrales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué debe orientar la elaboración del plan sanitario?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un calendario idéntico para todos los predios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los riesgos y necesidades específicos del predio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo la edad del reproductor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La disponibilidad de visitantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es un antecedente relevante para el diagnóstico inicial del predio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de las cercas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La marca de los bebederos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño de las oficinas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La mortalidad histórica y los abortos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Por qué debe organizarse el plan sanitario por categorías animales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque las necesidades cambian con la edad y el estado fisiológico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque todos los animales requieren medidas idénticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evitar la vigilancia de neonatos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar el inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una prioridad sanitaria en cabritos recién nacidos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suspender la observación clínica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar el consumo oportuno de calostro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicar antiparasitarios indiscriminadamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trasladarlos a ferias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué debe verificarse antes de aplicar un biológico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el precio comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el tamaño del envase.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vencimiento, conservación, dosis y vía indicadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El color del empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué información debe registrarse después de una vacunación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fecha, producto, lote, dosis y animal tratado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el nombre del predio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente la cantidad de visitantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El pronóstico del clima.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cómo debe orientarse el tratamiento antiparasitario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mediante tratamientos masivos sin justificación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Por una fecha fija universal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sin considerar antecedentes sanitarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Según el riesgo y la respuesta de los animales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Para qué se utiliza el método FAMACHA?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir la producción de leche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Valorar complementariamente la anemia asociada a ciertos parásitos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar la fecha de parto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir todo diagnóstico veterinario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué acción corresponde ante un aumento inusual de abortos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los eventos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Improvisar tratamientos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar los casos y solicitar evaluación veterinaria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suspender la bioseguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué debe incluir el manejo responsable de medicamentos veterinarios?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registros y cumplimiento de tiempos de retiro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aplicaciones sin identificación animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenamiento sin condiciones definidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación de los registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué factor puede favorecer problemas de parásitos gastrointestinales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La identificación individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La actualización del inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La separación de animales nuevos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La humedad y contaminación de pasturas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué herramienta aporta evidencia diagnóstica del parasitismo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El recuento de huevos por gramo de heces.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La fecha de compra del alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La longitud de los cercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué debe hacerse con animales enfermos o sospechosos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integrarlos inmediatamente al rebaño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compartir sus equipos sin desinfección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Separarlos para reducir la transmisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Omitir su evaluación sanitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué aspecto debe vigilarse especialmente en hembras lecheras?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La mastitis.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color del pelaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La altura de los cercados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de vehículos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una finalidad del registro de indicadores sanitarios?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar las revisiones periódicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir las medidas preventivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicar un calendario universal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar el cumplimiento del plan sanitario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué debe considerar un programa de vacunación predial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el calendario de otro predio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La epidemiología local y el criterio veterinario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente el tamaño del rebaño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo la fecha de compra del biológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué relación existe entre vacunación y bioseguridad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La vacunación elimina todos los riesgos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La bioseguridad solo se aplica tras un brote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La vacunación no sustituye las medidas de bioseguridad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Son procedimientos incompatibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
