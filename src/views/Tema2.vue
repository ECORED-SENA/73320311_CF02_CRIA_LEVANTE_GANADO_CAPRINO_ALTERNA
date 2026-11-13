<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Vacunación e inmunización de pequeños rumiantes
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p #[b La vacunación es un procedimiento sanitario] que comienza con la identificación del riesgo y termina con la evaluación de la respuesta y el registro de lo realizado. Su resultado puede ser inadecuado si #[b el biológico] pierde la cadena de frío, está vencido, se aplica por una vía distinta de la indicada, se administra a una especie no autorizada o el animal se somete a un manejo excesivamente estresante.
          .box___style_1.color___2(data-aos="fade-right")
            p.mb-0 En ovinos y caprinos, el plan de inmunización debe ajustarse al sistema productivo, la edad, el estado fisiológico, la época del año, la densidad animal, el clima, la presencia regional de agentes infecciosos, los antecedentes sanitarios, el ingreso y la movilización de animales, la participación en eventos y el destino de los productos. También debe distinguir entre las medidas obligatorias y las recomendaciones veterinarias para prevenir enfermedades productivas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt=''  style="width: 500px").m-auto
      .row.align-items-center
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 El ICA incluye la vacunación entre determinadas estrategias preventivas. Sin embargo, las cuatro enfermedades de control oficial contempladas en su programa para ovinos y caprinos no se manejan mediante un calendario nacional de vacunación rutinaria para estas especies. Por ello, la inmunización debe abordarse como parte de un programa más amplio de prevención sanitaria.
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Conceptos básicos de vacunación e inmunización
      p.mb-5 Los siguientes conceptos permiten comprender la finalidad de los biológicos, los tipos de protección inmunitaria y los factores que influyen en la respuesta del animal:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img2.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Vacuna").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Producto biológico diseñado para estimular una respuesta inmunitaria específica frente a uno o varios agentes infecciosos o sus componentes. Prepara al sistema inmunitario para responder con mayor rapidez y eficacia ante una exposición posterior. Según el agente, el producto, la vía de aplicación y la respuesta individual, puede reducir la probabilidad de enfermedad clínica, la gravedad de los signos, la eliminación del agente o su circulación en la población; no necesariamente evita la infección.
            .row(titulo="Inmunización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proceso mediante el cual un individuo adquiere protección frente a un agente o enfermedad. Puede ser activa, cuando el propio sistema inmunitario responde a un antígeno mediante una vacuna o una infección, o pasiva, cuando el animal recibe anticuerpos producidos por otro individuo.
            .row(titulo="Inmunización activa").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El sistema inmunitario reconoce un antígeno y desarrolla una respuesta que puede incluir anticuerpos y células de memoria. La vacunación busca generar esta respuesta sin que el animal tenga que desarrollar la enfermedad natural. La protección puede tardar en aparecer y algunos biológicos requieren una segunda dosis inicial o refuerzos; por ello, debe respetarse la ficha técnica.
            .row(titulo="Inmunización pasiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se produce cuando el animal recibe anticuerpos ya formados. En corderos y cabritos, el ejemplo principal es la transferencia de inmunidad mediante la ingestión adecuada de calostro de buena calidad durante las primeras horas de vida. Esta protección es temporal: los anticuerpos maternos disminuyen progresivamente y pueden interferir con la respuesta a algunas vacunas. La edad de vacunación debe definirse según la ficha técnica y el criterio veterinario.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Antígeno y anticuerpo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un antígeno es una estructura reconocida por el sistema inmunitario que puede desencadenar una respuesta específica; puede proceder de un microorganismo completo, una proteína, una toxina modificada o una fracción del agente. Un anticuerpo es una proteína producida por células inmunitarias que reconoce estructuras específicas del antígeno. Su presencia no garantiza protección completa, pues esta también depende de la concentración y el tipo de anticuerpo, la inmunidad celular y otros factores.
            .row(titulo="Adyuvantes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Sustancias incorporadas a algunas vacunas para mejorar o modular la respuesta inmunitaria frente al antígeno. Pueden favorecer una respuesta más intensa o prolongada y relacionarse con reacciones locales posteriores a la aplicación. El producto debe administrarse conforme a su registro y ficha técnica.
            .row(titulo="Inmunidad de rebaño").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reducción de la transmisión cuando una proporción suficiente de individuos es inmune. El nivel necesario depende del agente y de su capacidad de transmisión. Una cobertura adecuada puede disminuir el riesgo de enfermedad, pero no reemplaza la bioseguridad.
            .row(titulo="Cobertura, eficacia y efectividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La cobertura es la proporción de animales que reciben el biológico conforme al protocolo. La eficacia corresponde a la capacidad de protección en condiciones controladas y la efectividad, a su desempeño en condiciones reales. Una cobertura alta no garantiza buena protección si el producto se conserva de manera inadecuada.
            .row(titulo="Contraindicaciones, precauciones y respuesta posvacunal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La ficha técnica puede establecer restricciones por especie, edad, gestación, estado sanitario, vía de aplicación o combinación con otros productos. Un animal gravemente enfermo puede responder de manera deficiente y requiere evaluación previa. Después de la aplicación pueden presentarse inflamación local transitoria, dolor o decaimiento breve. Una reacción intensa, progresiva o compatible con hipersensibilidad requiere atención veterinaria inmediata y un procedimiento de respuesta ante eventos adversos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img3.png", alt="" style="width: 400px").m-auto
      p.mb-0 Estos conceptos deben considerarse al seleccionar el biológico y establecer el protocolo de vacunación del predio.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Tipos de biológicos e inmunizantes
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  Los biológicos veterinarios comprenden productos utilizados para prevenir, diagnosticar o modificar respuestas relacionadas con agentes biológicos. En este apartado se abordan las vacunas y otros productos inmunológicos: 
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vacunas vivas atenuadas
                  p.mb-0 Contienen microorganismos vivos modificados para disminuir su capacidad de producir enfermedad, conservando la capacidad de estimular una respuesta inmunitaria. Pueden generar una respuesta robusta, pero requieren manejo cuidadoso y uso exclusivo en las especies, edades y condiciones indicadas por el fabricante.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vacunas inactivadas
                  p.mb-0 Contienen microorganismos inactivados que no se replican en el animal. Algunas requieren adyuvantes, dosis iniciales y refuerzos para obtener una respuesta adecuada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vacunas de subunidades o componentes
                  p.mb-0 Utilizan componentes específicos del agente en lugar del microorganismo completo. Buscan estimular la respuesta frente a antígenos seleccionados y presentan características de seguridad y respuesta que dependen de cada producto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Toxoides
                  p.mb-0 Se elaboran a partir de toxinas bacterianas modificadas para que pierdan su capacidad tóxica y conserven la capacidad de estimular anticuerpos contra la toxina. Su utilidad depende de la enfermedad y del producto registrado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vacunas recombinantes y tecnologías modernas
                  p.mb-0 Utilizan técnicas de ingeniería genética para producir antígenos o vectores que estimulan la respuesta inmunitaria. Su uso en pequeños rumiantes depende de los productos autorizados en el país y de sus indicaciones de registro.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Antisueros, inmunoglobulinas y otros inmunizantes pasivos
                  p.mb-0 Aportan anticuerpos preformados y producen inmunización pasiva. Su efecto suele ser más rápido que el de una vacuna, pero es temporal. No deben confundirse con las vacunas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img48.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img9.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img1.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 En Colombia, los biológicos destinados a uso veterinario deben contar con el registro y las condiciones de comercialización correspondientes ante el ICA. Antes de adquirirlos, se debe verificar su identificación, especie de destino, indicación, lote, vencimiento, almacenamiento y número de registro.
          .box___style_1(data-aos="fade-left")
            p.mb-0 Para la rabia de origen silvestre, el ICA señala que las vacunas utilizadas deben contar con el registro correspondiente y conservarse refrigeradas, sin congelación. El control de calidad debe aplicarse a cualquier biológico utilizado en el predio.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Manejo, conservación y aplicación de biológicos
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p La calidad de una vacuna depende tanto de su composición como de la conservación, la higiene, la manipulación y la vía de administración. Estas condiciones deben mantenerse desde la recepción del producto hasta su aplicación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Recepción, conservación y transporte
      p.mb-5 Antes de utilizar un biológico, se deben cumplir las siguientes condiciones:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Recepción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Recepción
              p.mb-0 Comprobar que el producto corresponda a la especie y finalidad previstas. Verificar nombre comercial, principio o antígeno, número de registro, lote y fecha de vencimiento; revisar la integridad del envase y las condiciones de transporte y temperatura cuando corresponda. Registrar la fecha y cantidad recibida, y almacenar el producto inmediatamente según la etiqueta.
        .py-3.py-md-4(titulo="Cadena de frío")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cadena de frío
              p.mb-0 Mantener las condiciones de temperatura indicadas en la etiqueta o ficha técnica desde la fabricación hasta la aplicación. Muchos biológicos requieren refrigeración, pero las condiciones exactas varían entre productos. No se deben congelar las vacunas que exigen refrigeración sin congelación ni exponerlas al sol, a vehículos calientes o a fuentes de calor.
        .py-3.py-md-4(titulo="Almacenamiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Almacenamiento
              p.mb-0 Mantener el refrigerador de biológicos ordenado, con termómetro o sistema de monitoreo y registro de temperatura. Evitar almacenar alimentos o bebidas junto a las vacunas y proteger los productos de la luz cuando la etiqueta lo indique.
        .py-3.py-md-4(titulo="Transporte al lugar de aplicación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Transporte al lugar de aplicación
              p.mb-0 Utilizar un contenedor apropiado que conserve la temperatura exigida. Evitar el contacto directo entre los frascos y los acumuladores de frío cuando exista riesgo de congelación; reducir la exposición al sol y las aperturas innecesarias del contenedor.
      p.mb-5 La temperatura de conservación no debe suponerse: siempre debe consultarse la información específica de cada producto.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Preparación y aplicación
      p.mb-5 La preparación y administración del biológico deben ajustarse a la ficha técnica y a las condiciones sanitarias de los animales:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img15.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Preparación del producto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Leer la etiqueta y la ficha técnica; confirmar especie, edad, dosis, vía, frecuencia y condiciones especiales. Revisar el aspecto del producto cuando corresponda y descartar los envases vencidos, deteriorados o sin identificación. Preparar únicamente la cantidad que pueda utilizarse dentro del período indicado después de abrir o reconstituir el producto.
            .row(titulo="Material y manipulación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utilizar material limpio y adecuado, evitar la contaminación del frasco durante la extracción y no mezclar productos en una misma jeringa, salvo autorización expresa del fabricante.
            .row(titulo="Vía de administración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Respetar estrictamente la vía autorizada. En medicina veterinaria son frecuentes las vías subcutánea e intramuscular, aunque algunos productos utilizan otras. En pequeños rumiantes, la vía subcutánea puede disminuir el daño muscular cuando está autorizada; no debe sustituir por conveniencia una vía intramuscular indicada por el fabricante.
            .row(titulo="Sitio de aplicación y sujeción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Seleccionar el sitio indicado en la ficha técnica, evitando estructuras anatómicas importantes y reduciendo el riesgo de contaminación o lesión. La sujeción debe ser firme, cuidadosa y limitada al tiempo necesario para realizar el procedimiento.
            .row(titulo="Técnica de aplicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organizar los animales por lotes o categorías; realizar una revisión general y separar a los que requieran valoración. Preparar y aplicar la dosis por la vía y en el sitio autorizados. Cambiar las agujas cuando el procedimiento o el riesgo sanitario lo indique, disponer los cortopunzantes en recipientes adecuados y vigilar a los animales después de la aplicación para identificar posibles reacciones adversas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img16.png')})` }")
        .bloque-texto-g__texto.p-4
          p El manejo debe reducir el miedo, el dolor y el estrés innecesarios. El marco normativo citado en el material comprende el Decreto 2113 de 2017, la Resolución 136 de 2020, la Resolución ICA 16409 de 2024 y su modificación mediante la Resolución 8452 de 2025.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Registro del procedimiento
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El registro debe permitir reconstruir la jornada de vacunación. Como mínimo, debe contener los siguientes datos:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Fecha y predio.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Especie, categoría o identificación del animal.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Nombre del biológico, fabricante y número de registro, cuando corresponda.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Lote y fecha de vencimiento.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Dosis y vía de administración.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Responsable y motivo de la vacunación.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Incidencias y resultados posteriores.
          .box___style_1.color___2(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
              .col-xl
                p.mb-0 Cuando el producto tenga tiempo de retiro, este debe registrarse y respetarse. La información debe conservarse para su consulta posterior.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img17.png', alt=''  style="width: 500px").m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Protocolos de vacunación según el plan sanitario
      .box___color-text-imgleft(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 El protocolo de vacunación es el procedimiento escrito que establece qué biológico se utiliza, en cuáles animales, por qué se aplica, cuándo debe administrarse, cómo se conserva y cómo se registra. No debe limitarse a una lista fija de fechas: debe actualizarse según la información epidemiológica del predio.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Definición del riesgo y del componente sanitario
      p.mb-5 Antes de seleccionar una vacuna, se debe identificar el riesgo sanitario y distinguir entre las medidas oficiales y las decisiones propias del predio.
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img19.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación del riesgo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinar si la enfermedad está presente en la región o ha ocurrido en el predio; si ingresan animales nuevos o existe contacto con otros rebaños; si se participa en ferias o concentraciones, y qué enfermedades generan pérdidas importantes. También se deben considerar el sistema productivo, la edad, la gestación, el destino de la producción y la disponibilidad de vacunas registradas para la especie en Colombia.
            .row(titulo="Componente oficial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende las medidas establecidas por el ICA para enfermedades sometidas a control oficial. Debe ajustarse a las disposiciones y decisiones de la autoridad sanitaria.
            .row(titulo="Componente predial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende las medidas preventivas frente a enfermedades productivas o endémicas, definidas según el riesgo y el criterio veterinario. Su aplicación no implica necesariamente la existencia de un calendario nacional obligatorio.
      p.mb-5 Esta diferenciación evita incorporar al plan predial vacunaciones que no forman parte de la estrategia oficial para ovinos y caprinos.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Enfermedades de control oficial relevantes para ovinos y caprinos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  El material identifica cuatro enfermedades de control oficial para estas especies: fiebre aftosa, rabia de origen silvestre, brucelosis y tuberculosis. La Resolución ICA 18426 de 2025 actualizó los listados nacionales de enfermedades, infecciones e infestaciones bajo control oficial, de declaración obligatoria y bajo vigilancia especial, y derogó la Resolución 3714 de 2015. Las estrategias descritas para cada enfermedad son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Fiebre aftosa")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fiebre aftosa
              p.mb-0 Los ovinos y caprinos son susceptibles y pueden presentar signos leves o inaparentes. Según el Programa Nacional del ICA citado en el material, estas especies no están incluidas en la vacunación cíclica nacional, dirigida a bovinos y bufalinos. Su protección se apoya en vigilancia, control de movilización, registro y otras medidas. Cualquier vacunación de ovinos o caprinos debe ser determinada por el ICA; por tanto, no debe programarse una aplicación rutinaria semestral en el plan predial.
        .py-3.py-md-4(titulo="Rabia de origen silvestre")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Rabia de origen silvestre
              p.mb-0 Es una enfermedad de control oficial con importancia zoonótica. El programa del ICA identifica al murciélago hematófago como uno de los principales transmisores en Colombia y contempla vigilancia y control del transmisor. En ovinos y caprinos, la vacunación se utiliza estratégicamente cuando el programa oficial lo determine, especialmente ante brotes o situaciones de riesgo. El material cita la Resolución ICA 9028 de 2024 sobre medidas de prevención y control. La existencia de vacunas registradas para estas especies no implica que su aplicación sea obligatoria en todos los predios.
        .py-3.py-md-4(titulo="Brucelosis")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Brucelosis
              p.mb-0 Puede afectar la reproducción y algunas especies de Brucella son zoonóticas. El programa ovino-caprino citado no establece un calendario rutinario de vacunación contra B. melitensis o B. ovis, que no han sido señaladas en el país según ese documento. Las medidas frente a B. abortus que puedan involucrar a ovinos y caprinos no deben confundirse con la vacunación obligatoria de brucelosis bovina. Ante abortos, retención de placenta, orquitis, epididimitis u otros eventos reproductivos agrupados, se debe notificar y permitir la investigación sanitaria. Las muestras para diagnóstico oficial deben tomarse conforme a los procedimientos del ICA.
        .py-3.py-md-4(titulo="Tuberculosis")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tuberculosis
              p.mb-0 El Programa Nacional de Ovinos y Caprinos citado no contempla vacunación para prevenir esta enfermedad en dichas especies. La estrategia se basa en vigilancia, control de movilización, investigación epidemiológica y saneamiento cuando corresponda. El ICA puede autorizar pruebas en predios en saneamiento o cuando las condiciones del predio o los signos compatibles lo requieran.
      p.mb-5 La estrategia oficial debe distinguirse de las vacunaciones destinadas a prevenir enfermedades productivas.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Vacunación frente a enfermedades productivas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Una explotación puede utilizar vacunas contra enfermedades respiratorias, entéricas, clostridiales u otras enfermedades productivas o infecciosas que no estén incluidas como de control oficial, siempre que exista un producto registrado y una justificación sanitaria.
          .box___style_1.color___2(data-aos="fade-right")
            p.mb-0 No existe un único calendario nacional obligatorio para todas estas enfermedades. La selección debe considerar la prevalencia, la edad, la inmunidad materna, la época del año, el sistema de alimentación, la densidad animal, los antecedentes de brotes, las pérdidas económicas y la disponibilidad de un diagnóstico que justifique la intervención.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img24.png', alt=''  style="width: 500px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Estructura del protocolo predial
      p.mb-5 El protocolo debe documentar los siguientes componentes antes, durante y después de la jornada:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Justificación sanitaria
                  p.mb-0.text-center Identificar el riesgo y la enfermedad que se busca prevenir. Seleccionar un biológico registrado y autorizado para la especie y finalidad, y revisar su ficha técnica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Animales y esquema de aplicación
                  p.mb-0.text-center Definir los animales objetivo, la edad y el estado fisiológico; establecer dosis, vía, sitio de aplicación, primera vacunación y refuerzos según la ficha técnica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Organización de la jornada
                  p.mb-0.text-center Programar la actividad, verificar la cadena de frío y aplicar el biológico con medidas de bienestar animal y bioseguridad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Seguimiento y actualización
                  p.mb-0.text-center Registrar las aplicaciones por animal o lote, vigilar los eventos adversos, evaluar periódicamente la cobertura y los resultados, y actualizar el protocolo cuando cambien la situación epidemiológica o la normativa.
      p.mb-5 Estos componentes permiten adaptar el protocolo a las condiciones sanitarias del predio.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Ejemplo didáctico de calendario predial
      p.mb-5 El siguiente ejemplo tiene una finalidad pedagógica. No constituye un calendario oficial ni debe aplicarse automáticamente.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Etapas del plan de vacunación y prevención sanitaria en caprinos
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img30.png', alt='Infografía circular sobre las siete etapas del ciclo productivo caprino: inicio del ciclo productivo, antes de la reproducción, gestación, período neonatal, destete, antes de la movilización o participación en eventos y revisión anual. ').m-auto
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img31.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Inicio del ciclo productivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar antecedentes, enfermedades del predio, inventario y situación epidemiológica. Verificar qué vacunas están indicadas y registradas para la especie.
            .row(titulo="Antes de la reproducción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evaluar la condición corporal y la salud general. Revisar el programa de vacunación de reproductores según las enfermedades identificadas como prioritarias.
            .row(titulo="Gestación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aplicar únicamente biológicos cuya ficha técnica permita su uso en hembras gestantes y en el momento indicado. Cuando el producto esté diseñado para ello, la finalidad puede incluir la protección de la madre y de las crías mediante anticuerpos calostrales.
            .row(titulo="Período neonatal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Priorizar el consumo de calostro, la higiene y la vigilancia sanitaria. No asumir que una vacuna neonatal es necesaria o eficaz sin revisar la edad mínima, la interferencia de anticuerpos maternos y la ficha técnica.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Destete").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar los antecedentes de vacunación y completar las dosis iniciales o los refuerzos indicados por el producto.
            .row(titulo="Antes de la movilización o participación en eventos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Verificar los requisitos sanitarios y de movilización vigentes. Una vacuna destinada a prevenir una enfermedad productiva no sustituye un requisito oficial de movilización.
            .row(titulo="Revisión anual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Calcular la cobertura, analizar brotes y reacciones adversas, verificar los registros y actualizar el plan.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img32.png", alt="" style="width: 300px").m-auto
      p.mb-0 La programación debe ajustarse al riesgo sanitario y a las indicaciones de cada biológico.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Bioseguridad durante la aplicación de biológicos
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img33.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una jornada de vacunación puede facilitar la transmisión de agentes infecciosos si se mezclan lotes sin control, se reutilizan materiales contaminados, se trasladan animales enfermos junto con sanos o se realizan movimientos desordenados. Por ello, las medidas de bioseguridad deben aplicarse antes, durante y después del procedimiento.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Organización de la jornada
      p.mb-5 A continuación, se presenta un pódcast sobre las actividades que deben realizarse antes, durante y después de una jornada de vacunación animal, destacando las medidas de bioseguridad, el manejo adecuado de los biológicos y las prácticas que garantizan el bienestar animal y la seguridad del personal.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img34.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Actividades antes, durante y después de la jornada de vacunación&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img35.png" style="max-width: 510px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3 Bienestar animal, residuos y eventos adversos
      p.mb-5 Durante la vacunación también deben controlarse los riesgos asociados con la sujeción, los materiales utilizados y la respuesta posterior del animal:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Bienestar durante la vacunación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img36.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bienestar durante la vacunación
              p.mb-0 Utilizar instalaciones seguras y evitar gritos, golpes, arrastre, torceduras y presión excesiva. Limitar la sujeción al tiempo necesario y evitar la aplicación en animales con estrés extremo por calor, transporte o manejo intenso, salvo justificación sanitaria compatible con la ficha técnica y el criterio profesional. El marco de bienestar animal citado incluye la Resolución 136 de 2020, la Resolución ICA 16409 de 2024 y su modificación de 2025.
        .py-3.py-md-4(titulo="Manejo de residuos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img37.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Manejo de residuos
              p.mb-0 Depositar las agujas en recipientes rígidos y seguros, nunca sueltas en bolsas comunes. Manejar frascos, envases y demás residuos conforme al sistema de gestión del predio y las instrucciones aplicables.
        .py-3.py-md-4(titulo="Eventos adversos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img38.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Eventos adversos
              p.mb-0 Las reacciones pueden ser locales o sistémicas. Una inflamación pequeña y transitoria puede estar contemplada en la ficha técnica de algunos productos. La dificultad respiratoria, el colapso, el edema generalizado o el deterioro rápido requieren intervención veterinaria inmediata. Cada evento debe registrarse para identificar posibles recurrencias relacionadas con un lote, producto, vía o grupo de animales.
      p.mb-0 Estas medidas deben formar parte del protocolo de cada jornada.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Protocolo modelo para una jornada de vacunación
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.color___2.fit___box_3(data-aos="fade-right")
            p El siguiente procedimiento integra las actividades necesarias para preparar, ejecutar y cerrar una jornada de vacunación en un predio ovinocaprino:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span a
                | 
                p.mb-0 Verificar el plan sanitario vigente y confirmar que la vacunación esté justificada.
              li 
                .lista-ol--cuadro__vineta
                  span b
                | 
                p.mb-0 Consultar la ficha técnica y confirmar especie, edad, dosis, vía, sitio, frecuencia y condiciones de conservación.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | 
                p.mb-0 Comprobar el registro sanitario, la vigencia del producto y la cadena de frío; registrar la temperatura según el procedimiento del predio.
              li 
                .lista-ol--cuadro__vineta
                  span d
                | 
                p.mb-0 Seleccionar los animales sanos y separar a aquellos que requieran valoración.
              li 
                .lista-ol--cuadro__vineta
                  span e
                | 
                p.mb-0 Organizar el área de manejo para reducir golpes, caídas y movimientos innecesarios.
              li
                .lista-ol--cuadro__vineta
                  span f
                | 
                p.mb-0 Preparar material limpio y recipientes para cortopunzantes.
              li 
                .lista-ol--cuadro__vineta
                  span g
                | 
                p.mb-0 Aplicar el biológico conforme a la ficha técnica.
              li 
                .lista-ol--cuadro__vineta
                  span h
                | 
                p.mb-0 Mantener la vigilancia posterior y aplicar el procedimiento establecido ante eventos adversos.
              li 
                .lista-ol--cuadro__vineta
                  span i
                | 
                p.mb-0 Registrar cada aplicación o el lote correspondiente, incluidos producto, lote, vencimiento, dosis, vía, fecha y responsable.
              li 
                .lista-ol--cuadro__vineta
                  span j
                | 
                p.mb-0 Actualizar el inventario sanitario, calcular la cobertura, evaluar los resultados y programar el siguiente refuerzo según el producto y el plan sanitario.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img39.png', alt=''  style="width: 500px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  El registro y la evaluación de los resultados permiten determinar si la jornada cumplió el protocolo establecido.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Lista de verificación de la jornada
      p.mb-5 La siguiente lista permite comprobar el cumplimiento de las condiciones de preparación, aplicación y seguimiento:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img40.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img41.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Producto y conservación
                  p.mb-0.text-center ¿El producto está registrado y destinado a la especie? ¿Se revisó la ficha técnica? ¿Está vigente y su envase está íntegro? ¿Se conservó a la temperatura indicada y se evitó la congelación cuando correspondía?
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Animales y aplicación
                  p.mb-0.text-center ¿Se identificaron los animales enfermos antes de la vacunación? ¿Se respetaron la dosis, la vía y el sitio de aplicación? ¿Se manejaron los animales sin golpes ni prácticas que generen sufrimiento innecesario?
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Equipos y residuos
                  p.mb-0.text-center ¿Se utilizaron agujas y equipos adecuados? ¿Se gestionaron correctamente los elementos cortopunzantes?
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registros y seguimiento
                  p.mb-0.text-center ¿Se registraron el lote, el vencimiento, la fecha de aplicación y el responsable? ¿Se mantuvo vigilancia ante posibles eventos adversos? ¿Se actualizó el plan sanitario?
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Requisitos oficiales
                  p.mb-0.text-center ¿Se verificó si existe algún requisito adicional relacionado con la enfermedad o la movilización?
      p.mb-0 Las respuestas permiten identificar aspectos que requieren corrección antes de la siguiente jornada.
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Errores frecuentes que deben evitarse
      p.mb-5 Las siguientes afirmaciones representan errores de interpretación o manejo que pueden comprometer el programa de vacunación:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img46.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="«Todas las enfermedades de control oficial se previenen vacunando»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La estrategia depende de cada enfermedad y de la especie. En ovinos y caprinos, el ICA contempla vigilancia, control de movilización, registro, diagnóstico, saneamiento y vacunación estratégica únicamente cuando corresponda.
            .row(titulo="«La vacuna de bovinos contra fiebre aftosa se aplica también a las cabras»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los ovinos y caprinos no están incluidos en la vacunación rutinaria nacional contra fiebre aftosa. Cualquier vacunación de estas especies debe ser determinada por la autoridad sanitaria.
            .row(titulo="«Si una vacuna estuvo unas horas fuera de la nevera, todavía sirve»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 No debe suponerse que conserva su calidad. La estabilidad depende del producto y de la temperatura alcanzada; se deben consultar las condiciones de conservación y la información del fabricante.
            .row(titulo="«Puedo congelar la vacuna para conservarla más tiempo»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si la etiqueta exige refrigeración sin congelación, esta debe evitarse porque puede comprometer la calidad del producto.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="«Puedo mezclar varias vacunas en la misma jeringa»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Solo está permitido cuando el fabricante lo autoriza expresamente. Una mezcla no autorizada puede alterar la estabilidad o la seguridad de los productos.
            .row(titulo="«Puedo vacunar animales enfermos para que se recuperen»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las vacunas son preventivas y no sustituyen el diagnóstico ni el tratamiento. Los animales enfermos deben evaluarse según su condición.
            .row(titulo="«El plan sanitario debe tener las mismas fechas todos los años»").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El plan debe actualizarse según la situación epidemiológica, los resultados, la categoría animal, los productos disponibles y los cambios normativos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img47.png", alt="" style="width: 300px").m-auto
      p.mb-0 La prevención eficaz requiere seleccionar biológicos autorizados, conservarlos y aplicarlos correctamente, cumplir las medidas oficiales y actualizar el plan de acuerdo con las condiciones sanitarias del predio.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/Podcast_Cria_levante_ganado_caprino_alterna.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
