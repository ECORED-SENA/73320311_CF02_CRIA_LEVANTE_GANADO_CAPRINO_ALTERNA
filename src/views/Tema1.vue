<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Manejo sanitario y bioseguridad en la explotación ovinocaprina
      p.mb-5 El manejo sanitario y la bioseguridad constituyen un sistema preventivo que integra acciones orientadas a proteger la salud de los animales y reducir el riesgo de enfermedades en la explotación ovinocaprina. Su aplicación no se limita a la vacunación, la desparasitación o el tratamiento de animales enfermos, sino que comienza antes de la aparición de cualquier problema sanitario.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right").mb-3
            p.mb-0 Un programa sanitario eficaz considera el origen de los animales, el ingreso de personas y vehículos, la calidad del agua y los alimentos, las condiciones de las instalaciones, el manejo de residuos y cadáveres, los equipos utilizados y las prácticas de manejo. También contempla la presencia de animales silvestres, perros y otras especies que puedan actuar como vectores o reservorios de agentes infecciosos.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 En los pequeños rumiantes, la prevención adquiere especial importancia porque algunas enfermedades pueden pasar desapercibidas durante sus primeras etapas. Un animal que mantiene el consumo de alimento y se desplaza con normalidad puede estar eliminando agentes infecciosos o presentar una disminución productiva que aún no resulta evidente. Por esta razón, la vigilancia sanitaria diaria y el registro de información son herramientas fundamentales para detectar oportunamente alteraciones en la salud del rebaño.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt=''  style="width: 500px").m-auto
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Marco normativo para el manejo sanitario
      p.mb-5 En Colombia, el Instituto Colombiano Agropecuario (ICA) establece disposiciones orientadas a fortalecer la sanidad, la bioseguridad y la inocuidad en la producción primaria de ovinos y caprinos. Las principales disposiciones relacionadas con el manejo sanitario de estas explotaciones son las siguientes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
              h4.text-center Buenas Prácticas Ganaderas (BPG)
              .box___card_sinbordes_p
                p.mb-0.text-center Constituyen un sistema de aseguramiento de la inocuidad orientado a gestionar los riesgos biológicos, físicos y químicos presentes en la producción primaria. Su aplicación contribuye a establecer condiciones sanitarias adecuadas y a prevenir peligros que puedan afectar la calidad e inocuidad de los productos de origen animal.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
              h4.text-center Resolución ICA 00020277 de 2018
              .box___card_sinbordes_p
                p.mb-0.text-center Establece los requisitos sanitarios y de inocuidad para obtener la certificación en Buenas Prácticas Ganaderas en la producción primaria de ovinos y caprinos. Esta resolución constituye el referente normativo específico para la certificación BPG de estas especies.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img5.png', alt="" ).m-auto
              h4.text-center Autorización Sanitaria y de Inocuidad (ASI)
              .box___card_sinbordes_p
                p.mb-0.text-center Es aplicable, entre otras especies, a ovinos y caprinos destinados a la producción de carne o leche para consumo humano. Se fundamenta en la Resolución 115708 de 2021, modificada por la Resolución 16023 de 2023, y establece requisitos relacionados con las condiciones sanitarias y de inocuidad de los predios productores.
      p.mb-0 Estas disposiciones orientan la implementación de medidas sanitarias y de bioseguridad que contribuyen a proteger la salud animal y la inocuidad de los productos obtenidos en la explotación.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Conceptos fundamentales del manejo sanitario
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Antes de profundizar en la planificación sanitaria, es necesario reconocer los conceptos que fundamentan la prevención, la vigilancia y el control de enfermedades en los sistemas de producción ovinocaprina: 
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sanidad animal
                  p.mb-0 Es el estado sanitario de la población animal y el conjunto de acciones destinadas a conservarlo, prevenir enfermedades, diagnosticarlas oportunamente y controlarlas de acuerdo con las disposiciones de la autoridad sanitaria y el criterio profesional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bioseguridad
                  p.mb-0 Es el conjunto de procedimientos físicos, administrativos y sanitarios que disminuyen la probabilidad de ingreso y propagación de agentes infecciosos en el predio. Comprende medidas preventivas aplicadas a los animales, las personas, los equipos, las instalaciones y las prácticas de manejo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prevención
                  p.mb-0 Comprende las acciones que se realizan antes de que ocurra una enfermedad o que permiten disminuir su frecuencia y gravedad. Incluye el manejo adecuado de los animales, la higiene, la vacunación cuando corresponda, el control parasitario basado en riesgo, la cuarentena y la vigilancia sanitaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vigilancia sanitaria
                  p.mb-0 Consiste en el seguimiento sistemático de los animales, los signos clínicos, la producción, la mortalidad, los abortos, los tratamientos y otros eventos relevantes. Su finalidad es detectar cambios que puedan indicar la presencia de un problema sanitario y facilitar la intervención oportuna.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuarentena
                  p.mb-0 Es la separación temporal y controlada de animales recién ingresados o de origen sanitario no compatible con el rebaño residente. Durante este período, se evita el contacto directo o indirecto con los demás animales mientras se verifica su condición sanitaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aislamiento
                  p.mb-0 Consiste en separar a un animal o grupo de animales enfermos, sospechosos o expuestos a una enfermedad, con el propósito de reducir el riesgo de transmisión al resto del rebaño y facilitar su evaluación y manejo sanitario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inocuidad
                  p.mb-0 Es la condición mediante la cual los alimentos obtenidos del sistema productivo no generan un peligro inaceptable para el consumidor cuando son producidos y utilizados conforme a las condiciones previstas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bienestar animal
                  p.mb-0 Es el estado físico y mental del animal en relación con las condiciones en que vive y muere. En los sistemas productivos debe considerarse de manera integral con la sanidad, la alimentación, las instalaciones, el manejo, el transporte y los procedimientos realizados a los animales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Estos conceptos constituyen la base para establecer un plan sanitario que responda a las condiciones particulares de la explotación y permita organizar las actividades de prevención, vigilancia y control de enfermedades.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Plan sanitario en la explotación ovinocaprina
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img15.png')})` }")
        .bloque-texto-g__texto.p-4
          p #[b El plan sanitario es el documento operativo que organiza, por períodos y categorías animales, las actividades necesarias para prevenir, vigilar y controlar los problemas de salud del rebaño]. Su elaboración debe responder a las características y necesidades específicas de cada predio.
      .bg___color_1
        .px-5
          p.mb-5 No existe un calendario sanitario universal que pueda aplicarse sin modificaciones a todas las explotaciones, debido a que los riesgos dependen de factores como el clima, la altitud, la humedad, el sistema de pastoreo, la densidad animal, el origen de los animales, el historial de enfermedades, la presencia de otros rumiantes, el manejo reproductivo, el destino de la producción y los programas sanitarios oficiales. Por esta razón, la planificación sanitaria debe responder a cinco preguntas fundamentales:
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              .row.align-items-center.mb-4
                .col-xl-6.mb-4.mb-lg-0
                  .box___out_icon_6(data-aos="flip-up").mb-4
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 ¿Qué problema sanitario se pretende prevenir o controlar?
                  .box___out_icon_6(data-aos="flip-up").mb-4
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 ¿A qué animales o categorías productivas se aplicará la medida?
                  .box___out_icon_6(data-aos="flip-up")
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 ¿Cuándo se realizará la actividad?
                .col-xl-6
                  .box___out_icon_6(data-aos="flip-up").mb-4
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 ¿Cómo se ejecutará el procedimiento?
                  .box___out_icon_6(data-aos="flip-up")
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 ¿Quién será responsable de su cumplimiento?
          p.mb-5 Además, el plan debe establecer las evidencias que quedarán registradas y las acciones que se adoptarán cuando se detecten desviaciones respecto a las condiciones sanitarias previstas.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
            .col
              h3 Diagnóstico inicial del predio
          .row.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0  Antes de establecer las actividades sanitarias, es necesario realizar un diagnóstico inicial del sistema productivo que permita identificar las características del rebaño, las condiciones de manejo y los antecedentes sanitarios de la explotación. Para desarrollar este diagnóstico, el responsable debe recopilar información sobre los siguientes aspectos:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img20.png", alt="" style="width: 300px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Caracterización del rebaño").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Comprende el número de animales, las especies, las razas o cruces, las categorías productivas y el origen de los ejemplares. Esta información permite reconocer la composición de la población animal y sus necesidades sanitarias particulares.
                .row(titulo="Condiciones del sistema productivo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Incluyen el sistema de alimentación, las fuentes de agua, las instalaciones y el manejo reproductivo. Su evaluación permite identificar condiciones que pueden favorecer la aparición o propagación de enfermedades.
                .row(titulo="Antecedentes sanitarios").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Comprenden la mortalidad histórica, los abortos, las enfermedades frecuentes, los tratamientos utilizados, los problemas podales y la presencia de parásitos. Estos antecedentes permiten reconocer problemas recurrentes y orientar las medidas preventivas.
          .row.align-items-center.mb-5
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Información diagnóstica y preventiva").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Incluye los resultados de laboratorio y los antecedentes de vacunación del rebaño. Estos datos contribuyen a establecer las actividades de vigilancia, prevención y control de acuerdo con la condición sanitaria de los animales.
                .row(titulo="Movilización e ingreso de animales").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Comprende la frecuencia de compra de animales, la participación en ferias o mercados y la movilización hacia otros predios. Estos movimientos pueden modificar el nivel de riesgo sanitario de la explotación.
                .row(titulo="Contacto con otros predios").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Considera la presencia de cercas o fuentes de agua compartidas con otros rebaños, así como el ingreso de visitantes y vehículos externos. Estas condiciones deben incorporarse al análisis de riesgo por su posible relación con la entrada y propagación de agentes infecciosos.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img21.png", alt="" style="width: 300px").m-auto
      p.mb-5 La información recopilada durante el diagnóstico constituye el punto de partida para definir las prioridades sanitarias y establecer las medidas de prevención y control que requiere la explotación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Componentes mínimos del plan sanitario
      p.mb-5 A continuación, se presenta un video sobre los componentes fundamentales del plan sanitario del rebaño, destacando las actividades de prevención, vigilancia y control de enfermedades, así como las medidas necesarias para garantizar la salud, el bienestar animal y el adecuado manejo sanitario del sistema productivo.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Componentes del plan sanitario del rebaño
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Organización del plan por categorías animales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right").mb-0
            p La susceptibilidad a las enfermedades y las necesidades sanitarias de los pequeños rumiantes cambian de acuerdo con la edad y el estado fisiológico. Por ello, el plan sanitario debe diferenciar las siguientes categorías animales:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reproductores machos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Hembras de reemplazo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Hembras gestantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Hembras próximas al parto.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Hembras lactantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Corderos o cabritos lactantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Animales destetos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Animales de levante.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Animales de engorde.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img22.png', alt=''  style="width: 500px").m-auto
      p.mb-5 Esta clasificación permite establecer prioridades sanitarias según las condiciones particulares de cada grupo. Para orientar su aplicación, se deben considerar los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___1
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img23.png', alt="" ).m-auto
              h4.text-center Neonatos
              .box___card_sinbordes_p
                p.mb-0.text-center La prioridad sanitaria es garantizar el consumo oportuno y adecuado de calostro, mantener la higiene del área de parto e identificar tempranamente signos de hipotermia, inanición, diarrea, onfalitis, neumonía y septicemia. Estas medidas son fundamentales durante las primeras etapas de vida.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100.color___1
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img24.png', alt="" ).m-auto
              h4.text-center Animales jóvenes
              .box___card_sinbordes_p
                p.mb-0.text-center Durante el crecimiento y el levante adquiere mayor importancia la vigilancia parasitaria, nutricional y respiratoria. El seguimiento debe considerar las condiciones sanitarias que puedan afectar el desarrollo y el estado general de los animales.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___1
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img25.png', alt="" ).m-auto
              h4.text-center Adultos reproductores
              .box___card_sinbordes_p
                p.mb-0.text-center La vigilancia debe centrarse en la condición corporal, la cojera, las lesiones genitales, los problemas reproductivos y las enfermedades que puedan comprometer la fertilidad. Estas condiciones deben considerarse dentro del seguimiento sanitario y reproductivo del rebaño.
      p.mb-5 La organización del plan por categorías permite ajustar las actividades sanitarias a las necesidades de los animales y orientar las intervenciones según su etapa de desarrollo y condición fisiológica.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Planificación de la vacunación
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La vacunación es una herramienta preventiva que contribuye a proteger la salud del rebaño, pero no sustituye las medidas de bioseguridad. Su planificación debe responder a los riesgos sanitarios presentes en la explotación y a las indicaciones oficiales o del médico veterinario. Antes de aplicar un biológico, es necesario verificar los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img26.svg', alt="" style="max-width: 90px").m-auto
              h4.mb-0.text-center Registro sanitario vigente del producto.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img27.svg', alt="" style="max-width: 90px").m-auto
              h4.mb-0.text-center Condiciones de conservación indicadas por el fabricante.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img28.svg', alt="" style="max-width: 90px").m-auto
              h4.mb-0.text-center Fecha de vencimiento del biológico.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img26.svg', alt="" style="max-width: 90px").m-auto
              h4.mb-0.text-center Especie y catagoría animal para las cuales está indicado.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img28.svg', alt="" style="max-width: 90px").m-auto
              h4.mb-0.text-center Vía de administración y dosis señaladas en la etiqueta.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img29.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .box___style_1.color___2(data-aos="fade-left").mb-3
            p.mb-0 La aplicación debe realizarse con material limpio y mediante procedimientos que minimicen el riesgo de contaminación y lesiones en los animales. Asimismo, cada intervención debe quedar documentada mediante el registro de la fecha, el producto utilizado, el número de lote, la fecha de vencimiento, la identificación del animal o lote tratado, la dosis, la vía de administración y el responsable de la aplicación.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 No es técnicamente adecuado adoptar de manera automática el calendario de vacunación de otra explotación, debido a que las condiciones epidemiológicas y los riesgos sanitarios pueden ser diferentes.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Control parasitario
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img30.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los parásitos gastrointestinales representan uno de los problemas sanitarios que pueden comprometer la producción de #[b pequeños rumiantes], especialmente en condiciones de #[b humedad, alta carga animal y contaminación de las pasturas].
      p.mb-5 El control parasitario debe evitar la administración rutinaria e indiscriminada de antiparasitarios. Su objetivo es mantener la salud y la productividad del rebaño y, al mismo tiempo, reducir la presión de selección de resistencia antihelmíntica. Para orientar la vigilancia parasitaria, se deben considerar los siguientes indicadores y herramientas:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img31.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Condición corporal y crecimiento
                  p.mb-0 El seguimiento de la condición corporal, el crecimiento y la ganancia de peso permite identificar alteraciones que pueden estar relacionadas con problemas parasitarios. Estos indicadores deben interpretarse junto con las demás condiciones sanitarias y productivas del animal.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img32.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Signos clínicos
                  p.mb-0 La coloración de las mucosas, cuando sea pertinente, la consistencia de las heces y otros signos clínicos contribuyen a identificar posibles alteraciones asociadas al parasitismo. Su valoración debe realizarse de manera integral y considerar el estado general del animal.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img33.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Historial sanitario del lote
                  p.mb-0 Los antecedentes de parasitismo, las condiciones de manejo y la respuesta a tratamientos anteriores aportan información para establecer el nivel de riesgo. Su análisis permite orientar las decisiones de vigilancia y control.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img34.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Pruebas diagnósticas
                  p.mb-0 El recuento de huevos por gramo de heces y otras pruebas disponibles permiten obtener evidencias para apoyar la identificación y el seguimiento del parasitismo. Su utilización debe responder a las necesidades sanitarias de la explotación.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Método FAMACHA
                  p.mb-0 Es una herramienta complementaria para valorar la anemia asociada a ciertos parásitos mediante la coloración de las mucosas. Su aplicación puede apoyar la vigilancia parasitaria, pero no sustituye el diagnóstico integral del animal.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El tratamiento antiparasitario debe definirse con base en el riesgo sanitario y la respuesta de los animales. Cuando sea posible, se recomienda evaluar su eficacia mediante controles posteriores y evitar los tratamientos masivos sin justificación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Salud reproductiva
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl
              p.mb-0 #[b La salud reproductiva] requiere una vigilancia especial, debido a que #[b los abortos, el nacimiento de crías débiles, la infertilidad, la retención de placenta, la metritis y la mortalidad neonatal] pueden representar pérdidas productivas y constituir señales de enfermedades transmisibles.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
          .box___style_1(data-aos="fade-right")
            p.mb-0 Los abortos deben registrarse indicando la fecha, la identificación de la hembra, la etapa aproximada de gestación y las características del evento. Cuando se presente un incremento inusual, es necesario solicitar una evaluación veterinaria y considerar la toma de muestras bajo condiciones de bioseguridad. Dentro de la vigilancia reproductiva, la brucelosis merece especial atención, debido a que el ICA la reconoce como una enfermedad de control oficial en ovinos y caprinos, y a que Brucella melitensis es zoonótica.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img36.png', alt=''  style="width: 500px").m-auto
      p.mb-5 Los abortos, las muertes fetales y el nacimiento de crías débiles pueden estar asociados con esta enfermedad. Ante una sospecha, no se debe improvisar un tratamiento; es necesario activar la ruta sanitaria correspondiente y contactar al ICA o al médico veterinario.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Salud podal y locomoción
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La salud podal es un componente fundamental del manejo sanitario, debido a que las alteraciones locomotoras pueden afectar el bienestar y la productividad de los pequeños rumiantes.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.color___2(data-aos="fade-right").mb-3
            p.mb-0 La cojera puede reducir el consumo de alimento, limitar el acceso al agua, alterar la reproducción, incrementar el tiempo de descanso inadecuado y disminuir la productividad.
          p La revisión sanitaria debe incluir la evaluación de los siguientes aspectos:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Marcha, postura y apoyo de las extremidades.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Crecimiento anormal de las pezuñas.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Presencia de lesiones e inflamaciones.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Humedad persistente en las extremidades.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Presencia de cuerpos extraños.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img37.png', alt=''  style="width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img38.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las medidas preventivas incluyen mantener pisos seguros, evitar la acumulación de humedad y materia orgánica, establecer áreas secas de descanso y revisar periódicamente las pezuñas. Ante la identificación de alteraciones locomotoras, es necesario intervenir oportunamente para reducir sus efectos sobre la salud, el bienestar y el desempeño productivo de los animales.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Manejo de medicamentos veterinarios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El manejo responsable de medicamentos veterinarios es fundamental para proteger la salud de los animales y garantizar la inocuidad de los productos destinados al consumo humano. Los medicamentos deben almacenarse de acuerdo con las condiciones indicadas por el fabricante y mantenerse debidamente identificados. No deben utilizarse productos vencidos, deteriorados o sin identificación.
          .box___style_1.color___2(data-aos="fade-right")
            p.mb-0 El uso de antibióticos debe responder a una justificación sanitaria y al criterio profesional. Su administración no debe sustituir las medidas de higiene, bioseguridad y manejo adecuado de los animales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img39.png', alt=''  style="width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img40.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 En las explotaciones destinadas a la producción de carne o leche, es necesario controlar los tiempos de retiro de los medicamentos administrados. Para ello, el registro de tratamientos debe permitir identificar:
          .box___style_1.fit___box_2(data-aos="fade-left")
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El animal que recibió el medicamento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El producto utilizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La dosis administrada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La vía de administración.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La fecha del tratamiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El momento en que el animal o sus productos pueden reincorporarse al circuito de producción o comercialización.
      p.mb-0 El cumplimiento de estas medidas permite mantener la trazabilidad de los tratamientos veterinarios y prevenir la presencia de residuos de medicamentos en los alimentos de origen animal.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Esquema de bioseguridad para pequeños rumiantes
      p.mb-5 La bioseguridad comprende las medidas destinadas a reducir el riesgo de ingreso y propagación de agentes infecciosos en la explotación ovinocaprina. Su aplicación requiere barreras complementarias que se incorporen a las actividades habituales del predio. Las principales barreras de bioseguridad y sus medidas de aplicación son las siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img41.png", alt="" style="width: 330px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Control de ingreso de animales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de incorporar animales, se deben revisar su procedencia, identificación, condición sanitaria, antecedentes de vacunación y tratamientos. Los animales nuevos deben permanecer en una zona de cuarentena separada del rebaño residente. La duración de este período y las pruebas necesarias se definen según el riesgo y la orientación veterinaria.
            .row(titulo="Control de personas y visitantes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se debe establecer un punto de ingreso, limitar el acceso a las áreas productivas y aplicar medidas de higiene para el personal y los visitantes. Las botas, la ropa y las herramientas pueden transportar agentes infecciosos, especialmente cuando las personas se desplazan entre predios.
            .row(titulo="Control de vehículos y equipos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los vehículos deben circular por rutas definidas para evitar su ingreso innecesario a las áreas donde permanecen los animales. Los equipos e instrumentos compartidos entre lotes deben limpiarse y desinfectarse según su uso, especialmente cuando se trasladan de animales enfermos a sanos.
            .row(titulo="Agua y alimentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las fuentes de agua deben protegerse de la contaminación y los bebederos deben mantenerse limpios. Los alimentos deben almacenarse en lugares protegidos de la humedad, las plagas y otros animales. Los comederos deben mantenerse libres de contaminación con estiércol y tierra.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Manejo de estiércol, residuos y cadáveres").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El estiércol debe manejarse para reducir el contacto con los animales y evitar la contaminación de las fuentes de agua. Los cadáveres deben retirarse oportunamente y disponerse conforme a las disposiciones aplicables. Las agujas, jeringas, frascos y demás residuos de los procedimientos sanitarios deben manejarse de forma segura.
            .row(titulo="Control de plagas y animales externos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se deben identificar y reducir las condiciones que favorecen la presencia de roedores, aves, insectos y otros animales en las áreas productivas. Las medidas incluyen mantener el orden y la limpieza, proteger los alimentos y evitar el contacto no controlado de animales externos con el rebaño.
            .row(titulo="Aislamiento de animales enfermos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los animales con signos clínicos relevantes deben identificarse y evaluarse. Cuando exista sospecha de una enfermedad transmisible, se debe reducir su contacto con el rebaño sano y mantener medidas de higiene durante su atención.
            .row(titulo="Limpieza y desinfección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Primero se debe retirar el estiércol, el barro y la materia orgánica; después, lavar y aplicar el desinfectante adecuado. Se deben respetar la concentración, el tiempo de contacto y las condiciones de uso indicadas por el fabricante.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img42.png", alt="" style="width: 330px").m-auto
      p.mb-5 La eficacia del esquema depende de la aplicación constante de todas las barreras y de la asignación de responsabilidades para su cumplimiento.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Secuencia operativa de bioseguridad
      p.mb-5 Las actividades de bioseguridad deben seguir un orden definido para evitar la contaminación entre áreas y grupos de animales.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img43.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ingreso de animales
                  p.mb-0.text-center Selección de origen, revisión sanitaria, cuarentena, evaluación e incorporación al rebaño.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ingreso de personas
                  p.mb-0.text-center Punto de acceso, medidas de higiene, uso de ropa y botas adecuadas y acceso controlado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ingreso de vehículos
                  p.mb-0.text-center Zona definida, limpieza cuando corresponda, circulación restringida y salida controlada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Atención de animales enfermos
                  p.mb-0.text-center Detección, identificación, aislamiento, evaluación y manejo según el diagnóstico.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img48.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Limpieza de instalaciones
                  p.mb-0.text-center Retiro de materia orgánica, lavado, desinfección, secado y reutilización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img49.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Manejo de residuos y cadáveres
                  p.mb-0.text-center Retiro, almacenamiento temporal seguro cuando corresponda y disposición conforme a los requisitos aplicables.
      p.mb-0 Estas secuencias deben incorporarse a los procedimientos habituales de la explotación.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Identificación de riesgos sanitarios en la explotación
      .box___color-text-imgright(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 La identificación de riesgos sanitarios permite reconocer las condiciones que pueden favorecer la aparición o transmisión de enfermedades y establecer prioridades de intervención.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t1/img50.png', alt='' style="width: 500px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Fuentes y clasificación de los riesgos sanitarios
      p.mb-5 Los riesgos pueden originarse en los animales, las personas, los vehículos, el ambiente, los alimentos, las instalaciones y las prácticas de manejo. Según su naturaleza, se clasifican en las siguientes categorías:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img51.png', alt="" ).m-auto
              h4.text-center Riesgos biológicos
              .box___card_sinbordes_p
                p.mb-0.text-center Comprenden bacterias, virus, parásitos, hongos y otros agentes capaces de producir enfermedades. Pueden estar asociados con animales infectados, secreciones, heces, leche, placenta, fetos, cadáveres, agua, alimentos, vectores o superficies contaminadas.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img52.png', alt="" ).m-auto
              h4.text-center Riesgos químicos
              .box___card_sinbordes_p
                p.mb-0.text-center Se relacionan con medicamentos, desinfectantes, plaguicidas, productos de limpieza y contaminantes del agua o los alimentos. Pueden afectar la salud de los animales y la inocuidad de los productos, especialmente cuando no se respetan las condiciones de uso o los tiempos de retiro de los medicamentos.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img53.png', alt="" ).m-auto
              h4.text-center Riesgos físicos
              .box___card_sinbordes_p
                p.mb-0.text-center Comprenden alambres, clavos, superficies cortantes, pisos resbaladizos, estructuras inestables, equipos defectuosos y espacios donde los animales pueden quedar atrapados. Estas condiciones pueden causar lesiones durante el alojamiento y el manejo.
      p.mb-5 La vigilancia sanitaria debe considerar las enfermedades de control oficial y de declaración obligatoria señaladas por el ICA, así como las rutas de notificación establecidas por la autoridad sanitaria.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Análisis de riesgos sanitarios
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  Para establecer prioridades, se debe considerar la probabilidad de ocurrencia de cada evento, la gravedad de sus consecuencias y la posibilidad de detectarlo oportunamente. Un riesgo de alta probabilidad y consecuencias graves requiere una intervención prioritaria. Las situaciones frecuentes, sus posibles consecuencias y las medidas preventivas correspondientes son las siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingreso de animales sin cuarentena
                  p.mb-0 Puede introducir enfermedades transmisibles. Se debe revisar la procedencia y la documentación sanitaria de los animales, aplicar la cuarentena y realizar la evaluación correspondiente antes de incorporarlos al rebaño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img54.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bebederos contaminados
                  p.mb-0 Pueden favorecer la transmisión de agentes entéricos y disminuir el consumo de agua. Se deben proteger las fuentes de suministro, limpiar los bebederos y revisar periódicamente sus condiciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img55.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pastoreo continuo con alta carga animal
                  p.mb-0 Puede aumentar la contaminación parasitaria y afectar la condición corporal. Se debe ajustar la carga animal, aplicar rotación cuando sea viable y mantener la vigilancia sanitaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img56.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Herramientas compartidas sin medidas de higiene
                  p.mb-0 Pueden facilitar la transmisión de agentes infecciosos entre animales enfermos y sanos. Se deben limpiar y desinfectar los equipos y organizar el flujo de trabajo entre los diferentes grupos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img57.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento incorrecto de medicamentos
                  p.mb-0 Puede ocasionar pérdida de eficacia o uso de productos deteriorados. Se deben controlar las fechas de vencimiento, mantener las condiciones de almacenamiento indicadas y diligenciar los registros correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img58.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Este análisis permite relacionar los riesgos identificados con las medidas que deben priorizarse en el predio.
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Manejo y aplicación de medidas sanitarias preventivas
      p.mb-5 Las medidas sanitarias preventivas deben incorporarse a las actividades habituales de la explotación mediante procedimientos definidos, responsables y registros. Las principales medidas se organizan según su finalidad:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img59.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Vigilancia sanitaria diaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de mover o manipular intensamente a los animales, se deben revisar su comportamiento, apetito, consumo de agua, marcha, postura, condición corporal, respiración, secreciones, piel, pelo o lana, presencia de diarrea, inflamaciones, heridas y eventos de mortalidad. Un animal que se aparta del grupo, deja de comer o presenta cojera requiere atención.
            .row(titulo="Cuarentena de animales nuevos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe planificarse antes de adquirir animales y realizarse en un espacio separado, con agua, alimento y utensilios propios. Las pruebas diagnósticas, los tratamientos y las vacunaciones se definen según el riesgo sanitario y la orientación profesional.
            .row(titulo="Aislamiento de animales enfermos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se debe identificar y registrar al animal afectado, reducir su contacto con el rebaño sano y solicitar orientación veterinaria. No se deben iniciar tratamientos sin justificación sanitaria, debido a que el uso incorrecto de antibióticos puede retrasar el diagnóstico, generar residuos y contribuir a la resistencia antimicrobiana.
            .row(titulo="Limpieza y desinfección de instalaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los corrales, las áreas de alojamiento, las parideras, las salas de ordeño y los equipos deben mantenerse libres de acumulaciones de estiércol y humedad. La limpieza física debe realizarse antes de aplicar el desinfectante, respetando las indicaciones del fabricante. Se requiere especial atención en las áreas destinadas a los neonatos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Bienestar animal y manejo humanitario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se debe garantizar acceso suficiente a agua y alimento, descanso, protección ambiental, ventilación, iluminación, espacio e instalaciones seguras. El manejo debe respetar el comportamiento gregario de los pequeños rumiantes y evitar golpes, gritos, movimientos bruscos, dolor y lesiones innecesarias. Los procedimientos que puedan causar dolor deben realizarse con técnicas apropiadas y orientación profesional.
            .row(titulo="Transporte y movilización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes del traslado, se deben revisar la aptitud de los animales para viajar, las condiciones del vehículo, la ventilación, el espacio disponible, los pisos, los accesos y los procedimientos de carga y descarga. En Colombia, debe considerarse la Resolución 20223040006915 de 2022, relacionada con el transporte y manejo de animales en pie.
            .row(titulo="Notificación sanitaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ante signos compatibles con enfermedades de control oficial o eventos sanitarios inusuales, el productor debe acudir a los canales establecidos por el ICA y seguir las instrucciones de la autoridad sanitaria, independientemente del tamaño del predio.
            .row(titulo="Registros sanitarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Deben incluir la identificación del animal o lote, la fecha y descripción del evento, los signos clínicos, el diagnóstico cuando exista, el producto utilizado, la dosis, la vía de administración, el responsable y el resultado. Estos datos permiten identificar tendencias y orientar las decisiones de manejo.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img60.png", alt="" style="width: 350px").m-auto
      p.mb-0 Por ejemplo, un aumento de cojeras requiere revisar las condiciones de los pisos, la humedad, las pezuñas y el manejo del pastoreo. Si aumentan los casos de diarrea neonatal, es necesario revisar la higiene, el consumo de calostro, el ambiente, la densidad animal y el manejo de las madres.
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Integración práctica: ejemplo de plan sanitario anual
      p.mb-5 El plan sanitario anual debe organizarse según las etapas del ciclo productivo y ajustarse al riesgo epidemiológico del predio y a las indicaciones del médico veterinario. El siguiente ejemplo orienta la planificación de actividades, pero no constituye un calendario universal de vacunación o desparasitación.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Etapas del ciclo productivo caprino
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img61.png', alt='Infografía circular sobre las cinco etapas del manejo sanitario y reproductivo caprino: antes del inicio del ciclo productivo, durante la reproducción y gestación, durante el parto y período neonatal, durante el levante, crecimiento y engorde, y antes de la movilización o comercialización. ').m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img62.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Antes del inicio del ciclo productivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Actualizar el inventario y la identificación del rebaño; revisar antecedentes de mortalidad, abortos, tratamientos, cojeras y enfermedades; verificar instalaciones, comederos, bebederos y almacenamiento de insumos. También se deben definir las áreas de cuarentena y aislamiento, actualizar los contactos del médico veterinario y del ICA, y programar las actividades de vacunación y vigilancia parasitaria y reproductiva según el riesgo.
            .row(titulo="Durante la reproducción y gestación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registrar los servicios, las hembras servidas, el diagnóstico de gestación cuando se realice y la fecha estimada de parto. Vigilar la condición corporal y la alimentación, registrar abortos y nacimientos anormales, preparar las áreas de parto y evitar cambios bruscos de manejo.
            .row(titulo="Durante el parto y el período neonatal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Vigilar a la madre y a la cría; comprobar que la cría respire, se incorpore y tenga acceso al calostro; revisar el ombligo y mantener la higiene. Identificar signos de diarrea, hipotermia, debilidad o dificultad respiratoria, y registrar nacimientos, mortalidad y tratamientos.
            .row(titulo="Durante el levante, crecimiento y engorde").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Controlar el peso o los indicadores de crecimiento, la condición corporal y el consumo de alimento. Evaluar signos de parasitosis, revisar la locomoción y las pezuñas, mantener las instalaciones secas y seguras, y comprobar la calidad y disponibilidad del agua.
            .row(titulo="Antes de la movilización o comercialización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Verificar la identificación, la documentación y los requisitos sanitarios aplicables, así como la aptitud de los animales para el traslado. Confirmar los tiempos de retiro de los medicamentos administrados y preparar el transporte para reducir el estrés y las lesiones.
      p.mb-0 El plan debe actualizarse de acuerdo con los eventos sanitarios registrados y las condiciones de cada etapa productiva.
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.8 Lista de verificación sanitaria para el productor o aprendiz
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  Durante la visita al predio, el aprendiz puede utilizar las siguientes preguntas para identificar condiciones que requieren intervención. Las respuestas deben sustentarse en la inspección de las instalaciones, los animales y los registros disponibles:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Identificación e ingreso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img63.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Identificación e ingreso
              p.mb-0 ¿El inventario está actualizado y los animales están identificados? ¿Se conocen los antecedentes sanitarios de los animales nuevos? ¿Existen áreas de cuarentena y aislamiento? ¿Se controla el ingreso de personas y vehículos?
        .py-3.py-md-4(titulo="Agua, alimentación e instalaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img64.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agua, alimentación e instalaciones
              p.mb-0 ¿Las fuentes de agua están protegidas y los bebederos se limpian periódicamente? ¿Los alimentos están protegidos de la humedad y las plagas? ¿Existe un programa de limpieza y desinfección?
        .py-3.py-md-4(titulo="Vigilancia y manejo sanitario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img65.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Vigilancia y manejo sanitario
              p.mb-0 ¿Se revisa diariamente el estado de salud del rebaño? ¿Se controlan la condición corporal, la locomoción, las pezuñas y los signos de parasitosis? ¿Se registran los tratamientos, abortos, enfermedades y eventos de mortalidad?
        .py-3.py-md-4(titulo="Medicamentos y notificación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img66.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Medicamentos y notificación
              p.mb-0 ¿Se controlan las fechas de vencimiento y las condiciones de almacenamiento de los medicamentos? ¿Existe un procedimiento para notificar eventos sanitarios de importancia?
        .py-3.py-md-4(titulo="Bienestar animal y emergencias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img67.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bienestar animal y emergencias
              p.mb-0 ¿Los animales cuentan con agua, alimento, descanso e instalaciones seguras? ¿El manejo evita golpes, gritos y lesiones? ¿Existe un plan para emergencias sanitarias y el personal conoce sus responsabilidades?
      p.mb-0 Las respuestas permiten establecer prioridades de mejora y realizar el seguimiento del plan sanitario.
      Separador
      #t_1_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.9 Errores frecuentes en el manejo sanitario y medidas correctivas
      p.mb-5 La identificación de prácticas inadecuadas permite corregir fallas que incrementan el riesgo de enfermedades o reducen la eficacia de las medidas preventivas:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Incorporar animales sin cuarentena
                  p.mb-0 La ausencia de signos clínicos no garantiza que estén libres de infección. Se debe aplicar la cuarentena y realizar la evaluación sanitaria antes de incorporarlos al rebaño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img68.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desparasitar a todos los animales cada mes
                  p.mb-0 El control debe basarse en el riesgo sanitario, las evidencias disponibles y la respuesta al tratamiento. La administración rutinaria e indiscriminada favorece la resistencia antihelmíntica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img69.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desinfectar sin realizar la limpieza previa
                  p.mb-0 La materia orgánica puede disminuir la eficacia del desinfectante. Primero se deben limpiar las superficies y después aplicar el producto correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img70.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compartir equipos sin medidas de higiene
                  p.mb-0 Los equipos pueden transmitir agentes infecciosos entre animales enfermos y sanos. Se deben limpiar, desinfectar y utilizar siguiendo un orden de trabajo definido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img71.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Administrar antibióticos ante un aborto sin investigar su causa
                  p.mb-0 Los abortos pueden tener causas infecciosas y no infecciosas. Es necesario registrar el evento, investigar sus posibles causas y solicitar orientación veterinaria.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img72.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reducir el bienestar animal al suministro de alimento
                  p.mb-0 El bienestar también comprende el agua, el descanso, la salud, las instalaciones, el manejo y las condiciones que permiten expresar conductas naturales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img73.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Considerar que la vacunación reemplaza la bioseguridad
                  p.mb-0 La vacunación no evita por sí sola la introducción de todos los agentes infecciosos ni corrige las deficiencias de higiene y manejo. Debe complementarse con las demás medidas preventivas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img74.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prescindir de los registros sanitarios
                  p.mb-0 Los registros permiten identificar tendencias, documentar tratamientos, controlar tiempos de retiro y mantener la trazabilidad. Deben diligenciarse de forma continua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img75.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La corrección de estas prácticas fortalece la prevención de enfermedades y el seguimiento sanitario de la explotación ovinocaprina.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
