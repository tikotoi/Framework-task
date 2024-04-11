export class CalculatorComponent {
  dropdownIn(name) {
    const selector = {
      softwareIn: "#select_113",
      modelIn: "#select_117",
      machineIn: "#select_123",
      seriesIn: "#select_125",
      typeIn: "#select_127",
      gputypeIn: "#select_510",
      gpuNumberIn: "#select_512",
      localSsdIn: "#select_469",
      locationIn: "#select_133",
      usageIn: "#select_140",
    };
    return $(selector[name]);
  }

  dropdownOpt(name) {
    const selector = {
      softwareOpt: "#select_option_102",
      modelOpt: "#select_option_115",
      machineOpt: "#select_option_119",
      seriesOpt: "#select_option_224",
      typeOpt: "#select_option_474",
      gputypeOpt: "#select_option_517",
      gpuNumberOpt: "#select_option_520",
      localSsdOpt: "#select_option_495",
      locationOpt: "#select_option_268",
      usageOpt: "#select_option_138",
    };
    return $(selector[name]);
  }

  elements(name) {
    const selector = {
      numberOfInstances: "#input_100",
      emailInput: "#input_620",
    };
    return $(selector[name]);
  }

  addGpuBtn() {
    return $$(".md-container.md-ink-ripple")[2];
  }
  addToEstimateBtn() {
    return $$(".md-raised.md-primary.cpc-button.md-button.md-ink-ripple")[0];
  }
  getTotalCost() {
    return $$(".md-title")[3];
  }
  emailModal() {
    return $$(".md-fab.md-primary.md-mini.md-button.md-ink-ripple")[1];
  }
  sendEmail() {
    return $$(".md-raised.md-primary.cpc-button.md-button.md-ink-ripple")[4];
  }
}
