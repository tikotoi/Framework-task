export class CloudSearchComponent {
  item(name) {
    const selector = {
      searchIcon: ".YSM5S",
      searchInput: "#i4",
      seachBtn: ".google-material-icons.PETVs.PETVs-OWXEXe-UbuQg",
      searchResult:
        "//a[@href='https://cloud.google.com/products/calculator-legacy?hl=es-419']",
    };
    return $(selector[name]);
  }
}
