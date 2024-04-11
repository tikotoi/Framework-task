export class EmailComponent {
  getElement(name) {
    const selector = {
      generatedEmail: "#email_ch_text",
      priceFromEmail: "h2",
    };
    return $(selector[name]);
  }
}
