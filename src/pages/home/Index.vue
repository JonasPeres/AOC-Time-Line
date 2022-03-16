<template>
  <div class="col-12 row justify-center q-pa-xl">
    <q-card class="col-12 row" style="border-radius: 20px;">
      <q-scroll-area class="col-12 row q-px-xl" style="height: 750px;">
        <q-timeline color="secondary" layout="loose">
          <q-timeline-entry heading>
            <q-img 
              src="intel.png" 
              width="130px" 
              style="cursor: pointer; border-radius: 5px;" 
            >
            </q-img>

            <q-img 
              src="versus.png" 
              width="130px" 
              style="cursor: pointer; border-radius: 5px;" 
            >
            </q-img>

             <q-img 
              src="amd.png" 
              width="130px" 
              style="cursor: pointer; border-radius: 5px;" 
            >
            </q-img>
          </q-timeline-entry>

          <q-timeline-entry
            title="Intel Core 2 Duo"
            subtitle="2006"
            side="left"
          >
            <div class="q-pt-md">
              O primeiro processador Quad-Core do mundo para desktops e servidores tradicionais, também foi lançada a tecnologia Intel Centrino Duo Mobile Technology e Intel Viiv, e o processador Intel Core 2 Duo.
              <div class="col-12">
                <q-img 
                  src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/13659751/image/0535446981153cf0a522a2034e90cf19" 
                  width="150px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="AMD Phenom"
            subtitle="2007"
            side="right"
          >
            <div>
              Série baseada na arquitetura K10, voltada para desktops, com versões de 3 núcleos (codenome Toliman), que pertecem a série Phenom 8000 e versões de 4 núcleos (codenome Agena) na série Phenom 9000.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://wikiimg.tojsiabtv.com/wikipedia/en/f/f5/AMD_Phenom_Logo.png" 
                  width="100px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Intel Core 2 Quad"
            subtitle="2007"
            side="left"
          >
            <div>
              Lançamento dos processadores Core 2 Quad. Este ano também viu o avanço do processo tecnológico de 45nm permitindo que mais de 2 milhões de transistores de 45nm da Intel coubessem no período de uma sentença.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/13659787/image/53d47dfd29b8ccac24dd585961ee0411" 
                  width="120px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="AMD Phenom II"
            subtitle="2008"
            side="right"
          >
            <div>
              Microprocessador da AMD que usa a microarquitetura AMD K10, existindo para suceder o Phenom como processador para desktop's top de linha da marca para o soquete AM2+ e AM3 (este com suporte a memórias DDR3).
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="data:image/jpeg;base64,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" 
                  width="100px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Intel Core i7"
            subtitle="2008"
            side="left"
          >
            <div>
              Família de processadores Intel para desktop e notebooks x86-64 (64 bits). A família foi lançada com microarquitetura Intel Nehalem de primeira geração sendo o sucessor dos processadores Intel Core 2 e contou com codinomes Clarkfield (processadores de primeira geração para aparelhos móveis) e Bloomfield, Lynnfield (processadores para desktops de alto desempenho high-end e os de uso geral, respectivamente, ambos da arquitetura Nehalem da primeira geração).
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://a-static.mlcdn.com.br/1500x1500/processador-intel-core-i7-2600-3-4ghz-lga-1155-oem/reibatuta3/779/b5c0921478a9ab521b9e224e26e88c37.jpg" 
                  width="120px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="AMD Athlon II"
            subtitle="2009"
            side="right"
          >
            <div>
              Unidade central de processamento multi-nucleos da AMD, com 45 à 32 nm, processador de 2.8 Ghz, voltagens de 0.875-1.40V e com dois núcleos.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="data:image/jpeg;base64,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"
                  width="100px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Intel Core i5"
            subtitle="2009"
            side="left"
          >
            <div>
              Série de processadores da Intel destinada a desktop x86-64 que aborda a utilização da microarquitetura Nehalem. Diferentemente do processador Intel Core i7, o processador Intel Core i5 utiliza uma soquete denominada LGA 1156.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://cdn.awsli.com.br/600x450/240/240197/produto/15907393/7843291c73.jpg" 
                  width="100px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
              <q-separator class="col-12" size="2px"></q-separator>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Intel Core i3"
            subtitle="2009"
            side="left"
          >
            <div>
              Família de processadores da Intel, destinado a Desktops x86-64. Concebido no mesmo ano que o processador Core i5, o processador Core i3 é o processador de menor poder de processamento se comparado aos seus irmãos Core i7 e Core i5, da família Nehalem.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://s3.amazonaws.com/urgeio-versus/product/pictures/VKDXMZHDSEHBIAPRGPLNFIDPMWBZCSEDEEXIQFHABVXHREZLJQWVTHAZAJZCLIHE/original.jpg"
                  width="100px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="AMD Bulldozer"
            subtitle="2011"
            side="right"
          >
            <div>
               Microarquitetura usada pela AMD em seus microprocessadores a partir de 2011. Esta arquitetura é completamente diferente da arquitetura AMD64 que a AMD vem usando desde o lançamento do primeiro processador Athlon 64 em 2003. Bulldozer é, assim, o codinome da arquitetura, não de um processador específico.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://images.trustinnews.pt/uploads/sites/5/2019/12/852680users_0_12_amd-bulldozer-1e57.jpg" 
                  width="110px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>
          
          <q-timeline-entry
            title="Intel Core i9"
            subtitle="2017"
            side="left"
          >
            <div>
              Revelada em maio durante a Computex 2017, a família de processadores Core i9, da Intel, acaba de ter suas especificações e datas de lançamento anunciadas.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/13698725/image/480ae30364d6831cb31e3c5880951b01" 
                  width="120px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="AMD Ryzen"
            subtitle="2017"
            side="right"
          >
            <div>
               Microprocessadores x86-64 projetados e vendidos pela Advanced Micro Devices (AMD) para desktop, móveis e plataformas embarcadas baseadas na microarquitetura Zen. Consiste de unidades centrais de processamento (CPUs) comercializadas para os segmentos mainstream, entusiastas, servidores e workstation, e unidades de processamento acelerado (APUs) comercializadas para segmentos convencionais e de nível básico bem como para sistemas embarcados.
              <div class="col-12 q-pa-lg">
                <q-img 
                  src="https://en.wikichip.org/w/images/thumb/2/23/amd_ryzen_black_bg_logo.png/250px-amd_ryzen_black_bg_logo.png" 
                  width="120px" 
                  style="cursor: pointer; border-radius: 5px;" 
                >
                </q-img>
              </div>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </q-scroll-area>
    </q-card>
  </div>
</template>

<script lang="ts">
import AbstractComponent from 'src/components/abstract-component'

export default class HomeIndex extends AbstractComponent {

}

</script>