<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Control del parasitismo en la explotación caprina y ovina
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .box___style_1(data-aos="fade-left").mb-3
            p.mb-0 Aunque el título de la unidad se refiere a la explotación caprina, los contenidos se desarrollan para ovinos y caprinos, porque ambas especies comparten numerosos grupos de parásitos, pero no necesariamente presentan la misma respuesta al tratamiento, susceptibilidad, comportamiento de pastoreo o dinámica epidemiológica.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El control parasitario no consiste en eliminar todos los parásitos del rebaño. En condiciones de pastoreo, el objetivo sanitario y productivo es mantener la carga parasitaria en un nivel que no cause enfermedad significativa ni pérdidas productivas y, al mismo tiempo, conservar una población de parásitos susceptibles que contribuya a disminuir la selección de resistencia.
      p.mb-5 El tratamiento repetido de todos los animales sin diagnóstico puede favorecer la resistencia a los antiparasitarios. Por ello, el control debe integrar diagnóstico, tratamiento selectivo, manejo de potreros, nutrición, selección de animales resistentes o resilientes y seguimiento de resultados.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Parásitos internos de importancia en pequeños rumiantes
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Los parásitos internos son organismos que viven dentro del animal o utilizan órganos y tejidos internos durante parte de su ciclo de vida. En pequeños rumiantes tienen especial importancia los parásitos digestivos, aunque también existen parásitos respiratorios, hepáticos, sanguíneos y tisulares.
          .box___style_1.color___2(data-aos="fade-right")
            p.mb-0 Sus efectos dependen de la especie parasitaria, la cantidad de organismos, la edad, la nutrición, el estado inmunitario, la gestación, la lactancia, el clima y el manejo. Un animal puede albergar parásitos sin presentar enfermedad evidente; por tanto, la presencia de huevos o larvas en una muestra no implica automáticamente la necesidad de administrar un antiparasitario.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt=''  style="width: 500px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Nematodos gastrointestinales
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  Los nematodos gastrointestinales son gusanos redondos que afectan principalmente el abomaso y el intestino. Su ciclo puede incluir la eliminación de huevos en las heces, el desarrollo de larvas en el ambiente y la ingestión de larvas infectantes durante el pastoreo. Los principales nematodos de importancia sanitaria en pequeños rumiantes son los siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img3.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Haemonchus contortus").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es un nematodo hematófago del abomaso y uno de los parásitos de mayor importancia en ovinos y caprinos, especialmente donde las condiciones ambientales favorecen su desarrollo. Una carga elevada puede causar anemia, palidez de mucosas, debilidad, pérdida rápida de condición corporal, edema submandibular y muerte. La escala FAMACHA ayuda a valorar la anemia asociada principalmente con este parásito, pero no identifica por sí sola la especie ni sustituye la evaluación clínica, el examen coproparasitológico o el criterio veterinario. En Colombia se ha documentado resistencia de H. contortus a varias familias de antihelmínticos; en una explotación de Antioquia se encontró resistencia múltiple y predominio de este parásito en cultivos larvarios.
            .row(titulo="Trichostrongylus spp.").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye especies que afectan el abomaso y el intestino delgado. T. axei se relaciona principalmente con el abomaso, mientras que otras especies, como T. colubriformis, pueden afectar el intestino delgado. Pueden ocasionar diarrea, disminución de la ganancia de peso, pérdida de condición corporal y reducción de la productividad. En algunos estudios colombianos, este género se ha identificado como un grupo importante después de H. contortus.
            .row(titulo="Teladorsagia circumcincta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es un nematodo del abomaso de especial importancia en ovinos. Puede ocasionar gastritis parasitaria, disminución del apetito, pérdida de peso y alteraciones digestivas. Su importancia relativa varía según las condiciones ambientales y el sistema productivo.
            .row(titulo="Oesophagostomum spp.").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta el intestino grueso y puede producir enteritis, diarrea y pérdida de condición corporal. Sus larvas presentan una fase de desarrollo en el ambiente y pueden contribuir a la contaminación de los potreros.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Nematodirus spp.").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta principalmente el intestino delgado. Algunas especies tienen ciclos epidemiológicos particulares y pueden adquirir importancia en animales jóvenes. Las infecciones intensas pueden causar diarrea, pérdida de peso y deshidratación.
            .row(titulo="Strongyloides papillosus").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede afectar especialmente a los animales jóvenes. La transmisión puede ocurrir por ingestión de larvas o penetración cutánea, según la especie y las condiciones. Su importancia clínica debe valorarse junto con la edad, el manejo, la nutrición y los resultados diagnósticos.
            .row(titulo="Otros nematodos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 También pueden encontrarse géneros como Cooperia, Chabertia y Trichuris. Su importancia varía según la región y el sistema productivo. Los resultados coproparasitológicos deben interpretarse de acuerdo con las condiciones del predio y el estado sanitario de los animales.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img4.png", alt="" style="width: 300px").m-auto
      p.mb-5 La identificación del grupo parasitario debe relacionarse con los signos clínicos, las condiciones de manejo y los resultados diagnósticos antes de definir una intervención.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Otros parásitos internos
      p.mb-5 Además de los nematodos gastrointestinales, los pequeños rumiantes pueden presentar otros grupos de parásitos que afectan distintos órganos y tejidos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Cestodos
                  p.mb-0 Son gusanos planos segmentados. En pequeños rumiantes pueden encontrarse especies del género Moniezia, especialmente en animales jóvenes. Su ciclo utiliza ácaros oribátidos como hospedadores intermediarios. La presencia de segmentos en las heces puede orientar el diagnóstico, pero la decisión terapéutica debe basarse en la evaluación veterinaria.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Trematodos
                  p.mb-0 Son gusanos planos no segmentados. Fasciola hepatica es relevante en zonas con condiciones ambientales y hospedadores intermediarios adecuados. Produce lesiones hepáticas y puede causar pérdida de condición corporal, anemia, edema, reducción de la producción y mortalidad en infecciones severas. El riesgo aumenta en zonas húmedas, cuerpos de agua y hábitats favorables para los caracoles hospedadores intermediarios; por ello, el control debe incluir el ambiente y no depender únicamente del tratamiento.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Protozoarios: Eimeria spp.
                  p.mb-0 La coccidiosis tiene especial importancia en animales jóvenes y en sistemas con alta concentración de animales, contaminación fecal y condiciones favorables para la supervivencia de ooquistes. Puede causar diarrea, tenesmo, pérdida de apetito, deshidratación, retraso del crecimiento y muerte en casos severos. La presencia de ooquistes en heces no confirma por sí sola enfermedad clínica: debe relacionarse con la edad, los signos, la cantidad de ooquistes, la especie de Eimeria cuando sea posible y las condiciones de manejo.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Parásitos respiratorios
                  p.mb-0 Algunos nematodos pueden afectar el aparato respiratorio y causar tos, aumento de la frecuencia respiratoria, secreción nasal y disminución de la condición corporal. Dictyocaulus y otros parásitos pulmonares deben considerarse en el diagnóstico diferencial, junto con las enfermedades bacterianas, virales, aspirativas y ambientales.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Parásitos sanguíneos y tisulares
                  p.mb-0 Los hemoparásitos y otros agentes transmitidos por artrópodos pueden presentarse según la región y los vectores existentes. Sus signos pueden incluir anemia, fiebre, debilidad, pérdida de peso y disminución de la productividad. El diagnóstico requiere pruebas específicas; no debe atribuirse automáticamente todo cuadro de anemia a H. contortus.
      p.mb-0 La diversidad de parásitos internos exige relacionar la localización del agente, los signos clínicos y los factores ambientales con el diagnóstico correspondiente.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Parásitos externos e insectología sanitaria
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los ectoparásitos viven sobre la piel o en estructuras externas del animal. Pueden causar irritación, prurito, lesiones cutáneas, pérdida de pelo o lana, anemia, disminución del bienestar, transmisión de agentes infecciosos y deterioro del valor comercial de la piel o el vellón.
      p.mb-5 La insectología sanitaria estudia los insectos y su relación con la salud animal. No todos los insectos presentes sobre un animal son parásitos: algunos son visitantes ocasionales, otros se alimentan de sangre y otros pueden actuar como vectores. Los ácaros no son insectos, pero se estudian conjuntamente dentro de la ectoparasitología. Los principales grupos de importancia sanitaria se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Garrapatas
                  p.mb-0 Son artrópodos hematófagos cuya importancia varía según la región y la especie animal. Pueden causar pérdida de sangre, irritación y lesiones; algunas especies participan en la transmisión de agentes infecciosos. Su control debe considerar la identificación del género o especie cuando sea necesario, la carga parasitaria y el uso no indiscriminado de acaricidas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Piojos: orden Phthiraptera
                  p.mb-0 Pueden ser masticadores o chupadores y permanecen sobre el hospedador o estrechamente asociados con él. Los masticadores producen irritación y daño del pelo o la lana; los chupadores pueden causar anemia en infestaciones intensas. Se asocian con rascado frecuente, inquietud, mordisqueo de la piel y pérdida de pelo o lana. La transmisión puede ocurrir por contacto directo y, según el sistema, mediante elementos contaminados.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ácaros y sarnas
                  p.mb-0 Pueden causar dermatitis, prurito, costras, alopecia y lesiones extensas. La identificación de la causa puede requerir raspado cutáneo, examen microscópico u otras pruebas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Miasis o gusaneras
                  p.mb-0 Se produce cuando larvas de determinadas moscas invaden heridas o tejidos. Cochliomyia hominivorax tiene importancia sanitaria en animales de producción de América tropical. Las heridas, la suciedad, la humedad, la materia orgánica y las lesiones de manejo pueden favorecer su aparición. La miasis activa puede producir dolor intenso y deterioro rápido; su control incluye inspección frecuente, manejo adecuado de heridas, higiene, prevención de lesiones y tratamiento oportuno.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Moscas y mosquitos: orden Diptera
                  p.mb-0 Pueden causar irritación, estrés, lesiones y contaminación de heridas y alimentos. Algunas especies son hematófagas, como Stomoxys, y otras participan en la transmisión mecánica de microorganismos. Su ciclo incluye huevos, larvas, pupas y adultos, por lo que el control debe combinar el manejo del estiércol, los residuos y la materia orgánica con medidas específicas cuando sean necesarias.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right").mb-3
            p.mb-0 Comprender el ciclo biológico permite elegir el momento y la estrategia de control. Un producto aplicado únicamente al animal puede no eliminar las fases ambientales. En las moscas, la reducción de materia orgánica y de sitios de reproducción puede ser más importante a largo plazo que la aplicación repetida de insecticidas.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El uso repetido de un mismo principio activo puede seleccionar poblaciones resistentes. Por ello, los productos deben elegirse con criterio técnico y utilizarse conforme al rotulado, sin mezclar sustancias ni aumentar dosis por decisión del productor.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img16.png', alt=''  style="width: 500px").m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Identificación de signos y diagnóstico del parasitismo
      .box___color-text-imgleft(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img17.png', alt='' style="width: 500px").m-auto
          .col-xl.fit___box_container
            p.mb-0 El diagnóstico comienza con la evaluación del animal y de las condiciones del sistema productivo. Un signo clínico aislado no identifica un parásito: la diarrea, por ejemplo, también puede deberse a bacterias, virus, cambios de alimentación, intoxicaciones u otras causas.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Signos asociados al parasitismo
      p.mb-5 Los signos deben interpretarse de manera conjunta para orientar la selección de pruebas diagnósticas.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Signos generales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Signos generales
              p.mb-0 Pérdida de peso o baja ganancia diaria, disminución de la condición corporal, debilidad, menor actividad, pelaje opaco o áspero, disminución del apetito, retraso del crecimiento y reducción de la producción de leche o carne. También pueden presentarse alteraciones reproductivas secundarias a la mala condición corporal o la enfermedad, y mortalidad en casos severos.
        .py-3.py-md-4(titulo="Signos compatibles con haemoncosis")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Signos compatibles con haemoncosis
              p.mb-0 Palidez de mucosas por anemia, debilidad, postración, pérdida rápida de condición corporal, edema submandibular o «mandíbula de botella», intolerancia al ejercicio y muerte súbita en infecciones graves. La escala FAMACHA puede apoyar la selección de animales con anemia que requieren intervención, pero exige capacitación y no debe utilizarse como único método diagnóstico.
        .py-3.py-md-4(titulo="Signos digestivos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Signos digestivos
              p.mb-0 Diarrea, heces pastosas o acuosas, tenesmo, deshidratación, distensión abdominal en determinados cuadros y pérdida de peso.
        .py-3.py-md-4(titulo="Signos de ectoparasitismo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Signos de ectoparasitismo
              p.mb-0 Prurito, rascado frecuente, mordisqueo de la piel, frotamiento contra instalaciones, pérdida de pelo o lana, costras, heridas, engrosamiento de la piel, presencia de parásitos y miasis.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img22.png')})` }")
        .bloque-texto-g__texto.p-4
          p La evaluación debe incluir coloración de mucosas, condición corporal, presencia de edema, estado del pelo o lana, lesiones, pezuñas, región perineal y ectoparásitos. La condición corporal debe valorarse sistemáticamente y registrarse para identificar la pérdida de reservas antes de que aparezcan signos graves.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Diagnóstico de laboratorio
      p.mb-5 Las pruebas diagnósticas permiten complementar la evaluación clínica y orientar las decisiones sanitarias: 
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100.color___1
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img23.png', alt="" ).m-auto
              h4.text-center Examen coproparasitario
              .box___card_sinbordes_p
                p.mb-0.text-center Permite identificar huevos, ooquistes u otras estructuras parasitarias. En nematodos gastrointestinales, el recuento de huevos por gramo de materia fecal puede utilizarse para estimar la eliminación de huevos y apoyar las decisiones sanitarias.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100.color___1
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img24.png', alt="" ).m-auto
              h4.text-center Coprocultivo
              .box___card_sinbordes_p
                p.mb-0.text-center Permite desarrollar larvas a partir de huevos de nematodos y ayuda a conocer los grupos parasitarios presentes. En situaciones complejas pueden requerirse técnicas adicionales, como identificación molecular o pruebas específicas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.color___1
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t3/img25.png', alt="" ).m-auto
              h4.text-center Reducción de huevos (FECRT/RRHMF)
              .box___card_sinbordes_p
                p.mb-0.text-center Prueba de reducción del conteo de huevos en materia fecal (FECRT o RRHMF). Compara la eliminación de huevos antes y después del tratamiento para evaluar la eficacia de un antihelmíntico. En Colombia se ha utilizado para identificar resistencia en pequeños rumiantes. Su interpretación requiere una metodología validada y apoyo profesional.
      p.mb-0 Los resultados deben relacionarse con los signos clínicos, el historial de tratamientos y las condiciones epidemiológicas del predio.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Medidas de prevención y control del parasitismo
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0  El control integrado combina medidas ambientales, nutricionales, sanitarias y farmacológicas. Depender exclusivamente de los medicamentos favorece la selección de resistencia. Las principales medidas preventivas son las siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img26.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Manejo de potreros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evitar el sobrepastoreo y el exceso de carga animal; establecer descansos apropiados según el clima, la especie parasitaria y el sistema productivo; reducir el pastoreo permanente en áreas altamente contaminadas y manejar las categorías susceptibles, especialmente los animales jóvenes, de acuerdo con el riesgo. Utilizar rotaciones planificadas, teniendo presente que la rotación por sí sola no garantiza la eliminación de larvas. Mantener el drenaje de áreas húmedas cuando sea técnicamente posible y evitar la acumulación de materia orgánica alrededor de las instalaciones.
            .row(titulo="Manejo nutricional").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Garantizar una nutrición adecuada para favorecer la capacidad del animal de soportar la infección y mantener la productividad. El aporte suficiente de proteína y energía es especialmente importante durante el crecimiento, la gestación y la lactancia. La suplementación no elimina los parásitos, pero puede mejorar la resiliencia del animal.
            .row(titulo="Cuarentena y nuevos ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aplicar un protocolo que considere identificación, procedencia, historial de tratamientos y riesgo parasitario. No se debe administrar automáticamente un antiparasitario a todo animal nuevo: el ingreso debe incluir evaluación y diagnóstico cuando sea necesario.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Tratamiento selectivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Intervenir principalmente a los animales que presentan riesgo clínico o productivo, en lugar de tratar automáticamente a todo el rebaño. En haemoncosis, FAMACHA puede apoyar la selección de animales con anemia dentro de un programa supervisado.
            .row(titulo="Refugia parasitaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la población de parásitos que no está expuesta al medicamento. Mantener una proporción adecuada de parásitos susceptibles ayuda a disminuir la selección de resistencia. La estrategia depende del sistema, el medicamento, el clima y la situación epidemiológica, por lo que debe diseñarse con conocimiento del predio.
            .row(titulo="Rotación y combinación de familias farmacológicas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cambiar medicamentos indiscriminadamente no constituye un manejo racional de la resistencia. La decisión debe considerar los resultados de eficacia, el historial del predio y los grupos farmacológicos. Las combinaciones requieren respaldo técnico y productos autorizados.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img27.png", alt="" style="width: 300px").m-auto
      p.mb-5 La selección de estas medidas debe responder al diagnóstico y a los riesgos identificados en la explotación.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Buenas prácticas en el uso de medicamentos veterinarios
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img28.png')})` }")
        .bloque-texto-g__texto.p-4
          p La Resolución ICA 20277 de 2018 establece requisitos para la certificación en Buenas Prácticas Ganaderas (BPG) de ovinos y caprinos. La lista de chequeo oficial Forma 3-860 V.4 contempla aspectos relacionados con el registro ICA de los medicamentos, su vigencia, el cumplimiento del rotulado, los registros de aplicación, la prescripción, los tiempos de retiro, los instrumentos adecuados, el manejo de medicamentos de control especial y la notificación de efectos adversos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img29.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .box___style_1.color___2.fit___box_4(data-aos="fade-left").mb-3
            p La metodología del ICA para evaluar el bienestar en ovinos y caprinos también contempla la verificación de las siguientes condiciones:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No utilizar sustancias prohibidas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Emplear medicamentos con registro ICA y dentro de su fecha de vencimiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Almacenar y aplicar los productos conforme al rotulado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener los equipos en buen estado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disponer de un área de almacenamiento limpia y separada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar los tratamientos que correspondan según prescripción profesional.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener registros de los tratamientos.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Estas condiciones deben cumplirse durante la selección, el almacenamiento y la administración de antiparasitarios.
      .bg___color_1
        .px-5
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
            .col
              h3  Tiempo de retiro y almacenamiento de antiparasitarios
          p.mb-5 El tiempo de retiro es el período que debe transcurrir entre la última administración de un medicamento y la utilización de carne, leche u otros productos de origen animal para consumo humano, cuando el producto tenga establecido ese período. Debe respetarse el rotulado; no se debe calcular por intuición ni trasladar el tiempo indicado para otra especie o producto. Para conservar los antiparasitarios en condiciones adecuadas, se deben cumplir las siguientes medidas:
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img30.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              .row.align-items-center.mb-4
                .col-xl-6.mb-4.mb-lg-0
                  .box___out_icon_6(data-aos="flip-up").mb-4
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Mantenerlos en el lugar indicado por el fabricante y protegerlos del calor, la humedad y la luz cuando corresponda.
                  .box___out_icon_6(data-aos="flip-up").mb-4
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Conservarlos identificados, con sus envases y etiquetas.
                  .box___out_icon_6(data-aos="flip-up")
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Separarlos de alimentos y otros productos que puedan contaminarse.
                .col-xl-6
                  .box___out_icon_6(data-aos="flip-up").mb-4
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Controlar las fechas de vencimiento y mantener un inventario.
                  .box___out_icon_6(data-aos="flip-up")
                    .row.align-items-center
                      .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                        figure
                          img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 50px").m-auto
                      .col-xl.col-md-10
                        p.mb-0 Restringir el acceso a personas autorizadas.
          p.mb-0 El almacenamiento y los registros permiten mantener la identificación y las condiciones de uso de cada producto.
          Separador
          #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.5 Aplicación de protocolos de control parasitario
      p.mb-5 Un protocolo de control parasitario debe responder cinco preguntas: qué problema existe, a quién afecta, cómo se confirmó, qué intervención se realizará y cómo se comprobará si funcionó. El procedimiento debe desarrollarse en el siguiente orden:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 1. Diagnosticar la situación
                p.mb-0 Evaluar la condición corporal, las mucosas, los signos digestivos y respiratorios, y las lesiones de piel. Analizar la edad, el estado fisiológico, la procedencia y el sistema de pastoreo. Revisar los registros sanitarios y la respuesta a tratamientos anteriores. Tomar muestras fecales y solicitar las pruebas indicadas, incluida la evaluación de una posible resistencia antihelmíntica.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img31.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img32.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 2. Clasificar el riesgo
                p.mb-0 Identificar los animales que requieren mayor vigilancia: jóvenes, hembras en momentos críticos del ciclo productivo, animales con baja condición corporal y aquellos expuestos a potreros altamente contaminados. Ajustar la clasificación a las condiciones de cada explotación.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 3. Seleccionar la intervención
                p.mb-0 Elegir el antihelmíntico según el diagnóstico, la eficacia conocida en el predio y su registro para la especie. Ante ectoparasitismo, identificar el agente antes de seleccionar un acaricida o insecticida. En casos de miasis, priorizar el tratamiento de la herida y la eliminación de las larvas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img33.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img34.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 4. Aplicar correctamente el medicamento
                p.mb-0 Determinar el peso de forma confiable; confirmar la concentración, la dosis y la vía autorizada; utilizar equipos apropiados y aplicar medidas de higiene. Registrar el tratamiento, respetar el tiempo de retiro y vigilar los eventos adversos. Evitar la subdosificación, que favorece la supervivencia de parásitos menos susceptibles, y la sobredosificación, que aumenta el riesgo de toxicidad y residuos sin corregir fallas de diagnóstico o eficacia.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Paso 5. Evaluar la eficacia
                p.mb-0 Realizar el seguimiento en el momento apropiado para el principio activo y el protocolo diagnóstico. La FECRT/RRHMF compara la eliminación de huevos antes y después del tratamiento y permite identificar posibles fallas de eficacia compatibles con resistencia. Interpretar los resultados mediante una metodología validada y con apoyo profesional.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img35.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img36.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Paso 6. Corregir el protocolo
                p.mb-0 Si el tratamiento no funciona, investigar la causa antes de repetir el mismo producto. Considerar un diagnóstico equivocado, dosis incorrecta, mala administración, producto deteriorado, resistencia parasitaria, reinfección rápida o presencia de otra enfermedad.
      p.mb-5 El procedimiento debe quedar documentado para permitir el seguimiento de cada intervención.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img18.svg" style="max-width: 60px").m-auto
        .col
          h3  Registro mínimo del tratamiento
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_3(data-aos="fade-right").mb-3
            p Cada tratamiento debe contar con un registro que incluya:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha e identificación del predio.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Identificación del animal o lote, peso o categoría.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Diagnóstico o motivo del tratamiento.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Nombre del producto, principio activo, registro ICA, lote y vencimiento.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Dosis administrada y vía de aplicación.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Responsable y prescripción, cuando corresponda.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tiempo de retiro, respuesta clínica y eventos adversos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha de reevaluación.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Esta información permite relacionar los resultados del tratamiento con el producto utilizado y las condiciones de aplicación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img37.png', alt=''  style="width: 500px").m-auto
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Relación entre parasitismo, bioseguridad y bienestar animal
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img19.svg', alt='' style="width: 80px").m-auto
        .col-xl
          p.mb-0 El control parasitario forma parte del bienestar animal. La metodología del ICA para ovinos y caprinos incluye indicadores relacionados con condición corporal, estrés térmico, signos respiratorios, FAMACHA, ectoparásitos, lesiones, mastitis, cojeras, mortalidad, uso de medicamentos veterinarios y existencia del plan sanitario.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img38.png', alt=''  style="width: 500px").m-auto
        .col-xl
          .box___style_1.color___2(data-aos="fade-left").mb-3
            p.mb-0 Un animal con anemia severa por haemoncosis, prurito intenso por ectoparásitos, miasis o pérdida marcada de condición corporal presenta un problema de salud que también afecta su bienestar. El diagnóstico y el tratamiento oportunos son responsabilidades del sistema productivo.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Durante la captura y el tratamiento, se deben evitar el arrastre, los golpes, la fuerza excesiva y la inmovilización prolongada. Las instalaciones de manejo deben facilitar el desplazamiento y reducir el riesgo de caídas y lesiones.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Protocolos modelo para formación
      p.mb-5 Los siguientes protocolos organizan las actividades de evaluación e intervención ante tres situaciones sanitarias relacionadas con el parasitismo.
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Protocolo A. Sospecha de haemoncosis").ajuste-cajaAcordion.ajuste-vineta
              ol.lista-ol--cuadro.mb-3
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | 
                  p.fit--p-ol.mb-0 Evaluar: Examinar las mucosas y la condición corporal, aplicar FAMACHA si el personal está capacitado e identificar edema submandibular y debilidad.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 
                  p.fit--p-ol.mb-0 Diagnosticar: Tomar muestras fecales de animales representativos cuando esté indicado y evaluar la carga parasitaria y los antecedentes de tratamientos.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 
                  p.fit--p-ol.mb-0 Intervenir: Seleccionar los animales que requieren tratamiento y utilizar un antihelmíntico registrado, elegido mediante criterio profesional.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | 
                  p.fit--p-ol.mb-0 Registrar y reevaluar: Registrar el tratamiento y el tiempo de retiro. Evaluar su eficacia e investigar resistencia o reinfección antes de repetirlo si existe una falla.
            .row(titulo="Protocolo B. Sospecha de coccidiosis en cabritos o corderos").ajuste-cajaAcordion.ajuste-vineta
              ol.lista-ol--cuadro.mb-3
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | 
                  p.fit--p-ol.mb-0 Evaluar: Identificar la edad y el grupo afectado; examinar la diarrea, la deshidratación, el apetito y la condición corporal.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 
                  p.fit--p-ol.mb-0 Revisar el manejo: Examinar la higiene de los corrales, la densidad animal, los comederos y los bebederos.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 
                  p.fit--p-ol.mb-0 Diagnosticar: Realizar el examen coproparasitario cuando esté indicado y diferenciar la presencia de ooquistes de la enfermedad clínica.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | 
                  p.fit--p-ol.mb-0 Intervenir y prevenir: Reducir la contaminación fecal, aplicar tratamiento específico únicamente por indicación veterinaria y corregir los factores predisponentes en los grupos jóvenes.
            .row(titulo="Protocolo C. Miasis").ajuste-cajaAcordion.ajuste-vineta
              ol.lista-ol--cuadro.mb-3
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | 
                  p.fit--p-ol.mb-0 Evaluar: Separar y contener al animal de forma segura; examinar la extensión de la lesión y su estado general.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | 
                  p.fit--p-ol.mb-0 Tratar: Eliminar las larvas mediante un procedimiento adecuado, limpiar la herida y aplicar el tratamiento autorizado según indicación profesional.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | 
                  p.fit--p-ol.mb-0 Prevenir: Controlar los factores predisponentes, como heridas, suciedad, procedimientos, humedad o manejo deficiente.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 4
                  | 
                  p.fit--p-ol.mb-0 Realizar seguimiento: Revisar diariamente al animal hasta su recuperación, registrar el caso y aplicar medidas para prevenir nuevos casos en el lote.
      p.mb-0 El seguimiento debe mantenerse hasta la recuperación del animal y la corrección de las condiciones que favorecieron la aparición de la miasis.

</template>

<script>
export default {
  name: 'Tema3',
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
