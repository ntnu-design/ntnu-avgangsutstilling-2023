import { useRouter } from "next/router";


function HeroDel () {
    const router = useRouter();
    return (
        router.asPath == "/bixd" ? (
            <div className="relative pt-16 sm:pt-0">
            <img 
              className="w-full"
              src="/svg/bixd/Mac.svg"
              alt="Background image with symbols for interaction design"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img 
                className="w-1/2 sm:w-1/3 pb-10"
                src="/svg/bixd/heading-svg.svg"
                alt="Image of the heading for the interaction design page"
                style={{top: '30%'}}
              />
              <p className="mx-auto w-2/3 sm:w-1/2 text-center"
                style={{top: '50%'}}
              >
                27 studenter fra Bachelor i grafisk design, 29 studenter fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser utvalgte arbeider fra egenportefølje.
              </p>
            </div>
          </div>  
        ) : router.asPath == "/bwu" ? (
            <div className="relative pt-16 sm:pt-0">
            <img 
              className="w-full"
              src="/svg/bwu/Mac.svg"
              alt="Background image with symbols for interaction design"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img 
                className="w-1/2 sm:w-1/3 pb-10"
                src="/svg/bwu/heading-svg.svg"
                alt="Image of the heading for the interaction design page"
                style={{top: '30%'}}
              />
              <p className="mx-auto w-2/3 sm:w-1/2 text-center"
                style={{top: '50%'}}
              >
                27 studenter fra Bachelor i grafisk design, 29 studenter fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser utvalgte arbeider fra egenportefølje.
              </p>
            </div>
          </div>
        ) : router.asPath == "/bmed" ? (
            <div className="relative pt-16 sm:pt-0">
            <img 
              className="w-full"
              src="/svg/bmed/Mac.svg"
              alt="Background image with symbols for interaction design"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img 
                className="w-1/2 sm:w-1/3 pb-10"
                src="/svg/bmed/heading-svg.svg"
                alt="Image of the heading for the interaction design page"
                style={{top: '30%'}}
              />
              <p className="mx-auto w-2/3 sm:w-1/2 text-center"
                style={{top: '50%'}}
              >
                27 studenter fra Bachelor i grafisk design, 29 studenter fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser utvalgte arbeider fra egenportefølje.
              </p>
            </div>
          </div>
        ) : (
            <div className="relative pt-16 sm:pt-0">
            <img 
              className="w-full"
              src="/svg/hjem/Mac.svg"
              alt="Background image with symbols for interaction design"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img 
                className="w-1/2 sm:w-1/3 pb-10"
                src="/svg/hjem/heading-svg.svg"
                alt="Image of the heading for the interaction design page"
                style={{top: '30%'}}
              />
              <p className="mx-auto w-2/3 sm:w-1/2 text-center"
                style={{top: '50%'}}
              >
                27 studenter fra Bachelor i grafisk design, 29 studenter fra Bachelor interaksjonsdesign og 18 studenter fra Bachelor i webutvikling ved NTNU i Gjøvik avslutter tre års studier med en utstilling. Hver student viser utvalgte arbeider fra egenportefølje.
              </p>
            </div>
          </div>
        )
    )
       
};

export default HeroDel