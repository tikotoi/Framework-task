import { EmailComponent } from "../../components/email.component/email.component.js";
export class EmailPage {
  constructor() {
    this.emailPageGenerator = new EmailComponent();
  }
  async open() {
    await browser.newWindow("https://email-fake.com/");
  }
  async switchWindow() {
    await browser.switchWindow("https://email-fake.com");
  }
}
