// Type definitions for Diapositive
// Project Diapositive
// Definitions by: Julien Verneaut

export as namespace Diapositive;
export = Diapositive;

declare class Diapositive{
  constructor(selector: String, options: {
    autoPlay?: Boolean;
    activeClassName?: String;
    prevClassName?: String;
    nextClassName?: String;
    startAt?: Number;
    time?: Number;
  })
}
