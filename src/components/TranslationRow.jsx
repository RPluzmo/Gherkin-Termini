function TranslationRow({ en, lv }) {
    return (
      <tr>
        <td className="col-en">{en}</td>
        <td className="col-lv">{lv}</td>
      </tr>
    );
  }
  
  export default TranslationRow;