import TranslationRow from "./TranslationRow";

function TranslationTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Angļu valodā</th>
          <th>Latviešu valodā</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TranslationRow key={index} en={item.en} lv={item.lv} />
        ))}
      </tbody>
    </table>
  );
}

export default TranslationTable;