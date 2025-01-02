export interface EvalInjection
{
    name: string;
    label: string;
    description: string;
    inject: string;
    action: ([]) => void;
}

export class EvalSandbox {
  private _worker!: Worker;
  public get worker(): Worker {
    return this._worker;
  }

  private _code: string = "";
  public get code(): string {
    return this._code;
  }
  public set code(value: string) {
    this._code = value;
  }

  constructor() {}
}
