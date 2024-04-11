import { CloudSearchComponent } from "../../components/cloud.component/cloud.component.js";
export class CloudPage {
  constructor() {
    this.cloudPageSearch = new CloudSearchComponent();
  }
  async open() {
    await browser.url("https://cloud.google.com/");
  }
}
