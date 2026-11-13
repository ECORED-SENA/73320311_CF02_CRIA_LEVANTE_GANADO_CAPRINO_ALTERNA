<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La reproducción y el mejoramiento genético constituyen procesos fundamentales para el desarrollo de la producción caprina, ya que permiten fortalecer las características productivas y reproductivas de los animales. Su adecuada implementación requiere comprender el funcionamiento del sistema reproductivo, las etapas del ciclo estral, la gestación y el parto, así como los factores que influyen en la fertilidad y el desempeño del rebaño.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La planificación reproductiva y la selección de reproductores deben responder a los objetivos de cada explotación, considerando la producción de leche, carne o doble propósito. Para ello, es necesario evaluar las características genéticas, productivas, sanitarias y funcionales de los animales, establecer criterios de selección y descarte, organizar los apareamientos y mantener registros que permitan orientar las decisiones de mejoramiento.
          .box___style_1(data-aos="fade-left")
            p.mb-0 Asimismo, la integración del manejo sanitario, nutricional y reproductivo contribuye a prevenir enfermedades, favorecer el desarrollo de las crías y mejorar progresivamente los resultados de la explotación. El seguimiento de los planes de manejo y la evaluación de los indicadores productivos y reproductivos permiten identificar oportunidades de mejora y promover una producción caprina organizada, eficiente y sostenible.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
