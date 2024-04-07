import { BaseComponent } from "./base.component.js";

export class HeaderComponent extends BaseComponent {
    constructor() {
        super(".planner-header");
    }

    get logoutBtn() {
        return this.rootEl.$(".logout-icon-container")
    }
}