import TranslationTable from "./TranslationTable";

const translations = [
  { en: "Feature", lv: "Funkcionālā iezīme" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "Or", lv: "Vai" },
  { en: "But", lv: "Bet" },
  { en: "Background", lv: "Konteksts" },
  { en: "Rule", lv: "Noteikums" },
  { en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
  { en: "Examples", lv: "Piemēri" },
  { en: "User Story", lv: "Lietotājstāsts" },
  { en: "#", lv: "#(komentārs)" },
];

function Translations() {
  return <TranslationTable data={translations} />;
}

export default Translations;