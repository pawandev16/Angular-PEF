export interface PatrimonioImmobiliModel{
  immobileId?: string;
  anagId?: string;
  descr?: string;
  estremiCatastali?: string;
  valoreCorrente?: number;
  indirizzo?: string;
  localita?: string;
  conservatoriaId?: string;
  visureAggiornateAl?: Date;
  quotaProprieta?: number;
  dataTrascriz?: Date;
  valoreBilancio?: number;
  formalita?: number;
  valoreIpoteche1?: number;
  valoreIpoteche2?: number;
  dataIscrizione1?: Date;
  dataIscrizione2?: Date;
  debitoResiduoGarantito1?: number;
  debitoResiduoGarantito2?: number;
  beneficiarioGaranzie1?: string;
  beneficiarioGaranzie2?: string;
  scadenzaDebito1?: Date;
  scadenzaDebito2?: Date;
  note?: string;
  dipf?: number;
  progr?: number;
  conservatoria?: string;
}