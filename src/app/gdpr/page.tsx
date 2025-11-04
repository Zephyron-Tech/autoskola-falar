import Link from "next/link";

export const metadata = {
  title: "GDPR - Ochrana osobních údajů | Autoškola Falář",
  description: "Informace o zpracování osobních údajů v Autoškole Falář Vimperk v souladu s GDPR.",
};

export default function GDPR() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-skoda-dynamic-blue transition-colors"
            >
              Autoškola Falář
            </Link>
            <Link
              href="/"
              className="text-sm sm:text-base text-skoda-dynamic-blue hover:underline"
            >
              ← Zpět na hlavní stránku
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Ochrana osobních údajů (GDPR)
          </h1>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            {/* Úvod */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Základní informace
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Autoškola Falář respektuje vaše právo na ochranu osobních údajů
                a zavazuje se chránit vaše osobní údaje v souladu s nařízením
                Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických
                osob v souvislosti se zpracováním osobních údajů (GDPR).
              </p>
            </section>

            {/* Správce údajů */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Správce osobních údajů
              </h2>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Název:</strong> Autoškola Falář
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Sídlo:</strong> 1. máje 194/15, 385 01 Vimperk II
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+420606050530"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    +420 606 050 530
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:info@autoskola-falar.cz"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    info@autoskola-falar.cz
                  </a>
                </p>
              </div>
            </section>

            {/* Jaké údaje zpracováváme */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Jaké osobní údaje zpracováváme
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                V rámci poskytování našich služeb zpracováváme následující
                osobní údaje:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Jméno a příjmení</li>
                <li>Datum narození</li>
                <li>Rodné číslo</li>
                <li>Adresa trvalého bydliště</li>
                <li>Telefonní číslo</li>
                <li>E-mailová adresa</li>
                <li>Údaje z občanského průkazu</li>
                <li>Fotografie pro účely vydání řidičského průkazu</li>
                <li>Zdravotní způsobilost (lékařské potvrzení)</li>
              </ul>
            </section>

            {/* Účel zpracování */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Účel zpracování osobních údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobní údaje zpracováváme za následujícími účely:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Uzavření a plnění smlouvy o poskytování služeb výuky řízení
                </li>
                <li>
                  Vedení evidence žáků v souladu se zákonem o silničním provozu
                </li>
                <li>Přihlášení k teoretickým a praktickým zkouškám</li>
                <li>Komunikace s žáky a jejich zákonnými zástupci</li>
                <li>Plnění zákonných povinností (daňové, účetní apod.)</li>
                <li>
                  Zasílání informací o kurzech a změnách v rozvrhu (se souhlasem)
                </li>
              </ul>
            </section>

            {/* Právní základ */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Právní základ zpracování
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Osobní údaje zpracováváme na základě:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Plnění smlouvy</strong> – zpracování je nezbytné pro
                  plnění smlouvy o výuce řízení
                </li>
                <li>
                  <strong>Plnění právních povinností</strong> – vedení evidence
                  žáků dle zákona č. 247/2000 Sb., o získávání a zdokonalování
                  odborné způsobilosti
                </li>
                <li>
                  <strong>Oprávněný zájem</strong> – komunikace s žáky,
                  zlepšování kvality služeb
                </li>
                <li>
                  <strong>Souhlas</strong> – pro marketingové účely (lze
                  kdykoliv odvolat)
                </li>
              </ul>
            </section>

            {/* Doba uložení */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Doba uložení osobních údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Osobní údaje uchováváme po dobu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Po dobu trvání kurzu</strong> – aktivní zpracování
                </li>
                <li>
                  <strong>10 let po ukončení kurzu</strong> – archivace dle
                  zákona o silničním provozu
                </li>
                <li>
                  <strong>5 let</strong> – účetní doklady dle zákona o
                  účetnictví
                </li>
                <li>
                  <strong>Do odvolání souhlasu</strong> – marketingové účely
                </li>
              </ul>
            </section>

            {/* Předávání údajů */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Předávání osobních údajů třetím stranám
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobní údaje můžeme předávat následujícím subjektům:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Obecní úřad obce s rozšířenou působností</strong> –
                  přihlášení ke zkouškám
                </li>
                <li>
                  <strong>Systém &quot;Moje autoškola&quot;</strong> –
                  elektronická evidence žáků
                </li>
                <li>
                  <strong>Účetní firma</strong> – zpracování účetnictví
                </li>
                <li>
                  <strong>IT poskytovatel</strong> – hosting webových stránek
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Všichni zpracovatelé jsou vázáni povinností mlčenlivosti a
                zpracovávají údaje pouze v rozsahu nezbytném pro plnění našich
                služeb.
              </p>
            </section>

            {/* Práva subjektů údajů */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Vaše práva
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Máte následující práva:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Právo na přístup</strong> – získat informace o
                  zpracování vašich údajů
                </li>
                <li>
                  <strong>Právo na opravu</strong> – opravit nepřesné nebo
                  neúplné údaje
                </li>
                <li>
                  <strong>Právo na výmaz</strong> – požádat o smazání údajů (v
                  souladu se zákonem)
                </li>
                <li>
                  <strong>Právo na omezení zpracování</strong> – omezit
                  zpracování v určitých případech
                </li>
                <li>
                  <strong>Právo na přenositelnost údajů</strong> – získat údaje
                  ve strukturovaném formátu
                </li>
                <li>
                  <strong>Právo vznést námitku</strong> – proti zpracování na
                  základě oprávněného zájmu
                </li>
                <li>
                  <strong>Právo odvolat souhlas</strong> – kdykoli odvolat souhlas se zpracováním
                </li>
                <li>
                  <strong>Právo podat stížnost</strong> – u Úřadu pro ochranu osobních údajů
                </li>
              </ul>
            </section>

            {/* Zabezpečení */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Zabezpečení osobních údajů
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobní údaje chráníme pomocí technických a organizačních
                opatření:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Šifrování komunikace (HTTPS/SSL)</li>
                <li>Pravidelné zálohy dat</li>
                <li>Omezený přístup pouze pro oprávněné osoby</li>
                <li>Školení zaměstnanců v oblasti GDPR</li>
                <li>Bezpečnostní audity a aktualizace systémů</li>
              </ul>
            </section>

            {/* Kontakt */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Kontakt pro uplatnění práv
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pro uplatnění vašich práv nebo dotazy ohledně zpracování
                osobních údajů nás kontaktujte:
              </p>
              <div className="bg-skoda-dynamic-blue/5 border-l-4 border-skoda-dynamic-blue p-4 sm:p-6 rounded-r-lg">
                <p className="text-gray-700 mb-2">
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:info@autoskola-falar.cz"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    info@autoskola-falar.cz
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefon:</strong>{" "}
                  <a
                    href="tel:+420606050530"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    +420 606 050 530
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Poštovní adresa:</strong> Autoškola Falář, 1. máje
                  194/15, 385 01 Vimperk II
                </p>
              </div>
            </section>

            {/* Účinnost */}
            <section className="mb-8">
              <p className="text-sm text-gray-600 italic">
                Tyto zásady ochrany osobních údajů jsou účinné od 1. ledna 2025.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2025 Autoškola Falář. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
