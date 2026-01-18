import Link from "next/link";

export const metadata = {
  title: "Obchodní podmínky | Autoškola Falář",
  description: "Obchodní podmínky poskytování služeb autoškoly Falář Vimperk.",
  alternates: {
    canonical: '/obchodni-podminky',
  },
};

export default function ObchodniPodminky() {
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
            Obchodní podmínky
          </h1>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            {/* Úvod */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Základní ustanovení
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tyto obchodní podmínky (dále jen &quot;OP&quot;) upravují vzájemná práva a
                povinnosti mezi provozovatelem autoškoly a žákem při poskytování
                služeb výuky řízení motorových vozidel.
              </p>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Poskytovatel služeb:</strong>
                </p>
                <p className="text-gray-700 mb-1">Autoškola Falář</p>
                <p className="text-gray-700 mb-1">1. máje 194/15, 385 01 Vimperk II</p>
                <p className="text-gray-700 mb-1">
                  Tel:{" "}
                  <a
                    href="tel:+420606050530"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    +420 606 050 530
                  </a>
                </p>
                <p className="text-gray-700">
                  E-mail:{" "}
                  <a
                    href="mailto:info@autoskola-falar.cz"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    info@autoskola-falar.cz
                  </a>
                </p>
              </div>
            </section>

            {/* Předmět smlouvy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Předmět smlouvy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Předmětem smlouvy je poskytování služeb výuky řízení motorových
                vozidel v rozsahu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Teoretické přípravy podle platného učebního plánu</li>
                <li>Praktické výuky jízd (minimální rozsah dle zákona)</li>
                <li>Přípravy na teoretickou a praktickou zkoušku</li>
                <li>Administrativní zajištění přihlášení ke zkouškám</li>
              </ul>
            </section>

            {/* Práva a povinnosti autoškoly */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Práva a povinnosti autoškoly
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Autoškola se zavazuje:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Poskytovat kvalitní teoretickou a praktickou výuku</li>
                <li>Dodržovat zákonné požadavky na výuku řízení</li>
                <li>
                  Používat technicky způsobilá a bezpečná výuková vozidla
                </li>
                <li>Zajistit kvalifikované instruktory s platným oprávněním</li>
                <li>Vést evidenci žáků v systému &quot;Moje autoškola&quot;</li>
                <li>Přihlásit žáka ke zkouškám po splnění podmínek</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Autoškola má právo:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Měnit rozvrh výuky z provozních důvodů</li>
                <li>
                  Vyloučit žáka při porušování pravidel nebo nevhodném chování
                </li>
                <li>
                  Odmítnout přihlášení ke zkoušce, pokud žák nesplňuje
                  podmínky
                </li>
                <li>Požadovat úhradu služeb před jejich poskytnutím</li>
              </ul>
            </section>

            {/* Práva a povinnosti žáka */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Práva a povinnosti žáka
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Žák se zavazuje:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Dodržovat pokyny instruktora a pravidla silničního provozu</li>
                <li>Účastnit se pravidelně teoretické a praktické výuky</li>
                <li>
                  Předložit všechny potřebné doklady (občanský průkaz, lékařské
                  potvrzení)
                </li>
                <li>
                  Uhradit cenu kurzu ve sjednané výši a termínu
                </li>
                <li>
                  Nahlásit změnu kontaktních údajů nebo zdravotního stavu
                </li>
                <li>Chovat se slušně a ohleduplně k instruktorům i ostatním účastníkům</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Žák má právo:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Na kvalitní a profesionální výuku</li>
                <li>Na poskytnutí všech informací o průběhu kurzu</li>
                <li>
                  Nahlížet do své evidence v systému &quot;Moje autoškola&quot;
                </li>
                <li>Požádat o změnu termínu hodiny jízd (s dostatečným předstihem)</li>
              </ul>
            </section>

            {/* Cena a platební podmínky */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Cena a platební podmínky
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Cena kurzu zahrnuje:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Teoretickou přípravu dle učebního plánu</li>
                <li>Minimální počet praktických hodin jízd dle zákona</li>
                <li>Studijní materiály a přístup do online testů</li>
                <li>
                  Administrativní zajištění přihlášení ke zkouškám (první
                  pokus)
                </li>
                <li>Evidenci v systému &quot;Moje autoškola&quot;</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Cena kurzu nezahrnuje:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Poplatky za teoretickou a praktickou zkoušku na úřadě</li>
                <li>Lékařské vyšetření a potvrzení</li>
                <li>Fotografie pro řidičský průkaz</li>
                <li>Další hodiny jízd nad rámec základního kurzu</li>
                <li>Opakované přihlášení ke zkouškám</li>
              </ul>
              <div className="bg-skoda-dynamic-blue/5 border-l-4 border-skoda-dynamic-blue p-4 sm:p-6 rounded-r-lg">
                <p className="text-gray-700 font-semibold mb-2">
                  Platební podmínky:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    Cenu kurzu je nutné uhradit před zahájením výuky nebo v
                    dohodnutých splátkách
                  </li>
                  <li>
                    Platba je možná v hotovosti, bankovním převodem nebo kartou
                  </li>
                  <li>Po úhradě bude vystavena příjmová doklad/faktura</li>
                </ul>
              </div>
            </section>

            {/* Storno podmínky */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Storno podmínky a odstoupení od smlouvy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Odstoupení od smlouvy žákem:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>
                  <strong>Před zahájením výuky:</strong> Vrácení 100% uhrazené
                  částky
                </li>
                <li>
                  <strong>Po zahájení teoretické výuky:</strong> Vrácení částky
                  snížené o skutečně poskytnuté služby
                </li>
                <li>
                  <strong>Po zahájení praktické výuky:</strong> Vrácení částky
                  snížené o cenu absolvovaných hodin jízd a teoretické výuky
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Zrušení hodiny jízd žákem:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>
                  <strong>Více než 24 hodin předem:</strong> Hodina bude
                  přeplánována bez poplatku
                </li>
                <li>
                  <strong>Méně než 24 hodin předem:</strong> Hodina se
                  započítává jako absolvovaná
                </li>
                <li>
                  <strong>Nedostavení se:</strong> Hodina je zpoplatněna v plné
                  výši
                </li>
              </ul>
            </section>

            {/* Reklamace */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Reklamace a stížnosti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Žák má právo podat reklamaci nebo stížnost:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>Písemně na adrese autoškoly</li>
                <li>
                  E-mailem na{" "}
                  <a
                    href="mailto:info@autoskola-falar.cz"
                    className="text-skoda-dynamic-blue hover:underline"
                  >
                    info@autoskola-falar.cz
                  </a>
                </li>
                <li>Telefonicky na +420 606 050 530</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Autoškola se zavazuje vyřídit reklamaci do 30 dnů od jejího
                obdržení a informovat žáka o výsledku.
              </p>
            </section>

            {/* Závěrečná ustanovení */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Závěrečná ustanovení
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Tyto obchodní podmínky jsou platné a účinné od 1. ledna 2025
                </li>
                <li>
                  Autoškola si vyhrazuje právo změnit OP, žáci budou o změně
                  informováni
                </li>
                <li>
                  Veškeré spory budou řešeny primárně dohodou, jinak u
                  příslušného soudu
                </li>
                <li>
                  Uzavřením smlouvy žák potvrzuje, že se seznámil s těmito OP a
                  souhlasí s nimi
                </li>
              </ul>
            </section>

            {/* Kontakt */}
            <section className="mb-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Máte dotazy?
                </h3>
                <p className="text-gray-700 mb-4">
                  V případě nejasností nebo dotazů k obchodním podmínkám nás
                  neváhejte kontaktovat:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Telefon</p>
                    <a
                      href="tel:+420606050530"
                      className="text-skoda-dynamic-blue hover:underline font-semibold"
                    >
                      +420 606 050 530
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">E-mail</p>
                    <a
                      href="mailto:info@autoskola-falar.cz"
                      className="text-skoda-dynamic-blue hover:underline font-semibold"
                    >
                      info@autoskola-falar.cz
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Účinnost */}
            <section>
              <p className="text-sm text-gray-600 italic text-center">
                Tyto obchodní podmínky jsou účinné od 1. ledna 2025.
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
              © 2026 Autoškola Falář & Houdek. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
