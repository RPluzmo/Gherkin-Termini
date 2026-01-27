import TranslationRow from "./TranslationRow";
import "./Translations.css";

function TranslationTable({ data }) {
  return (
    <table  className="gherkin-table">
      <thead>
        <tr>
          <th>Angļu valodā</th>
          <th>Latviešu valodā</th>
        </tr>
      </thead>
      <tbody border="1">
        {data.map((item, index) => (
          <TranslationRow key={index} en={item.en} lv={item.lv} />
        ))}
      </tbody>
    </table>
  );
}

export default TranslationTable;