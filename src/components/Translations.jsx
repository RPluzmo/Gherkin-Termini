import TranslationTable from "./TranslationTable";

const translations = [
  { en: "Feature", lv: "Funkcionalitāte Fīča" },
  { en: "Background", lv: "Konteksts Situācija" },
  { en: "Rule", lv: "Rule" },
  { en: "Scenario", lv: "Piemērs Scenārijs" },
  { en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
  { en: "Examples", lv: "Piemēri Paraugs" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "But", lv: "Bet" }
];

function Translations() {
  return <TranslationTable data={translations} />;
}

export default Translations;