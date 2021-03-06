import Tranche from "./tranche";

export default class ImpotSociete {
  public benefice: number;
  tranches: Tranche[];
  revenu: number;

  constructor() {
    this.tranches = [
      new Tranche(0, 38120, 0.15),
      new Tranche(38120, 500000, 0.28),
      new Tranche(500000, null, 0.33)
    ];
  }

  getImpot(): number {
    let total = 0;
    this.tranches.forEach(tranche => {
      total += tranche.getImpot(this.benefice);
    });
    return total;
  }

  getTranches() {
    let baseIS = this.benefice;
    let total = 0;
    let tranches = [];
    this.tranches.forEach(tranche => {
      tranches.push({
        value: tranche.getImpot(this.benefice),
        min: tranche.getMin(),
        max: tranche.getMax(),
        taux: tranche.getTaux()
      });
    });
    return tranches;
  }
}
